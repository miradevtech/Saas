import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Menu,
  Play,
  Sparkles,
  X,
  Lightbulb,
  FileText,
  Layers,
  Type,
  ShieldAlert,
  CheckSquare,
  Bookmark,
} from 'lucide-react';
import { COURSES } from '../data/courses';
import { useLearning } from '../context/LearningContext';
import { getDetailedLessonReading } from '../data/courseContentExpansions';

interface LearningInterfaceProps {
  courseId: string;
  initialLessonId?: string;
  onExit: () => void;
  onStartQuiz: (courseId: string) => void;
}

export const LearningInterface: React.FC<LearningInterfaceProps> = ({
  courseId,
  initialLessonId,
  onExit,
  onStartQuiz,
}) => {
  const { getEnrollment, completeLesson, isEnrolled, enrollCourse } = useLearning();

  const course = COURSES.find((c) => c.id === courseId);

  // Auto enroll if not yet enrolled
  useEffect(() => {
    if (course && !isEnrolled(course.id)) {
      enrollCourse(course.id);
    }
  }, [course, isEnrolled, enrollCourse]);

  const enrollment = getEnrollment(courseId);

  const [activeLessonId, setActiveLessonId] = useState<string>(() => {
    if (initialLessonId) return initialLessonId;
    if (enrollment?.currentLessonId) return enrollment.currentLessonId;
    return course?.lessons[0]?.id || '';
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [viewMode, setViewMode] = useState<'full' | 'concepts'>('full');
  const [checkedReflections, setCheckedReflections] = useState<Record<number, boolean>>({});

  const toggleReflection = (index: number) => {
    setCheckedReflections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  if (!course) {
    return (
      <div className="p-8 text-center text-white">
        <p>Course not found.</p>
        <button onClick={onExit} className="text-teal-400 mt-2">Back</button>
      </div>
    );
  }

  const currentLessonIndex = course.lessons.findIndex((l) => l.id === activeLessonId);
  const activeLesson = course.lessons[currentLessonIndex] || course.lessons[0];

  const detailedReading = getDetailedLessonReading(course, activeLesson);

  const prevLesson = currentLessonIndex > 0 ? course.lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < course.lessons.length - 1 ? course.lessons[currentLessonIndex + 1] : null;

  const isCurrentLessonCompleted =
    enrollment?.completedLessonIds.includes(activeLesson.id) || false;

  const handleMarkComplete = () => {
    completeLesson(course.id, activeLesson.id);
    if (nextLesson) {
      setActiveLessonId(nextLesson.id);
    }
  };

  const completedCount = enrollment?.completedLessonIds.length || 0;
  const progressPercent = Math.min(100, Math.round((completedCount / course.lessonsCount) * 100));

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      {/* TOP HEADER BAR */}
      <header className="sticky top-0 z-30 h-16 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-medium"
            title="Return to Dashboard / Courses"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Exit Course</span>
          </button>

          <div className="h-5 w-px bg-zinc-800 hidden sm:block" />

          {/* Course Title */}
          <div className="min-w-0">
            <h1 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate max-w-xs sm:max-w-md">
              {course.title}
            </h1>
            <p className="text-[11px] text-zinc-400 truncate">
              Lesson {currentLessonIndex + 1} of {course.lessonsCount}: {activeLesson.title}
            </p>
          </div>
        </div>

        {/* Right Progress Meter & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-28 h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-teal-400 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono font-medium text-teal-400">
              {progressPercent}%
            </span>
          </div>

          <button
            onClick={() => onStartQuiz(course.id)}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Course Quiz</span>
          </button>

          {/* Mobile Sidebar Hamburger */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
            aria-label="Toggle lesson list"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* WORKSPACE: LEFT SIDEBAR + MAIN LESSON CONTENT */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* LEFT SIDEBAR: Syllabus Navigation */}
        <aside
          className={`fixed md:static inset-y-16 left-0 z-20 w-72 sm:w-80 bg-zinc-950 border-r border-zinc-800 flex flex-col transition-transform duration-200 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          {/* Sidebar Header */}
          <div className="p-4 border-b border-zinc-800/80 bg-zinc-900/40">
            <div className="flex items-center justify-between text-xs font-semibold text-zinc-200">
              <span>Course Outline</span>
              <span className="font-mono text-teal-400">{completedCount}/{course.lessonsCount} Completed</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-teal-400 rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Lessons List Scrollable */}
          <div className="flex-1 overflow-y-auto p-3 space-y-1.5 divide-y divide-zinc-900/40">
            {course.lessons.map((lesson, idx) => {
              const isCompleted = enrollment?.completedLessonIds.includes(lesson.id);
              const isActive = lesson.id === activeLessonId;

              return (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setActiveLessonId(lesson.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 ${
                    isActive
                      ? 'bg-purple-950/30 border border-purple-500/40 text-white'
                      : 'hover:bg-zinc-900/60 border border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg shrink-0 flex items-center justify-center text-xs font-mono mt-0.5 ${
                      isCompleted
                        ? 'bg-teal-400/20 text-teal-400 font-bold'
                        : isActive
                        ? 'bg-purple-600 text-white font-bold'
                        : 'bg-zinc-900 text-zinc-400'
                    }`}
                  >
                    {isCompleted ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-xs font-medium leading-snug truncate ${
                        isActive ? 'text-teal-300 font-semibold' : 'text-zinc-300'
                      }`}
                    >
                      {lesson.title}
                    </p>
                    <span className="text-[10px] text-zinc-400 font-mono mt-0.5 block">
                      {lesson.durationMinutes} min
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sidebar Quiz Footer Button */}
          <div className="p-3 border-t border-zinc-800/80 bg-zinc-900/30">
            <button
              onClick={() => onStartQuiz(course.id)}
              className="w-full py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center justify-center gap-2 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Final Course Quiz ({course.quiz.questions.length} Questions)</span>
            </button>
          </div>
        </aside>

        {/* Backdrop for mobile sidebar */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-10 md:hidden"
          />
        )}

        {/* MAIN CONTENT AREA: FULL READING MASTERCLASS */}
        <main className="flex-1 overflow-y-auto flex flex-col justify-between">
          <div className="max-w-4xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-12 space-y-10">
            {/* Top Reading Toolbar & Breadcrumb */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 flex-wrap">
                  <span className="text-teal-400 font-semibold uppercase">{course.category}</span>
                  <span>/</span>
                  <span>Lesson {currentLessonIndex + 1} of {course.lessonsCount}</span>
                  <span>/</span>
                  <span className="text-zinc-300 font-medium">{activeLesson.durationMinutes} min full read</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {activeLesson.title}
                </h2>
              </div>

              {/* Reader Preferences Bar */}
              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                {/* View Mode Toggle */}
                <div className="flex items-center rounded-xl bg-zinc-900 border border-zinc-800 p-1 text-xs">
                  <button
                    onClick={() => setViewMode('full')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      viewMode === 'full'
                        ? 'bg-zinc-800 text-teal-400 font-bold shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Full Masterclass
                  </button>
                  <button
                    onClick={() => setViewMode('concepts')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      viewMode === 'concepts'
                        ? 'bg-zinc-800 text-teal-400 font-bold shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Core Concepts
                  </button>
                </div>

                {/* Font Size Toggle */}
                <button
                  onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
                  className="px-2.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-mono transition-colors flex items-center gap-1"
                  title="Toggle Reading Font Size"
                >
                  <Type className="w-3.5 h-3.5" />
                  <span>{fontSize === 'normal' ? 'A+' : 'A-'}</span>
                </button>
              </div>
            </div>

            {/* Lesson Executive Abstract Callout */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 text-zinc-200 text-sm sm:text-base leading-relaxed space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold block">
                Executive Overview & Syllabus Intent
              </span>
              <p className="font-normal text-zinc-300">
                {activeLesson.summary}
              </p>
            </div>

            {/* Comprehensive Foundations & Strategic Overview */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  Foundational Context & Theoretical Overview
                </h3>
              </div>
              <div className={`space-y-4 text-zinc-300 leading-relaxed font-normal ${fontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm'}`}>
                <p>
                  {detailedReading.executiveOverview}
                </p>
                {activeLesson.content.introduction && (
                  <p className="text-zinc-300 border-l-2 border-teal-400/60 pl-4 py-1 italic bg-zinc-900/30 rounded-r-lg">
                    {activeLesson.content.introduction}
                  </p>
                )}
              </div>
            </section>

            {/* CORE CONCEPTS DEEP-DIVE: FULL READING BREAKDOWN */}
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-teal-400" />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Core Concepts Mastery (Comprehensive Analysis)
                  </h3>
                </div>
                <span className="text-xs text-zinc-400 font-mono">
                  {detailedReading.enrichedConcepts.length} Core Tenets
                </span>
              </div>

              <div className="space-y-5">
                {detailedReading.enrichedConcepts.map((concept, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700/80 transition-all space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-xl bg-purple-500/10 border border-purple-500/30 text-teal-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-white tracking-tight">
                          {concept.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-teal-300 font-medium">
                          {concept.explanation}
                        </p>
                      </div>
                    </div>

                    {/* In-Depth Theoretical Analysis */}
                    <div className="pl-0 sm:pl-10 space-y-3 pt-1">
                      <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold block">
                          Deep-Dive Mechanics & Why It Matters
                        </span>
                        <p className={`text-zinc-300 leading-relaxed font-normal ${fontSize === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
                          {concept.inDepthAnalysis}
                        </p>
                      </div>

                      {/* Real-World Application */}
                      <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/60 space-y-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-teal-400" />
                          Field Application & Implementation Standard
                        </span>
                        <p className={`text-zinc-300 leading-relaxed font-normal ${fontSize === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
                          {concept.practicalApplication}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* MASTERCLASS IN-DEPTH CHAPTERS (Full Reading Mode) */}
            {viewMode === 'full' && (
              <section className="space-y-8">
                <div className="flex items-center gap-2 border-b border-zinc-800 pb-2">
                  <FileText className="w-4 h-4 text-teal-400" />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Curriculum Masterclass Chapters & Reading Modules
                  </h3>
                </div>

                <div className="space-y-8">
                  {detailedReading.readingSections.map((section, sIdx) => (
                    <article
                      key={sIdx}
                      className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/90 space-y-5"
                    >
                      <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-teal-400" />
                        <span>{section.heading}</span>
                      </h4>

                      <div className={`text-zinc-300 leading-relaxed font-normal whitespace-pre-line space-y-4 ${fontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
                        {section.body}
                      </div>

                      {/* Key Points Bullet List */}
                      {section.keyPoints && section.keyPoints.length > 0 && (
                        <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold block">
                            Key Principles & Takeaway Axioms
                          </span>
                          <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                            {section.keyPoints.map((pt, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2.5">
                                <span className="text-teal-400 font-bold shrink-0 mt-0.5">•</span>
                                <span className="leading-relaxed">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Framework or Code Schematic */}
                      {section.frameworkOrCode && (
                        <div className="space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold block">
                            Operational Architecture & Framework
                          </span>
                          <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-teal-300/90 overflow-x-auto leading-relaxed">
                            {section.frameworkOrCode}
                          </pre>
                        </div>
                      )}

                      {/* Case Study Callout */}
                      {section.caseStudy && (
                        <div className="p-5 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-bold text-purple-300 uppercase tracking-wide">
                            <Bookmark className="w-4 h-4 text-purple-400" />
                            <span>Case Study: {section.caseStudy.title}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            <strong className="text-white">Scenario:</strong> {section.caseStudy.scenario}
                          </p>
                          <p className="text-xs sm:text-sm text-teal-300 leading-relaxed">
                            <strong className="text-teal-400">Core Learning:</strong> {section.caseStudy.keyLearning}
                          </p>
                        </div>
                      )}

                      {/* Critical Pitfalls List (Calm Indigo Theme - No Red Danger Look) */}
                      {section.pitfallsToAvoid && section.pitfallsToAvoid.length > 0 && (
                        <div className="p-4 rounded-xl bg-indigo-950/25 border border-indigo-800/40 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-indigo-300">
                            <ShieldAlert className="w-4 h-4 text-indigo-400" />
                            <span>Critical Traps & Anti-Patterns to Prevent</span>
                          </div>
                          <ul className="space-y-2 text-xs text-zinc-300">
                            {section.pitfallsToAvoid.map((pitfall, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <span className="text-indigo-400 font-bold shrink-0 mt-0.5">•</span>
                                <span className="leading-relaxed">{pitfall}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Actionable Implementation Blueprint */}
            <section className="space-y-4">
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-teal-400" />
                <span>Actionable Implementation Blueprint</span>
              </h3>
              <div className="space-y-2.5">
                {detailedReading.practicalSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-start gap-3.5 text-xs sm:text-sm"
                  >
                    <span className="w-6 h-6 rounded-lg bg-teal-400/10 border border-teal-400/30 text-teal-400 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-zinc-300 leading-relaxed font-normal">{step}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Expert Pro Tip Callout */}
            <div className="p-5 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-start gap-3.5 text-xs sm:text-sm text-teal-200">
              <Lightbulb className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-teal-300 text-xs uppercase tracking-wider block">
                  Practitioner Pro Tip
                </span>
                <p className="leading-relaxed font-normal text-teal-100/90">
                  {detailedReading.proTip}
                </p>
              </div>
            </div>

            {/* Key Takeaway Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-purple-900/20 to-teal-950/20 border border-purple-500/30 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold block">
                Lesson Synthesis & Core Takeaway
              </span>
              <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                "{detailedReading.takeaway}"
              </p>
            </div>

            {/* Mastery Checkpoint & Self-Reflection Review */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Mastery Checkpoint & Reflection</span>
                </h4>
                <p className="text-xs text-zinc-400">
                  Confirm your understanding of these core principles before advancing to the next lesson or final quiz.
                </p>
              </div>

              <div className="space-y-2.5">
                {detailedReading.reflectionQuestions.map((q, idx) => {
                  const isChecked = !!checkedReflections[idx];
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleReflection(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-colors ${
                        isChecked
                          ? 'bg-purple-950/30 border-purple-500/50 text-zinc-200'
                          : 'bg-zinc-950/70 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                          isChecked
                            ? 'bg-teal-400 border-teal-400 text-zinc-950'
                            : 'border-zinc-700 bg-zinc-900'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="leading-relaxed">{q}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION CONTROLS */}
          <footer className="border-t border-zinc-800 bg-zinc-950 p-4 sm:p-6 sticky bottom-0 z-10">
            <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
              {/* Previous Lesson */}
              <button
                disabled={!prevLesson}
                onClick={() => prevLesson && setActiveLessonId(prevLesson.id)}
                className="px-3.5 sm:px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 disabled:opacity-30 disabled:pointer-events-none text-xs font-medium text-zinc-200 hover:text-white transition-all flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous Lesson</span>
                <span className="sm:hidden">Prev</span>
              </button>

              {/* Mark as Complete / Status */}
              <button
                onClick={handleMarkComplete}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${
                  isCurrentLessonCompleted
                    ? 'bg-purple-950/40 border border-purple-500/50 text-teal-400 hover:bg-purple-950/60'
                    : 'bg-teal-400 hover:bg-teal-300 text-zinc-950 shadow-md shadow-teal-500/20'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {isCurrentLessonCompleted ? 'Completed ✓ (Advance)' : 'Mark as Complete'}
                </span>
              </button>

              {/* Next Lesson or Take Quiz */}
              {nextLesson ? (
                <button
                  onClick={() => setActiveLessonId(nextLesson.id)}
                  className="px-3.5 sm:px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-200 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <span className="hidden sm:inline">Next Lesson</span>
                  <span className="sm:hidden">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => onStartQuiz(course.id)}
                  className="px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-teal-500/20"
                >
                  <span>Take Quiz</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};
