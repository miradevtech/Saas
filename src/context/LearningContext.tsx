import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile as fbUpdateProfile,
  User as FirebaseUser,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  orderBy,
} from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from '../firebase';
import { COURSES } from '../data/courses';
import {
  User,
  Enrollment,
  QuizAttempt,
  LearningActivity,
  LearningStats,
} from '../types';

interface LearningContextType {
  user: User | null;
  firebaseUser: FirebaseUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  enrollments: Enrollment[];
  quizAttempts: QuizAttempt[];
  activities: LearningActivity[];
  stats: LearningStats;
  login: (email: string, password?: string, name?: string) => Promise<void>;
  signup: (name: string, email: string, password?: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  enrollCourse: (courseId: string) => Promise<void>;
  isEnrolled: (courseId: string) => boolean;
  getEnrollment: (courseId: string) => Enrollment | undefined;
  completeLesson: (courseId: string, lessonId: string) => Promise<void>;
  submitQuiz: (
    courseId: string,
    quizId: string,
    selectedAnswers: Record<string, number>
  ) => Promise<{
    score: number;
    totalQuestions: number;
    scorePercent: number;
    passed: boolean;
  }>;
}

// Default fallback demo credentials for smooth 1-click experiences
const DEMO_DEFAULT_PASSWORD = 'LearnPath!2026';


function sanitizeData<T extends Record<string, any>>(data: T): T {
  const clean: any = {};
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) {
      clean[key] = value;
    }
  }
  return clean;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([]);
  const [activities, setActivities] = useState<LearningActivity[]>([]);

  // Load user data from Firestore for a signed in user
  const syncUserDataFromFirestore = async (fbUser: FirebaseUser) => {
    try {
      const userRef = doc(db, 'users', fbUser.uid);
      const userSnap = await getDoc(userRef);

      let currentProfile: User;
      if (userSnap.exists()) {
        currentProfile = userSnap.data() as User;
      } else {

        const derivedName = fbUser.displayName || (
          fbUser.email
            ? fbUser.email.split('@')[0].replace(/[._0-9]/g, ' ').trim().replace(/\b\w/g, (c) => c.toUpperCase())
            : 'Student'
        );

        currentProfile = {
          id: fbUser.uid,
          name: derivedName || 'Student',
          email: fbUser.email || '',
          title: 'Lifelong Learner & Student',
          avatarUrl: fbUser.photoURL || '',
          createdAt: new Date().toISOString(),
        };
        try {
          await setDoc(userRef, sanitizeData(currentProfile));
        } catch (err) {
          handleFirestoreError(err, OperationType.CREATE, `users/${fbUser.uid}`);
        }
      }
      setUser(currentProfile);

      // Load Enrollments from Firestore
      const enrollmentsRef = collection(db, 'users', fbUser.uid, 'enrollments');
      let loadedEnrollments: Enrollment[] = [];
      try {
        const enrollSnap = await getDocs(enrollmentsRef);
        loadedEnrollments = enrollSnap.docs.map((d) => d.data() as Enrollment);
      } catch (err) {
        handleFirestoreError(err, OperationType.LIST, `users/${fbUser.uid}/enrollments`);
      }

      // Load Activities from Firestore
      const activitiesRef = collection(db, 'users', fbUser.uid, 'activities');
      let loadedActivities: LearningActivity[] = [];
      try {
        const actSnap = await getDocs(activitiesRef);
        loadedActivities = actSnap.docs.map((d) => d.data() as LearningActivity);
        loadedActivities.sort(
          (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
      } catch (err) {
        handleFirestoreError(err, OperationType.LIST, `users/${fbUser.uid}/activities`);
      }

      // Load Quiz Attempts from Firestore
      const quizAttemptsRef = collection(db, 'users', fbUser.uid, 'quizAttempts');
      let loadedQuizAttempts: QuizAttempt[] = [];
      try {
        const quizSnap = await getDocs(quizAttemptsRef);
        loadedQuizAttempts = quizSnap.docs.map((d) => d.data() as QuizAttempt);
        loadedQuizAttempts.sort(
          (a, b) => new Date(b.attemptedAt).getTime() - new Date(a.attemptedAt).getTime()
        );
      } catch (err) {
        handleFirestoreError(err, OperationType.LIST, `users/${fbUser.uid}/quizAttempts`);
      }

      // Purge any legacy dummy mock enrollments (seeded with 2026-02 timestamps)
      const cleanEnrollments: Enrollment[] = [];
      for (const enr of loadedEnrollments) {
        if (enr.enrolledAt && enr.enrolledAt.startsWith('2026-02-') && enr.id.startsWith('enr-')) {
          // Legacy dummy seed record - clean up from Firestore
          try {
            const { deleteDoc } = await import('firebase/firestore');
            await deleteDoc(doc(db, 'users', fbUser.uid, 'enrollments', enr.id));
          } catch (e) {
            console.warn('Clean up legacy seed enrollment:', e);
          }
        } else {
          cleanEnrollments.push(enr);
        }
      }

      // Purge legacy dummy activities
      const cleanActivities: LearningActivity[] = [];
      for (const act of loadedActivities) {
        if (act.timestamp && act.timestamp.startsWith('2026-02-') && act.id.startsWith('act-')) {
          try {
            const { deleteDoc } = await import('firebase/firestore');
            await deleteDoc(doc(db, 'users', fbUser.uid, 'activities', act.id));
          } catch (e) {
            console.warn('Clean up legacy seed activity:', e);
          }
        } else {
          cleanActivities.push(act);
        }
      }

      // Purge legacy dummy quiz attempts
      const cleanQuizAttempts: QuizAttempt[] = [];
      for (const qa of loadedQuizAttempts) {
        if (qa.attemptedAt && qa.attemptedAt.startsWith('2026-02-') && qa.id.startsWith('qa-')) {
          try {
            const { deleteDoc } = await import('firebase/firestore');
            await deleteDoc(doc(db, 'users', fbUser.uid, 'quizAttempts', qa.id));
          } catch (e) {
            console.warn('Clean up legacy seed quiz attempt:', e);
          }
        } else {
          cleanQuizAttempts.push(qa);
        }
      }

      setEnrollments(cleanEnrollments);
      setActivities(cleanActivities);
      setQuizAttempts(cleanQuizAttempts);
    } catch (error) {
      console.error('Error synchronizing student data from Firestore:', error);
    }
  };

  // Listen to Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentFbUser) => {
      setIsLoading(true);
      setFirebaseUser(currentFbUser);

      if (currentFbUser) {
        await syncUserDataFromFirestore(currentFbUser);
      } else {
        // User logged out
        setUser(null);
        setEnrollments([]);
        setQuizAttempts([]);
        setActivities([]);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Firebase Email Sign In
  const login = async (email: string, password = DEMO_DEFAULT_PASSWORD, name?: string) => {
    setIsLoading(true);
    const cleanEmail = email.trim().toLowerCase();

    try {
      // Attempt standard Firebase Auth sign in
      const credential = await signInWithEmailAndPassword(auth, cleanEmail, password);
      await syncUserDataFromFirestore(credential.user);
    } catch (err: any) {
      // If user does not exist yet (e.g. quick demo sign in), automatically create the Firebase account
      if (
        err.code === 'auth/user-not-found' ||
        err.code === 'auth/invalid-credential' ||
        err.code === 'auth/invalid-login-credentials'
      ) {
        try {
          const newCred = await createUserWithEmailAndPassword(auth, cleanEmail, password);
          const displayName =
            name || cleanEmail.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
          await fbUpdateProfile(newCred.user, { displayName });
          await syncUserDataFromFirestore(newCred.user);
        } catch (createErr: any) {
          console.error('Firebase Auth sign in / sign up fallback error:', createErr);
          throw createErr;
        }
      } else {
        console.error('Firebase login error:', err);
        throw err;
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Firebase Email Sign Up
  const signup = async (name: string, email: string, password = DEMO_DEFAULT_PASSWORD) => {
    setIsLoading(true);
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, cleanEmail, password);
      await fbUpdateProfile(userCredential.user, { displayName: cleanName });

      // Create profile document in Firestore
      const newProfile: User = {
        id: userCredential.user.uid,
        name: cleanName,
        email: cleanEmail,
        title: 'Student & Lifelong Learner',
        createdAt: new Date().toISOString(),
      };

      try {
        await setDoc(doc(db, 'users', userCredential.user.uid), sanitizeData(newProfile));
      } catch (err) {
        handleFirestoreError(err, OperationType.CREATE, `users/${userCredential.user.uid}`);
      }

      await syncUserDataFromFirestore(userCredential.user);
    } catch (err: any) {
      console.error('Firebase signup error:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Firebase Password Reset
  const resetPassword = async (email: string) => {
    const cleanEmail = email.trim().toLowerCase();
    try {
      await sendPasswordResetEmail(auth, cleanEmail);
    } catch (err) {
      console.error('Firebase sendPasswordResetEmail error:', err);
      throw err;
    }
  };

  // Firebase Sign Out
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Firebase signOut error:', err);
    } finally {
      setUser(null);
      setFirebaseUser(null);
      setEnrollments([]);
      setQuizAttempts([]);
      setActivities([]);
    }
  };

  // Update Profile in Firestore
  const updateProfile = async (data: Partial<User>) => {
    if (!user || !auth.currentUser) return;
    const updated: User = { ...user, ...data };
    setUser(updated);

    try {
      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        name: updated.name,
        title: updated.title || '',
        avatarUrl: updated.avatarUrl || '',
      });
      if (data.name) {
        await fbUpdateProfile(auth.currentUser, { displayName: data.name });
      }
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${auth.currentUser.uid}`);
    }
  };

  const isEnrolled = (courseId: string) => {
    return enrollments.some((e) => e.courseId === courseId);
  };

  const getEnrollment = (courseId: string) => {
    return enrollments.find((e) => e.courseId === courseId);
  };

  // Enroll in Course & Persist to Firestore
  const enrollCourse = async (courseId: string) => {
    if (!user || !auth.currentUser) return;
    if (isEnrolled(courseId)) return;

    const course = COURSES.find((c) => c.id === courseId);
    if (!course) return;

    const firstLessonId = course.lessons[0]?.id || '';
    const enrollmentId = `enr-${Date.now()}`;

    const newEnrollment: Enrollment = {
      id: enrollmentId,
      userId: auth.currentUser.uid,
      courseId,
      enrolledAt: new Date().toISOString(),
      lastAccessedAt: new Date().toISOString(),
      completedLessonIds: [],
      currentLessonId: firstLessonId,
      progressPercent: 0,
      isCompleted: false,
    };

    // Optimistic state update
    setEnrollments((prev) => [newEnrollment, ...prev]);

    const activityId = `act-${Date.now()}`;
    const newActivity: LearningActivity = {
      id: activityId,
      userId: auth.currentUser.uid,
      type: 'enrolled',
      courseId,
      courseTitle: course.title,
      detail: `Enrolled in ${course.title} (${course.lessonsCount} lessons)`,
      timestamp: new Date().toISOString(),
    };
    setActivities((prev) => [newActivity, ...prev]);

    // Persist to Firestore
    try {
      await setDoc(
        doc(db, 'users', auth.currentUser.uid, 'enrollments', enrollmentId),
        newEnrollment
      );
    } catch (err) {
      handleFirestoreError(
        err,
        OperationType.CREATE,
        `users/${auth.currentUser.uid}/enrollments/${enrollmentId}`
      );
    }

    try {
      await setDoc(
        doc(db, 'users', auth.currentUser.uid, 'activities', activityId),
        newActivity
      );
    } catch (err) {
      handleFirestoreError(
        err,
        OperationType.CREATE,
        `users/${auth.currentUser.uid}/activities/${activityId}`
      );
    }
  };

  // Complete Lesson & Persist to Firestore
  const completeLesson = async (courseId: string, lessonId: string) => {
    if (!user || !auth.currentUser) return;

    const course = COURSES.find((c) => c.id === courseId);
    if (!course) return;

    const existingEnr = enrollments.find((e) => e.courseId === courseId);
    if (!existingEnr) return;

    const updatedCompleted = existingEnr.completedLessonIds.includes(lessonId)
      ? existingEnr.completedLessonIds
      : [...existingEnr.completedLessonIds, lessonId];

    const totalLessons = course.lessons.length;
    const progressPercent = Math.min(
      100,
      Math.round((updatedCompleted.length / totalLessons) * 100)
    );

    const currentIdx = course.lessons.findIndex((l) => l.id === lessonId);
    const nextLesson = course.lessons[currentIdx + 1];
    const nextLessonId = nextLesson ? nextLesson.id : lessonId;
    const isNowCompleted = progressPercent === 100;

    const updatedEnr: Enrollment = {
      ...existingEnr,
      completedLessonIds: updatedCompleted,
      currentLessonId: nextLessonId,
      progressPercent,
      isCompleted: isNowCompleted,
      completedAt: isNowCompleted ? new Date().toISOString() : existingEnr.completedAt,
      lastAccessedAt: new Date().toISOString(),
    };

    setEnrollments((prev) =>
      prev.map((enr) => (enr.courseId === courseId ? updatedEnr : enr))
    );

    if (isNowCompleted && !existingEnr.isCompleted) {
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    }

    const lesson = course.lessons.find((l) => l.id === lessonId);
    const lessonTitle = lesson?.title || 'Lesson';

    const activityId = `act-${Date.now()}`;
    const newActivity: LearningActivity = {
      id: activityId,
      userId: auth.currentUser.uid,
      type: isNowCompleted ? 'completed_course' : 'completed_lesson',
      courseId,
      courseTitle: course.title,
      detail: isNowCompleted
        ? `Completed all lessons in ${course.title}!`
        : `Completed "${lessonTitle}" in ${course.title}`,
      timestamp: new Date().toISOString(),
    };
    setActivities((prev) => [newActivity, ...prev]);

    // Persist to Firestore
    try {
      await updateDoc(
        doc(db, 'users', auth.currentUser.uid, 'enrollments', existingEnr.id),
        {
          completedLessonIds: updatedEnr.completedLessonIds,
          currentLessonId: updatedEnr.currentLessonId,
          progressPercent: updatedEnr.progressPercent,
          isCompleted: updatedEnr.isCompleted,
          completedAt: updatedEnr.completedAt || null,
          lastAccessedAt: updatedEnr.lastAccessedAt,
        }
      );
    } catch (err) {
      handleFirestoreError(
        err,
        OperationType.UPDATE,
        `users/${auth.currentUser.uid}/enrollments/${existingEnr.id}`
      );
    }

    try {
      await setDoc(
        doc(db, 'users', auth.currentUser.uid, 'activities', activityId),
        newActivity
      );
    } catch (err) {
      handleFirestoreError(
        err,
        OperationType.CREATE,
        `users/${auth.currentUser.uid}/activities/${activityId}`
      );
    }
  };

  // Submit Quiz & Persist to Firestore
  const submitQuiz = async (
    courseId: string,
    quizId: string,
    selectedAnswers: Record<string, number>
  ) => {
    const course = COURSES.find((c) => c.id === courseId);
    if (!course || !course.quiz) {
      return { score: 0, totalQuestions: 0, scorePercent: 0, passed: false };
    }

    const quiz = course.quiz;
    let correctCount = 0;

    quiz.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        correctCount += 1;
      }
    });

    const totalQuestions = quiz.questions.length;
    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    const passed = scorePercent >= quiz.passingScorePercent;

    if (user && auth.currentUser) {
      const attemptId = `qa-${Date.now()}`;
      const attempt: QuizAttempt = {
        id: attemptId,
        userId: auth.currentUser.uid,
        courseId,
        quizId,
        score: correctCount,
        totalQuestions,
        scorePercent,
        passed,
        attemptedAt: new Date().toISOString(),
      };

      setQuizAttempts((prev) => [attempt, ...prev]);

      // Update local enrollment quizScore
      setEnrollments((prev) =>
        prev.map((e) =>
          e.courseId === courseId
            ? { ...e, quizScore: Math.max(e.quizScore || 0, scorePercent) }
            : e
        )
      );

      const activityId = `act-${Date.now()}`;
      const activity: LearningActivity = {
        id: activityId,
        userId: auth.currentUser.uid,
        type: 'completed_quiz',
        courseId,
        courseTitle: course.title,
        detail: `Completed quiz with ${scorePercent}% score (${correctCount}/${totalQuestions})`,
        timestamp: new Date().toISOString(),
      };
      setActivities((prev) => [activity, ...prev]);

      if (passed) {
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore
        }
      }

      // Persist attempt to Firestore
      try {
        await setDoc(
          doc(db, 'users', auth.currentUser.uid, 'quizAttempts', attemptId),
          attempt
        );
      } catch (err) {
        handleFirestoreError(
          err,
          OperationType.CREATE,
          `users/${auth.currentUser.uid}/quizAttempts/${attemptId}`
        );
      }

      // Update enrollment score in Firestore if enrolled
      const currentEnr = enrollments.find((e) => e.courseId === courseId);
      if (currentEnr) {
        const bestScore = Math.max(currentEnr.quizScore || 0, scorePercent);
        try {
          await updateDoc(
            doc(db, 'users', auth.currentUser.uid, 'enrollments', currentEnr.id),
            { quizScore: bestScore }
          );
        } catch (err) {
          console.warn('Could not update enrollment quiz score in Firestore:', err);
        }
      }

      // Persist activity to Firestore
      try {
        await setDoc(
          doc(db, 'users', auth.currentUser.uid, 'activities', activityId),
          activity
        );
      } catch (err) {
        handleFirestoreError(
          err,
          OperationType.CREATE,
          `users/${auth.currentUser.uid}/activities/${activityId}`
        );
      }
    }

    return {
      score: correctCount,
      totalQuestions,
      scorePercent,
      passed,
    };
  };

  // Compute dynamic user statistics
  const totalLessonsCompleted = enrollments.reduce(
    (sum, e) => sum + e.completedLessonIds.length,
    0
  );

  const completedCoursesCount = enrollments.filter((e) => e.isCompleted).length;

  const totalQuizScoreSum = quizAttempts.reduce(
    (sum, a) => sum + a.scorePercent,
    0
  );
  const averageQuizScore =
    quizAttempts.length > 0
      ? Math.round(totalQuizScoreSum / quizAttempts.length)
      : 0;

  const stats: LearningStats = {
    coursesEnrolled: enrollments.length,
    coursesCompleted: completedCoursesCount,
    lessonsCompleted: totalLessonsCompleted,
    quizAttempts: quizAttempts.length,
    averageQuizScore,
  };

  return (
    <LearningContext.Provider
      value={{
        user,
        firebaseUser,
        isAuthenticated: !!user,
        isLoading,
        enrollments,
        quizAttempts,
        activities,
        stats,
        login,
        signup,
        resetPassword,
        logout,
        updateProfile,
        enrollCourse,
        isEnrolled,
        getEnrollment,
        completeLesson,
        submitQuiz,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
