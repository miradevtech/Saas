import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  HelpCircle,
  Play,
  ShieldCheck,
  Award,
  ChevronDown,
  ChevronUp,
  Target,
  Sparkles,
  Layers,
  FileText,
} from 'lucide-react';
import { COURSES } from '../data/courses';
import { CourseThumbnail } from '../components/CourseThumbnail';
import { useLearning } from '../context/LearningContext';
import { COURSE_DETAILED_OBJECTIVES } from '../data/courseContentExpansions';

interface CourseDetailsPageProps {
  courseId: string;
  onBack: () => void;
  onOpenAuth: (mode?: 'signin' | 'signup') => void;
  onStartLesson: (courseId: string, lessonId?: string) => void;
  onStartQuiz: (courseId: string) => void;
}

export const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({
  courseId,
  onBack,
  onOpenAuth,
  onStartLesson,
  onStartQuiz,
}) => {
  const { user, isAuthenticated, enrollCourse, isEnrolled, getEnrollment } = useLearning();

  const course = COURSES.find((c) => c.id === courseId);
  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Course Not Found</h2>
        <button
          onClick={onBack}
          className="text-xs text-teal-400 hover:underline"
        >
          Return to Courses
        </button>
      </div>
    );
  }

  const enrolled = isEnrolled(course.id);
  const enrollment = getEnrollment(course.id);
  const isCompleted = enrollment?.isCompleted || false;

  const handleEnrollOrContinue = () => {
    if (!isAuthenticated) {
      onOpenAuth('signup');
      return;
    }

    if (!enrolled) {
      enrollCourse(course.id);
      onStartLesson(course.id, course.lessons[0]?.id);
    } else {
      const targetLessonId = enrollment?.currentLessonId || course.lessons[0]?.id;
      onStartLesson(course.id, targetLessonId);
    }
  };

  const getCtaLabel = () => {
    if (!isAuthenticated) return 'Start Learning';
    if (!enrolled) return 'Enroll in Course';
    if (isCompleted) return 'Review Course';
    return 'Continue Learning';
  };

  const detailedObjectives = COURSE_DETAILED_OBJECTIVES[course.id];
  const [expandedLessonIds, setExpandedLessonIds] = useState<Record<string, boolean>>({});

  const toggleLessonExpanded = (lessonId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedLessonIds((prev) => ({ ...prev, [lessonId]: !prev[lessonId] }));
  };

  const toggleAllLessons = () => {
    const allExpanded = course.lessons.every((l) => expandedLessonIds[l.id]);
    const next: Record<string, boolean> = {};
    course.lessons.forEach((l) => {
      next[l.id] = !allExpanded;
    });
    setExpandedLessonIds(next);
  };

  const areAllLessonsExpanded = course.lessons.every((l) => expandedLessonIds[l.id]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to all courses</span>
      </button>

      {/* Hero Header Card */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Thumbnail */}
          <div className="lg:col-span-5 aspect-[16/10] sm:aspect-auto sm:h-64 rounded-xl overflow-hidden border border-zinc-800 shadow-lg">
            <CourseThumbnail courseId={course.id} className="w-full h-full" />
          </div>

          {/* Details & CTA */}
          <div className="lg:col-span-7 space-y-4">
            {/* Clean unboxed metadata with typographic separators */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium flex-wrap">
              <span className="text-teal-400 font-semibold">{course.category}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>{course.level}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
                {course.lessonsCount} lessons
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                {course.duration}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {course.title}
            </h1>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {course.fullDescription}
            </p>

            {/* Dynamic Progress indicator if user enrolled */}
            {enrolled && enrollment && (
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800/80 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-400">
                    Your Course Progress ({enrollment.completedLessonIds.length}/{course.lessonsCount} lessons)
                  </span>
                  <span className="font-mono text-teal-400 font-semibold">{enrollment.progressPercent}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-teal-400 rounded-full transition-all duration-300"
                    style={{ width: `${enrollment.progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleEnrollOrContinue}
                className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 group"
              >
                <span>{getCtaLabel()}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {enrolled && (
                <button
                  onClick={() => onStartQuiz(course.id)}
                  className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white font-medium text-xs transition-all flex items-center justify-center gap-2"
                >
                  <HelpCircle className="w-4 h-4 text-teal-400" />
                  <span>
                    {enrollment?.quizScore !== undefined
                      ? `Retake Quiz (${enrollment.quizScore}%)`
                      : 'Take Course Quiz'}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Course Objectives with Full Details & Explanations */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-teal-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Course Objectives & Comprehensive Learning Outcomes
            </h2>
          </div>
          <p className="text-xs text-zinc-400">
            Full pedagogical breakdown of core competencies, conceptual mastery, and actionable skills delivered across this course.
          </p>
        </div>

        {detailedObjectives && detailedObjectives.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {detailedObjectives.map((obj, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between space-y-3.5 hover:border-zinc-700 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-teal-400/10 border border-teal-400/30 text-teal-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-white tracking-tight leading-snug">
                      {obj.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed pl-8">
                    {obj.explanation}
                  </p>
                </div>

                <div className="pl-8 pt-2 border-t border-zinc-800/80 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {obj.skillsAcquired.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-zinc-800/90 text-[10px] font-mono text-zinc-300 border border-zinc-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="text-[11px] text-zinc-400 flex items-start gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span className="leading-snug"><strong className="text-zinc-200">Impact:</strong> {obj.realWorldImpact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.objectives.map((objective, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-300 leading-relaxed font-normal">
                  {objective}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Complete Course Curriculum & Expandable Lesson Syllabus */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-bold text-white tracking-tight">
                Curriculum & Complete Lesson Syllabus
              </h2>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              10 structured masterclass lessons · {course.duration} comprehensive reading & practice
            </p>
          </div>

          <div className="flex items-center gap-3">
            {enrolled && (
              <span className="text-xs font-mono text-teal-400 font-semibold px-2.5 py-1 rounded-lg bg-teal-400/10 border border-teal-400/20">
                {enrollment?.completedLessonIds.length || 0} of 10 Completed
              </span>
            )}
            <button
              onClick={toggleAllLessons}
              className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center gap-1.5"
            >
              {areAllLessonsExpanded ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Collapse All</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  <span>Expand All Details</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {course.lessons.map((lesson) => {
            const isLessonCompleted =
              enrollment?.completedLessonIds.includes(lesson.id) || false;
            const isCurrent =
              enrollment?.currentLessonId === lesson.id && !isLessonCompleted;
            const isExpanded = !!expandedLessonIds[lesson.id];

            return (
              <div
                key={lesson.id}
                className={`rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-purple-950/20 border-purple-500/50'
                    : isLessonCompleted
                    ? 'bg-zinc-900/40 border-zinc-800/80'
                    : 'bg-zinc-900/20 border-zinc-800/60'
                }`}
              >
                {/* Lesson Header Row */}
                <div
                  onClick={() => {
                    if (enrolled) {
                      onStartLesson(course.id, lesson.id);
                    } else {
                      handleEnrollOrContinue();
                    }
                  }}
                  className="p-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/40 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono shrink-0 ${
                        isLessonCompleted
                          ? 'bg-teal-400/20 text-teal-400'
                          : isCurrent
                          ? 'bg-purple-600 text-white font-bold'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {isLessonCompleted ? <CheckCircle2 className="w-4 h-4" /> : lesson.order}
                    </div>
                    <div className="min-w-0">
                      <h3
                        className={`text-xs font-semibold truncate ${
                          isCurrent ? 'text-teal-300' : 'text-zinc-200'
                        }`}
                      >
                        Lesson {lesson.order}: {lesson.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                        {lesson.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0 text-xs">
                    <span className="text-zinc-400 font-mono hidden sm:inline text-[11px]">
                      {lesson.durationMinutes} min read
                    </span>
                    <button
                      type="button"
                      onClick={(e) => toggleLessonExpanded(lesson.id, e)}
                      className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title={isExpanded ? 'Hide details' : 'Preview lesson breakdown'}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      type="button"
                      className="p-1.5 rounded-lg text-teal-400 hover:text-teal-300 bg-teal-400/10 hover:bg-teal-400/20"
                      title="Launch lesson"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>
                </div>

                {/* Expanded Lesson Deep-Dive Preview */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-zinc-800/80 bg-zinc-950/50 rounded-b-xl space-y-4">
                    <div className="space-y-1 pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-semibold">
                        Lesson Overview & Learning Intent
                      </span>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {lesson.summary} This lesson provides an exhaustive study with foundational frameworks, step-by-step implementation playbooks, and critical pitfalls to avoid.
                      </p>
                    </div>

                    {/* Core Concepts Preview */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-semibold block">
                        Core Concepts Explored
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {lesson.content.keyConcepts.map((concept, cIdx) => (
                          <div
                            key={cIdx}
                            className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 space-y-0.5"
                          >
                            <span className="text-xs font-semibold text-zinc-200 block">
                              {concept.title}
                            </span>
                            <span className="text-[11px] text-zinc-400 leading-snug block">
                              {concept.explanation}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Practical Takeaway & Action Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-zinc-800/60">
                      <p className="text-[11px] text-zinc-400 italic">
                        "{lesson.content.takeaway}"
                      </p>
                      <button
                        onClick={() => {
                          if (enrolled) {
                            onStartLesson(course.id, lesson.id);
                          } else {
                            handleEnrollOrContinue();
                          }
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs self-start sm:self-auto shrink-0 flex items-center gap-1.5 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Read Lesson Full Page</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiz Specification Box */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-teal-400" />
              <span>{course.quiz.title}</span>
            </h3>
            <p className="text-xs text-zinc-400">
              {course.quiz.description}
            </p>
            <div className="flex items-center gap-3 text-xs text-zinc-400 pt-1">
              <span>{course.quiz.questions.length} Questions</span>
              <span>·</span>
              <span>Multiple Choice & True/False</span>
              <span>·</span>
              <span>Passing: {course.quiz.passingScorePercent}%</span>
            </div>
          </div>

          <button
            onClick={() => onStartQuiz(course.id)}
            className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors shrink-0 self-start sm:self-auto"
          >
            Open Quiz
          </button>
        </div>
      </div>
    </div>
  );
};
