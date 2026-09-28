export type CourseCategory =
  | 'Business'
  | 'Finance'
  | 'Design'
  | 'Technology'
  | 'Marketing'
  | 'Productivity';

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface CourseObjectiveDetail {
  title: string;
  explanation: string;
  skillsAcquired: string[];
  realWorldImpact: string;
}

export interface DetailedLessonSection {
  heading: string;
  body: string;
  keyPoints?: string[];
  frameworkOrCode?: string;
  caseStudy?: { title: string; scenario: string; keyLearning: string };
  pitfallsToAvoid?: string[];
}

export interface Lesson {
  id: string;
  courseId: string;
  order: number;
  title: string;
  durationMinutes: number;
  summary: string;
  content: {
    introduction: string;
    inDepthOverview?: string;
    keyConcepts: {
      title: string;
      explanation: string;
      inDepthAnalysis?: string;
      practicalApplication?: string;
    }[];
    readingSections?: DetailedLessonSection[];
    practicalSteps?: string[];
    proTip?: string;
    pitfallsToAvoid?: string[];
    takeaway: string;
    reflectionQuestions?: string[];
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false';
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface CourseQuiz {
  id: string;
  courseId: string;
  title: string;
  description: string;
  passingScorePercent: number;
  questions: QuizQuestion[];
}

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: CourseCategory;
  level: CourseLevel;
  duration: string;
  lessonsCount: number;
  objectives: string[];
  detailedObjectives?: CourseObjectiveDetail[];
  prerequisites?: string[];
  targetAudience?: string;
  lessons: Lesson[];
  quiz: CourseQuiz;
  visualTheme: {
    accentColor: string;
    glowColor: string;
    gradientFrom: string;
    gradientTo: string;
    tagline: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  title?: string;
  createdAt: string;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: string;
  lastAccessedAt: string;
  completedLessonIds: string[];
  currentLessonId: string;
  progressPercent: number;
  isCompleted: boolean;
  completedAt?: string;
  quizScore?: number;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  courseId: string;
  quizId: string;
  score: number;
  totalQuestions: number;
  scorePercent: number;
  passed: boolean;
  attemptedAt: string;
}

export interface LearningActivity {
  id: string;
  userId: string;
  type: 'enrolled' | 'completed_lesson' | 'completed_quiz' | 'completed_course';
  courseId: string;
  courseTitle: string;
  detail: string;
  timestamp: string;
}

export interface LearningStats {
  coursesEnrolled: number;
  coursesCompleted: number;
  lessonsCompleted: number;
  quizAttempts: number;
  averageQuizScore: number;
}
