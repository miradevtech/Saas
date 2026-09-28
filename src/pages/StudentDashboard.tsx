import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  Flame,
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  Play,
  RotateCcw,
  Sparkles,
  TrendingUp,
  Award,
  ShieldCheck,
  AlertCircle,
  LogOut,
  Settings,
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { COURSES } from '../data/courses';
import { CourseThumbnail } from '../components/CourseThumbnail';
import { CourseCard } from '../components/CourseCard';

interface StudentDashboardProps {
  onStartLesson: (courseId: string, lessonId?: string) => void;
  onStartQuiz: (courseId: string) => void;
  onExploreCourses: () => void;
  onSelectCourse: (courseId: string) => void;
  onNavigateProfile?: () => void;
  onNavigateSettings?: () => void;
  onLogout?: () => void;
}

type DashboardTab = 'overview' | 'courses' | 'quizzes' | 'activity' | 'explore';

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  onStartLesson,
  onStartQuiz,
  onExploreCourses,
  onSelectCourse,
  onNavigateProfile,
  onNavigateSettings,
  onLogout,
}) => {
  const { user, enrollments, quizAttempts, activities, stats, enrollCourse, logout } = useLearning();
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [courseFilterTab, setCourseFilterTab] = useState<'all' | 'in-progress' | 'completed'>('in-progress');
  const [quizFilter, setQuizFilter] = useState<'all' | 'passed' | 'pending'>('all');

  // Enrolled courses details
  const enrolledCourseData = enrollments
    .map((enr) => {
      const course = COURSES.find((c) => c.id === enr.courseId);
      const currentLesson =
        course?.lessons.find((l) => l.id === enr.currentLessonId) || course?.lessons[0];
      return {
        enrollment: enr,
        course,
        currentLesson,
      };
    })
    .filter((item) => item.course !== undefined);

  // Active courses (started, not completed)
  const activeCourses = enrolledCourseData.filter((item) => !item.enrollment.isCompleted);
  const completedCourses = enrolledCourseData.filter((item) => item.enrollment.isCompleted);

  // Filtered courses for courses tab
  const displayedCourses =
    courseFilterTab === 'completed'
      ? completedCourses
      : courseFilterTab === 'in-progress'
      ? activeCourses
      : enrolledCourseData;

  // Unenrolled courses for "Explore More"
  const unenrolledCourses = COURSES.filter(
    (c) => !enrollments.some((e) => e.courseId === c.id)
  );

  // Build Quiz Data across all courses
  const allQuizzesData = COURSES.map((course) => {
    const enr = enrollments.find((e) => e.courseId === course.id);
    const attempts = quizAttempts.filter((qa) => qa.courseId === course.id);
    const bestAttempt = attempts.reduce<typeof attempts[0] | null>((best, curr) => {
      if (!best) return curr;
      return curr.scorePercent > best.scorePercent ? curr : best;
    }, null);

    const hasPassed = bestAttempt ? bestAttempt.passed : false;
    const isEnrolled = !!enr;

    return {
      course,
      quiz: course.quiz,
      isEnrolled,
      attemptsCount: attempts.length,
      bestAttempt,
      hasPassed,
      savedScore: enr?.quizScore ?? bestAttempt?.scorePercent,
    };
  });

  const passedQuizzesCount = allQuizzesData.filter((q) => q.hasPassed).length;

  const filteredQuizzes = allQuizzesData.filter((item) => {
    if (quizFilter === 'passed') return item.hasPassed;
    if (quizFilter === 'pending') return !item.hasPassed;
    return true;
  });

  const handleEnrollAndQuiz = async (courseId: string) => {
    await enrollCourse(courseId);
    onStartQuiz(courseId);
  };

  return (
    <div className="min-h-screen bg-zinc-950 pb-44 sm:pb-36 flex flex-col">
      {/* Student Portal Clean Top Navigation Header (No Landing Page Menu) */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-purple-500 to-teal-400 p-[1px] shadow-md shadow-purple-500/20">
              <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 15l4-4-4-4" />
                  <path d="M10 15l4-4-4-4" />
                  <path d="M16 15l4-4-4-4" />
                </svg>
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-tight">
                Learn Path <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Flow</span>
              </span>
              <span className="block text-[9px] font-mono text-zinc-400 uppercase tracking-wider -mt-0.5">
                Student Learning Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {onNavigateProfile && (
              <button
                onClick={onNavigateProfile}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-200 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-500 to-teal-400 flex items-center justify-center text-[10px] font-bold text-zinc-950">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <span className="font-medium max-w-[100px] sm:max-w-[140px] truncate">{user?.name || 'Student'}</span>
              </button>
            )}

            {onNavigateSettings && (
              <button
                onClick={onNavigateSettings}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-colors"
                title="Settings"
                aria-label="Settings"
              >
                <Settings className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => {
                logout();
                if (onLogout) onLogout();
              }}
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800 border border-transparent hover:border-zinc-700 transition-colors"
              title="Sign Out"
              aria-label="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 flex-1 w-full">
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono text-teal-400 tracking-wider uppercase">
                Student Learning Portal
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Welcome back, {user?.name || 'Student'}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Pick up right where you left off and build consistent daily momentum.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {enrollments.length > 0 ? (
              <button
                onClick={() => setActiveTab('courses')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-200 hover:text-white transition-colors"
              >
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>My Courses ({enrollments.length})</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveTab('explore')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs transition-colors shadow-sm"
              >
                <Compass className="w-4 h-4" />
                <span>Browse All 10 Courses</span>
              </button>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: OVERVIEW */}
        {/* ============================================================== */}
        {activeTab === 'overview' && (
          <div className="space-y-10 animate-in fade-in duration-200">
            {/* Learning Statistics Cards */}
            <div>
              <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                Learning Statistics
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {/* Courses Enrolled */}
                <div
                  onClick={() => setActiveTab('courses')}
                  className="p-4 sm:p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-purple-500/40 transition-all cursor-pointer space-y-1 group"
                >
                  <span className="text-xs text-zinc-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                      <span>Enrolled</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 group-hover:text-teal-400">View</span>
                  </span>
                  <div className="text-2xl font-bold font-mono text-white pt-1">
                    {stats.coursesEnrolled}
                  </div>
                  <p className="text-[11px] text-zinc-400">Total active & completed</p>
                </div>

                {/* Courses Completed */}
                <div
                  onClick={() => {
                    setActiveTab('courses');
                    setCourseFilterTab('completed');
                  }}
                  className="p-4 sm:p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-teal-500/40 transition-all cursor-pointer space-y-1 group"
                >
                  <span className="text-xs text-zinc-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
                      <span>Completed</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 group-hover:text-teal-400">View</span>
                  </span>
                  <div className="text-2xl font-bold font-mono text-white pt-1">
                    {stats.coursesCompleted}
                  </div>
                  <p className="text-[11px] text-zinc-400">Finished curriculum</p>
                </div>

                {/* Lessons Completed */}
                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 space-y-1">
                  <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>Lessons Done</span>
                  </span>
                  <div className="text-2xl font-bold font-mono text-white pt-1">
                    {stats.lessonsCompleted}
                  </div>
                  <p className="text-[11px] text-zinc-400">Across all topics</p>
                </div>

                {/* Quiz Attempts */}
                <div
                  onClick={() => setActiveTab('quizzes')}
                  className="p-4 sm:p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-amber-500/40 transition-all cursor-pointer space-y-1 group"
                >
                  <span className="text-xs text-zinc-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                      <span>Quiz Attempts</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 group-hover:text-teal-400">View</span>
                  </span>
                  <div className="text-2xl font-bold font-mono text-white pt-1">
                    {stats.quizAttempts}
                  </div>
                  <p className="text-[11px] text-zinc-400">Tests completed</p>
                </div>

                {/* Average Quiz Score */}
                <div
                  onClick={() => setActiveTab('quizzes')}
                  className="p-4 sm:p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-teal-500/40 transition-all cursor-pointer space-y-1 col-span-2 sm:col-span-1 group"
                >
                  <span className="text-xs text-zinc-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
                      <span>Avg Score</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 group-hover:text-teal-400">Quizzes</span>
                  </span>
                  <div className="text-2xl font-bold font-mono text-white pt-1">
                    {stats.averageQuizScore > 0 ? `${stats.averageQuizScore}%` : '—'}
                  </div>
                  <p className="text-[11px] text-zinc-400">Retention score</p>
                </div>
              </div>
            </div>

            {/* CONTINUE LEARNING SECTION */}
            {activeCourses.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <Play className="w-4 h-4 text-teal-400" />
                    <span>Continue Learning</span>
                  </h2>
                  <button
                    onClick={() => setActiveTab('courses')}
                    className="text-xs text-teal-400 hover:text-teal-300 font-medium"
                  >
                    View all ({activeCourses.length} in progress)
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeCourses.slice(0, 2).map(({ enrollment, course, currentLesson }) => {
                    if (!course) return null;
                    return (
                      <div
                        key={enrollment.id}
                        className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 space-y-4 hover:border-zinc-700 transition-all shadow-lg flex flex-col justify-between"
                      >
                        <div className="flex gap-4">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-zinc-800">
                            <CourseThumbnail courseId={course.id} className="w-full h-full" />
                          </div>
                          <div className="min-w-0 space-y-1 flex-1">
                            <div className="text-[11px] text-teal-400 font-semibold">
                              {course.category}
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight truncate">
                              {course.title}
                            </h3>
                            <p className="text-xs text-zinc-400 truncate">
                              Current: {currentLesson?.title || 'Lesson 1'}
                            </p>
                            <div className="text-[11px] text-zinc-400 font-mono pt-1">
                              {enrollment.completedLessonIds.length} of {course.lessonsCount} lessons completed
                            </div>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-1.5 pt-2">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-zinc-400">Progress</span>
                            <span className="text-teal-400 font-semibold">{enrollment.progressPercent}%</span>
                          </div>
                          <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-teal-400 rounded-full transition-all duration-300"
                              style={{ width: `${enrollment.progressPercent}%` }}
                            />
                          </div>
                        </div>

                        {/* Action button: Clean full-width continue lesson */}
                        <div className="pt-2">
                          <button
                            onClick={() => onStartLesson(course.id, currentLesson?.id)}
                            className="w-full py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs transition-all shadow-md shadow-teal-500/20 flex items-center justify-center gap-2 group"
                          >
                            <span>Continue Lesson</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Clean unused state for every new user */
              <div className="p-8 sm:p-10 rounded-2xl border border-zinc-800 bg-zinc-950/80 text-center space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-teal-400/10 border border-teal-400/30 flex items-center justify-center text-teal-400 mx-auto">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 max-w-md mx-auto">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Start Your Learning Journey
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    You have not enrolled in any courses yet. Browse our 10 practical courses to begin your first lesson at your own speed.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('explore')}
                    className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs transition-all shadow-md shadow-teal-500/20 inline-flex items-center gap-2 group"
                  >
                    <span>Browse All 10 Courses</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* QUIZ QUICK LAUNCH SPOTLIGHT */}
            <div className="rounded-2xl border border-purple-900/40 bg-gradient-to-r from-purple-950/40 via-zinc-950 to-zinc-900 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 text-teal-400" />
                  <span>Knowledge Check Hub</span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Ready to test what you've learned?
                </h3>
                <p className="text-xs text-zinc-400">
                  Every course includes a structured multiple-choice quiz. Earn a score of 80% or higher to validate your retention and earn course milestone badges.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab('quizzes')}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-500 hover:to-teal-400 text-white font-bold text-xs transition-all shadow-lg shadow-purple-500/20 flex items-center gap-2"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Open Quiz Hub ({COURSES.length} Available)</span>
                </button>
              </div>
            </div>

            {/* RECENT ACTIVITY & EXPLORE SPLIT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Recent Activity Timeline */}
              <div className="lg:col-span-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span>Recent Activity</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab('activity')}
                    className="text-[11px] text-teal-400 hover:underline font-mono"
                  >
                    View All Stream
                  </button>
                </div>

                <div className="space-y-4">
                  {activities.length > 0 ? (
                    activities.slice(0, 5).map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3 text-xs">
                        <div className="w-2 h-2 rounded-full bg-teal-400 shrink-0 mt-1.5 shadow-sm shadow-teal-400/50" />
                        <div className="min-w-0 flex-1">
                          <p className="text-zinc-200 font-medium leading-snug">
                            {activity.detail}
                          </p>
                          <div className="flex items-center gap-2 text-[11px] text-zinc-400 mt-0.5 font-mono">
                            <span>{activity.courseTitle}</span>
                            <span>·</span>
                            <span>
                              {new Date(activity.timestamp).toLocaleDateString(undefined, {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-zinc-400">No activity logged yet.</p>
                  )}
                </div>
              </div>

              {/* Recommended Courses to Explore */}
              <div className="lg:col-span-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      Explore More Curriculum
                    </h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      New practical skill modules ready for enrollment.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('explore')}
                    className="text-xs text-teal-400 hover:text-teal-300 flex items-center gap-1 font-medium"
                  >
                    <span>View all</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {unenrolledCourses.slice(0, 3).map((course) => (
                    <div
                      key={course.id}
                      onClick={() => onSelectCourse(course.id)}
                      className="p-3 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 transition-all flex items-center justify-between gap-4 cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-zinc-800">
                          <CourseThumbnail courseId={course.id} className="w-full h-full" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] text-teal-400 font-mono font-medium">
                            {course.category} · {course.duration}
                          </div>
                          <h4 className="text-xs font-semibold text-white group-hover:text-teal-300 transition-colors truncate">
                            {course.title}
                          </h4>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-200 group-hover:bg-teal-400 group-hover:text-zinc-950 font-bold text-xs transition-colors shrink-0 flex items-center gap-1"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: MY COURSES */}
        {/* ============================================================== */}
        {activeTab === 'courses' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-3">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <span>My Enrolled Courses ({enrolledCourseData.length})</span>
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Track your progress, resume individual lessons, and take syllabus tests.
                </p>
              </div>

              {/* Interactive filter tab buttons */}
              <div className="flex items-center gap-1 p-1 bg-zinc-900 rounded-xl border border-zinc-800 self-start sm:self-auto">
                <button
                  onClick={() => setCourseFilterTab('in-progress')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    courseFilterTab === 'in-progress'
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  In Progress ({activeCourses.length})
                </button>
                <button
                  onClick={() => setCourseFilterTab('completed')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    courseFilterTab === 'completed'
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Completed ({completedCourses.length})
                </button>
                <button
                  onClick={() => setCourseFilterTab('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    courseFilterTab === 'all'
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  All ({enrolledCourseData.length})
                </button>
              </div>
            </div>

            {displayedCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedCourses.map(({ course, enrollment }) => {
                  if (!course) return null;
                  return (
                    <div
                      key={course.id}
                      className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-all shadow-md group"
                    >
                      <div className="p-5 space-y-4">
                        <div className="flex gap-4 items-start">
                          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-zinc-800">
                            <CourseThumbnail courseId={course.id} className="w-full h-full" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-[10px] font-mono font-semibold text-teal-400 uppercase">
                              {course.category}
                            </div>
                            <h3 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors line-clamp-1">
                              {course.title}
                            </h3>
                            <div className="text-[11px] text-zinc-400 pt-1 font-mono">
                              {enrollment.completedLessonIds.length} / {course.lessonsCount} lessons
                            </div>
                          </div>
                        </div>

                        {/* Progress Meter */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[11px] font-mono">
                            <span className="text-zinc-400">Progress</span>
                            <span className="text-teal-400 font-bold">{enrollment.progressPercent}%</span>
                          </div>
                          <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-teal-400 rounded-full transition-all"
                              style={{ width: `${enrollment.progressPercent}%` }}
                            />
                          </div>
                        </div>

                        {enrollment.quizScore !== undefined && (
                          <div className="flex items-center gap-1.5 text-xs text-teal-300 bg-teal-400/10 px-2.5 py-1 rounded-lg border border-teal-400/20">
                            <FileCheck className="w-3.5 h-3.5 text-teal-400" />
                            <span>Quiz Best Score: <strong>{enrollment.quizScore}%</strong></span>
                          </div>
                        )}
                      </div>

                      {/* Actions: Clean full-width continue lesson */}
                      <div className="p-4 bg-zinc-900/60 border-t border-zinc-800/80">
                        <button
                          onClick={() => onStartLesson(course.id, enrollment.currentLessonId)}
                          className="w-full py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <span>{enrollment.isCompleted ? 'Review Lessons' : 'Continue Lesson'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 p-6 space-y-3">
                <BookOpen className="w-10 h-10 text-zinc-600 mx-auto" />
                <h3 className="text-sm font-semibold text-white">No courses in this view</h3>
                <p className="text-xs text-zinc-400">
                  {courseFilterTab === 'completed'
                    ? 'Complete all lessons in a course to see it here.'
                    : 'Enroll in courses from our practical curriculum.'}
                </p>
                <button
                  onClick={() => setActiveTab('explore')}
                  className="px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs transition-colors inline-block"
                >
                  Explore Course Catalog
                </button>
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: QUIZZES (QUIZ HUB) */}
        {/* ============================================================== */}
        {activeTab === 'quizzes' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Header & Stats Banner */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-teal-400 tracking-wider uppercase">
                      Assessment & Retention
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-teal-400/10 text-teal-300 border border-teal-400/20">
                      Self-Paced
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <FileCheck className="w-6 h-6 text-teal-400" />
                    <span>Course Quiz Hub</span>
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Test your understanding across all course subjects. Quizzes can be taken anytime or retaken to achieve a perfect 100% score.
                  </p>
                </div>

                {/* Filter Selector */}
                <div className="flex items-center gap-1 p-1 bg-zinc-900 rounded-xl border border-zinc-800 self-start sm:self-auto">
                  <button
                    onClick={() => setQuizFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      quizFilter === 'all'
                        ? 'bg-zinc-800 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    All ({COURSES.length})
                  </button>
                  <button
                    onClick={() => setQuizFilter('passed')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      quizFilter === 'passed'
                        ? 'bg-zinc-800 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Passed ({passedQuizzesCount})
                  </button>
                  <button
                    onClick={() => setQuizFilter('pending')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      quizFilter === 'pending'
                        ? 'bg-zinc-800 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Pending ({COURSES.length - passedQuizzesCount})
                  </button>
                </div>
              </div>

              {/* Quiz Summary Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-zinc-800/80">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>Quizzes Passed</span>
                  </span>
                  <div className="text-2xl font-bold font-mono text-white pt-1">
                    {passedQuizzesCount} / {COURSES.length}
                  </div>
                  <div className="text-[10px] text-zinc-500 pt-0.5">
                    {Math.round((passedQuizzesCount / COURSES.length) * 100)}% passing rate
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                    <span>Average Score</span>
                  </span>
                  <div className="text-2xl font-bold font-mono text-white pt-1">
                    {stats.averageQuizScore > 0 ? `${stats.averageQuizScore}%` : '—'}
                  </div>
                  <div className="text-[10px] text-zinc-500 pt-0.5">Target: 80%+</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Total Attempts</span>
                  </span>
                  <div className="text-2xl font-bold font-mono text-white pt-1">
                    {quizAttempts.length}
                  </div>
                  <div className="text-[10px] text-zinc-500 pt-0.5">Recorded attempts</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Passing Rule</span>
                  </span>
                  <div className="text-2xl font-bold font-mono text-white pt-1">
                    80%
                  </div>
                  <div className="text-[10px] text-zinc-500 pt-0.5">Multiple-choice questions</div>
                </div>
              </div>
            </div>

            {/* Quizzes List Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuizzes.map(({ course, quiz, isEnrolled, attemptsCount, bestAttempt, hasPassed, savedScore }) => {
                return (
                  <div
                    key={course.id}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between space-y-5 hover:border-zinc-700 transition-all shadow-md relative overflow-hidden"
                  >
                    {/* Status Top Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-teal-400 uppercase">
                        {course.category}
                      </span>
                      {hasPassed ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-400/10 text-teal-300 border border-teal-400/30">
                          <CheckCircle2 className="w-3 h-3 text-teal-400" />
                          <span>Passed ({savedScore}%)</span>
                        </span>
                      ) : savedScore !== undefined ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                          <AlertCircle className="w-3 h-3 text-amber-400" />
                          <span>Score: {savedScore}% (Retake)</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-900 text-zinc-400 border border-zinc-800">
                          Not Taken
                        </span>
                      )}
                    </div>

                    {/* Quiz Details */}
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                        {quiz.title}
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-2">
                        {quiz.description}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-mono pt-1">
                        <span>{quiz.questions.length} Questions</span>
                        <span>·</span>
                        <span>Pass: {quiz.passingScorePercent}%</span>
                        {attemptsCount > 0 && (
                          <>
                            <span>·</span>
                            <span>{attemptsCount} {attemptsCount === 1 ? 'attempt' : 'attempts'}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                      <button
                        onClick={() => onSelectCourse(course.id)}
                        className="text-xs text-zinc-400 hover:text-white transition-colors"
                      >
                        Syllabus
                      </button>

                      {isEnrolled ? (
                        <button
                          onClick={() => onStartQuiz(course.id)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
                            hasPassed
                              ? 'bg-zinc-800 hover:bg-zinc-700 text-teal-400 border border-zinc-700'
                              : 'bg-teal-400 hover:bg-teal-300 text-zinc-950'
                          }`}
                        >
                          {hasPassed ? (
                            <>
                              <RotateCcw className="w-3.5 h-3.5" />
                              <span>Retake Quiz</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5" />
                              <span>Take Quiz</span>
                            </>
                          )}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEnrollAndQuiz(course.id)}
                          className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-purple-500/20"
                        >
                          <span>Enroll & Take Quiz</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: ACTIVITY STREAM */}
        {/* ============================================================== */}
        {activeTab === 'activity' && (
          <div className="space-y-6 animate-in fade-in duration-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <Clock className="w-5 h-5 text-teal-400" />
                  <span>Learning Activity Stream</span>
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Permanent chronological record of course enrollments, lesson completions, and quiz submissions.
                </p>
              </div>
              <span className="text-xs font-mono text-teal-400 bg-purple-950/40 border border-purple-800/40 px-3 py-1 rounded-full">
                {activities.length} Events Logged
              </span>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-6">
              {activities.length > 0 ? (
                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-800">
                  {activities.map((activity) => (
                    <div key={activity.id} className="relative flex items-start gap-4">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[1.85rem] top-1 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-teal-400 shadow-sm shadow-teal-400/40" />

                      <div className="min-w-0 flex-1 p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono uppercase text-teal-400 font-semibold">
                            {activity.type.replace('_', ' ')}
                          </span>
                          <span className="text-[11px] font-mono text-zinc-400">
                            {new Date(activity.timestamp).toLocaleString(undefined, {
                              dateStyle: 'medium',
                              timeStyle: 'short',
                            })}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white">
                          {activity.detail}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
                          <BookOpen className="w-3 h-3 text-purple-400" />
                          <span>{activity.courseTitle}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-zinc-400 text-xs">
                  No activity events recorded yet. Complete a lesson or quiz to see your timeline.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 5: EXPLORE ALL */}
        {/* ============================================================== */}
        {activeTab === 'explore' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <Compass className="w-5 h-5 text-teal-400" />
                  <span>Curriculum Catalog (10 Courses)</span>
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Browse and enroll in high-impact skill-building courses.
                </p>
              </div>
              <button
                onClick={onExploreCourses}
                className="text-xs text-teal-400 hover:underline font-medium self-start sm:self-auto"
              >
                Open Full Catalog View →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COURSES.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelect={onSelectCourse}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* DOWN NAVIGATION BAR (ALWAYS DOCKED AT BOTTOM OF DASHBOARD) */}
      {/* ============================================================== */}
      <nav
        aria-label="Student Dashboard Down Navigation"
        className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/90 shadow-2xl py-2 px-3 sm:px-6 ring-1 ring-white/5"
      >
        <div className="max-w-xl mx-auto flex items-center justify-around sm:justify-between">
          {/* 1. Overview */}
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all relative ${
              activeTab === 'overview'
                ? 'bg-zinc-800 text-teal-400 shadow-inner'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-[10px] font-semibold tracking-tight mt-0.5">Overview</span>
            {activeTab === 'overview' && (
              <span className="absolute -bottom-1 w-4 h-1 bg-teal-400 rounded-full" />
            )}
          </button>

          {/* 2. Courses */}
          <button
            onClick={() => setActiveTab('courses')}
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all relative ${
              activeTab === 'courses'
                ? 'bg-zinc-800 text-teal-400 shadow-inner'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
            }`}
          >
            <div className="relative">
              <BookOpen className="w-5 h-5" />
              {activeCourses.length > 0 && (
                <span className="absolute -top-1 -right-2 px-1 rounded-full bg-purple-500 text-white font-mono text-[9px] font-bold">
                  {activeCourses.length}
                </span>
              )}
            </div>
            <span className="text-[10px] font-semibold tracking-tight mt-0.5">Courses</span>
            {activeTab === 'courses' && (
              <span className="absolute -bottom-1 w-4 h-1 bg-teal-400 rounded-full" />
            )}
          </button>

          {/* 3. Quizzes (Highlight / Center Piece) */}
          <button
            onClick={() => setActiveTab('quizzes')}
            className={`flex flex-col items-center justify-center py-1.5 px-3.5 rounded-xl transition-all relative ${
              activeTab === 'quizzes'
                ? 'bg-gradient-to-b from-purple-900/60 to-teal-500/20 border border-teal-400/40 text-teal-300 shadow-md shadow-teal-500/10'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
            }`}
          >
            <div className="relative">
              <FileCheck className={`w-5 h-5 ${activeTab === 'quizzes' ? 'text-teal-400 animate-pulse' : ''}`} />
              <span className="absolute -top-1 -right-2.5 px-1 rounded-full bg-teal-400 text-zinc-950 font-mono text-[9px] font-extrabold">
                {COURSES.length}
              </span>
            </div>
            <span className="text-[10px] font-bold tracking-tight mt-0.5">Quiz Hub</span>
            {activeTab === 'quizzes' && (
              <span className="absolute -bottom-1 w-4 h-1 bg-teal-400 rounded-full" />
            )}
          </button>

          {/* 4. Activity Stream */}
          <button
            onClick={() => setActiveTab('activity')}
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all relative ${
              activeTab === 'activity'
                ? 'bg-zinc-800 text-teal-400 shadow-inner'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
            }`}
          >
            <Clock className="w-5 h-5" />
            <span className="text-[10px] font-semibold tracking-tight mt-0.5">Activity</span>
            {activeTab === 'activity' && (
              <span className="absolute -bottom-1 w-4 h-1 bg-teal-400 rounded-full" />
            )}
          </button>

          {/* 5. Explore Catalog */}
          <button
            onClick={() => setActiveTab('explore')}
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all relative ${
              activeTab === 'explore'
                ? 'bg-zinc-800 text-teal-400 shadow-inner'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
            }`}
          >
            <Compass className="w-5 h-5" />
            <span className="text-[10px] font-semibold tracking-tight mt-0.5">Explore</span>
            {activeTab === 'explore' && (
              <span className="absolute -bottom-1 w-4 h-1 bg-teal-400 rounded-full" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};
