import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Award,
  Compass,
  Play,
  BarChart2,
  ShieldCheck,
  Zap,
  X,
  Sparkles,
  HelpCircle,
  FileCheck,
} from 'lucide-react';
import { COURSES, CATEGORIES } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { CourseThumbnail } from '../components/CourseThumbnail';

interface LandingPageProps {
  onSelectCourse: (courseId: string) => void;
  onExploreCourses: (category?: string) => void;
  onStartLearning: () => void;
}

interface InfoDrawerContent {
  sectionTitle: string;
  badge: string;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  content: string;
  bullets: string[];
  category?: string;
  courseIds?: string[];
  ctaText?: string;
  onCta?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onSelectCourse,
  onExploreCourses,
  onStartLearning,
}) => {
  const [activeInfoDrawer, setActiveInfoDrawer] = useState<InfoDrawerContent | null>(null);

  // Featured courses for top showcase
  const featuredCourses = COURSES.slice(0, 6);

  const categoryIcons: Record<string, string> = {
    Business: '💼',
    Finance: '📈',
    Design: '🎨',
    Technology: '💻',
    Marketing: '🚀',
    Productivity: '⚡',
  };

  const categoryDescriptions: Record<string, string> = {
    Business: 'Small business setup, market research, and freelancing.',
    Finance: 'Budgeting frameworks, savings systems, and debt management.',
    Design: 'Graphic design fundamentals and video editing workflows.',
    Technology: 'Modern web development and Microsoft Office proficiency.',
    Marketing: 'Online acquisition strategies and organic social growth.',
    Productivity: 'Goal setting, calendar time-blocking, and focus routines.',
  };

  // Open interactive swipe-up info drawer for categories
  const handleCategoryClick = (category: string) => {
    const categoryCourses = COURSES.filter((c) => c.category === category);
    setActiveInfoDrawer({
      sectionTitle: 'Course Category Focus',
      badge: `${category.toUpperCase()} SPECIALIZATION`,
      title: `${category} Courses & Curriculum`,
      subtitle: categoryDescriptions[category] || `Comprehensive practical courses in ${category}.`,
      content: `Our ${category} curriculum is designed with step-by-step clarity. Each course contains 10 structured lessons, practical summaries, and a comprehensive end-of-course knowledge quiz.`,
      bullets: [
        `Includes ${categoryCourses.length} in-depth course${categoryCourses.length > 1 ? 's' : ''}`,
        `10 lessons per course with self-paced learning`,
        `Interactive knowledge assessments with immediate answer keys`,
        `Progress tracked on your student dashboard`,
      ],
      category,
      courseIds: categoryCourses.map((c) => c.id),
      ctaText: `Explore All ${category} Courses`,
      onCta: () => {
        setActiveInfoDrawer(null);
        onExploreCourses(category);
      },
    });
  };

  // Open interactive swipe-up info drawer for How It Works steps
  const handleStepClick = (stepNumber: string, title: string, description: string) => {
    const stepDetails: Record<string, { subtitle: string; bullets: string[]; ctaText: string; onCta: () => void }> = {
      '01': {
        subtitle: 'Find the high-demand practical skill you want to develop.',
        bullets: [
          'Choose from 10 distinct subject domains including Business, Tech, Design, and Finance',
          'Review complete syllabi and lesson outlines prior to starting',
          'Self-contained modular courses with estimated durations',
        ],
        ctaText: 'Browse 10 Courses',
        onCta: () => {
          setActiveInfoDrawer(null);
          onExploreCourses();
        },
      },
      '02': {
        subtitle: 'Learn through clean, step-by-step modular lessons.',
        bullets: [
          'No filler or fluff—each lesson provides practical, actionable insights',
          'Track your current lesson position automatically',
          'Mark lessons as complete as you finish them',
        ],
        ctaText: 'Start Learning Now',
        onCta: () => {
          setActiveInfoDrawer(null);
          onStartLearning();
        },
      },
      '03': {
        subtitle: 'Reinforce what you have learned with instant feedback.',
        bullets: [
          'Each course includes a 5-question multiple choice knowledge check',
          'Score 80% or higher to achieve a passing status',
          'Detailed answer explanations provide immediate learning reinforcement',
          'Retake quizzes anytime to improve your score',
        ],
        ctaText: 'View Course Syllabus & Quizzes',
        onCta: () => {
          setActiveInfoDrawer(null);
          onSelectCourse('course-1');
        },
      },
      '04': {
        subtitle: 'Keep your momentum with clear metrics and history.',
        bullets: [
          'See your enrolled courses, lesson completion counts, and quiz scores',
          'Resume your exact lesson with a single click',
          'Permanent chronological activity stream records your milestones',
        ],
        ctaText: 'Open Student Dashboard',
        onCta: () => {
          setActiveInfoDrawer(null);
          onStartLearning();
        },
      },
    };

    const detail = stepDetails[stepNumber] || {
      subtitle: description,
      bullets: ['Structured learning', 'Self-paced progress', 'Real outcomes'],
      ctaText: 'Get Started',
      onCta: () => {
        setActiveInfoDrawer(null);
        onStartLearning();
      },
    };

    setActiveInfoDrawer({
      sectionTitle: `Learning Step ${stepNumber}`,
      badge: `STEP ${stepNumber}`,
      title,
      subtitle: detail.subtitle,
      content: description,
      bullets: detail.bullets,
      ctaText: detail.ctaText,
      onCta: detail.onCta,
    });
  };

  // Open interactive swipe-up info drawer for Why Us features
  const handleFeatureClick = (title: string, summary: string, details: string[]) => {
    setActiveInfoDrawer({
      sectionTitle: 'Platform Pillars',
      badge: 'LEARN PATH FLOW PILLAR',
      title,
      subtitle: summary,
      content: `Learn Path Flow is engineered around simplicity, high information density, and uninterrupted learning flow.`,
      bullets: details,
      ctaText: 'Start Learning Free',
      onCta: () => {
        setActiveInfoDrawer(null);
        onStartLearning();
      },
    });
  };

  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-12 md:pt-20 overflow-hidden">
        {/* Ambient background light gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600/20 via-teal-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500/10 blur-[90px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Domain Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 border border-teal-400/20 bg-teal-400/5 px-3 py-1.5 rounded-full">
              <span>STRUCTURED LEARNING PLATFORM</span>
              <span className="text-teal-500/40">/</span>
              <span>10 PRACTICAL COURSES</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Learn Skills.{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-300 bg-clip-text text-transparent">
                Build Your Future.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl mx-auto">
              Learn practical skills through structured courses designed to help you learn at your own pace and make real progress.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={onStartLearning}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 group"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onExploreCourses()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-teal-400" />
                <span>Explore Courses</span>
              </button>
            </div>
          </div>

          {/* Clean Curriculum Spotlight Showcase */}
          <div className="mt-14 max-w-5xl mx-auto relative">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-2xl p-5 sm:p-7 backdrop-blur-xl relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left Clean Course Curriculum Showcase */}
                <div className="md:col-span-7 bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="text-teal-400 font-medium">Curriculum Spotlight</span>
                    <span className="font-mono">10 Lessons · Self-Paced</span>
                  </div>
                  <div className="h-40 rounded-lg overflow-hidden border border-zinc-800">
                    <CourseThumbnail courseId="course-4" className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Learn Web Development from Scratch</h3>
                    <p className="text-xs text-zinc-400 mt-1">Master responsive website layouts, CSS flexbox & grid, and modern JavaScript.</p>
                  </div>
                  <div className="pt-1 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium">Technology</span>
                      <span>·</span>
                      <span>Beginner Level</span>
                    </div>
                    <button
                      onClick={() => onSelectCourse('course-4')}
                      className="text-xs text-teal-400 hover:text-teal-300 font-medium flex items-center gap-1"
                    >
                      <span>Preview Syllabus</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Right Learning Architecture & Highlights */}
                <div className="md:col-span-5 space-y-3">
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Learning Architecture</span>
                    <p className="text-xs font-medium text-white mt-1">10 Dedicated Courses · 100 Structured Lessons</p>
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-zinc-400">
                      <span>Beginner-friendly</span>
                      <span>·</span>
                      <span>Self-paced</span>
                      <span>·</span>
                      <span>Built-in Quizzes</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Dynamic Progress</span>
                      <span className="text-xs font-mono text-teal-400">Verified Checks</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-zinc-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-400" />
                        <span>Interactive Knowledge Quizzes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-400" />
                        <span>Instant Mark as Complete Sync</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-400" />
                        <span>Real-Time Student Dashboard</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectCourse('course-1')}
                    className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white flex items-center justify-between transition-colors"
                  >
                    <span>View Sample Course Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-teal-400 tracking-wider uppercase mb-1">
              Curated Curriculum
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Courses
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Hand-picked practical skills to build high-demand capabilities in business, tech, and creative arts.
            </p>
          </div>
          <button
            onClick={() => onExploreCourses()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors self-start md:self-auto"
          >
            <span>Browse All 10 Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={onSelectCourse}
            />
          ))}
        </div>
      </section>

      {/* COURSE CATEGORIES (SWIPE-UP TO INFORMATION WITH BACK BUTTON) */}
      <section id="categories-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono text-teal-400 tracking-wider uppercase mb-1">
            Topic Specializations
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Major Learning Categories
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Click any category below to view detailed curriculum information and course pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.filter((c) => c !== 'All').map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="group text-left p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-teal-400/50 transition-all duration-200 shadow-md hover:shadow-xl active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{categoryIcons[category] || '📚'}</span>
                <span className="text-xs text-zinc-400 group-hover:text-teal-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-medium">
                  View Info <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">
                {category}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                {categoryDescriptions[category]}
              </p>
              <div className="mt-3 pt-2.5 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500 group-hover:text-zinc-400">
                <span>Tap for details</span>
                <span className="font-mono text-teal-500/80">Swipe up info ↑</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS (SWIPE-UP TO INFORMATION WITH BACK BUTTON) */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 sm:p-12 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-teal-400 tracking-wider uppercase mb-1 block">
              The Learning Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Click any step to reveal detailed guidance and how you progress from lesson to mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 01 */}
            <button
              onClick={() => handleStepClick('01', 'Choose a Course', 'Explore practical courses across 6 major domains and find skills that matter to you.')}
              className="text-left space-y-3 p-5 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/60 hover:border-teal-400/40 transition-all cursor-pointer group active:scale-[0.99]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-teal-400">01</span>
                <span className="text-[11px] text-zinc-500 group-hover:text-teal-400 transition-colors">Details →</span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">Choose a Course</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Explore practical courses and find something you want to learn.
              </p>
            </button>

            {/* Step 02 */}
            <button
              onClick={() => handleStepClick('02', 'Start Learning', 'Begin structured lessons designed for deep, step-by-step clarity without confusing jargon.')}
              className="text-left space-y-3 p-5 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/60 hover:border-purple-400/40 transition-all cursor-pointer group active:scale-[0.99]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-400">02</span>
                <span className="text-[11px] text-zinc-500 group-hover:text-purple-400 transition-colors">Details →</span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">Start Learning</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Enroll and begin structured lessons designed for deep, step-by-step clarity.
              </p>
            </button>

            {/* Step 03 */}
            <button
              onClick={() => handleStepClick('03', 'Test Your Knowledge', 'Complete quizzes and knowledge checks with immediate feedback, answer explanations, and score tracking.')}
              className="text-left space-y-3 p-5 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/60 hover:border-teal-400/40 transition-all cursor-pointer group active:scale-[0.99]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-teal-400">03</span>
                <span className="text-[11px] text-zinc-500 group-hover:text-teal-400 transition-colors">Details →</span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">Test Your Knowledge</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Complete quizzes and knowledge checks with immediate feedback and answers.
              </p>
            </button>

            {/* Step 04 */}
            <button
              onClick={() => handleStepClick('04', 'Track Your Progress', 'Monitor your enrolled courses, lesson completion milestones, and quiz scores on your student dashboard.')}
              className="text-left space-y-3 p-5 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/60 hover:border-purple-400/40 transition-all cursor-pointer group active:scale-[0.99]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-400">04</span>
                <span className="text-[11px] text-zinc-500 group-hover:text-purple-400 transition-colors">Details →</span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">Track Your Progress</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                See your progress and complete your learning goals on your student dashboard.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* WHY LEARN PATH FLOW */}
      <section id="why-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-teal-400 tracking-wider uppercase mb-1 block">
            Built for Real Outcomes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Why Learn Path Flow
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Click any pillar to see how our curriculum delivers practical, high-retention mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() =>
              handleFeatureClick(
                'Structured Learning',
                'Learn through organized lessons instead of random information scattered across the internet.',
                [
                  'Progressive difficulty from foundational concepts to practical execution',
                  'Every course divided into exactly 10 bite-sized lessons',
                  'Clear takeaways and real-world exercises in every lesson',
                ]
              )
            }
            className="text-left p-6 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-purple-500/40 space-y-3 transition-all cursor-pointer group active:scale-[0.99]"
          >
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">Structured Learning</h3>
              <span className="text-[11px] text-zinc-500 group-hover:text-teal-400">View Info →</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Learn through organized lessons instead of random information scattered across the internet.
            </p>
          </button>

          <button
            onClick={() =>
              handleFeatureClick(
                'Learn at Your Own Pace',
                'Continue learning whenever it works for you without arbitrary deadlines or lockouts.',
                [
                  'Resume instantly where you left off on any device',
                  'Revisit previously completed lessons anytime to refresh your memory',
                  'No countdown timers or locked modules',
                ]
              )
            }
            className="text-left p-6 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-purple-500/40 space-y-3 transition-all cursor-pointer group active:scale-[0.99]"
          >
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">Learn at Your Own Pace</h3>
              <span className="text-[11px] text-zinc-500 group-hover:text-teal-400">View Info →</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Continue learning whenever it works for you without arbitrary deadlines or lockouts.
            </p>
          </button>

          <button
            onClick={() =>
              handleFeatureClick(
                'Track Your Progress',
                'See exactly how far you have progressed across every course, lesson, and quiz attempt.',
                [
                  'Dynamic percentage progress calculated for each enrolled course',
                  'Permanent activity stream logged upon lesson and quiz completion',
                  'Dedicated student dashboard to monitor all learning statistics',
                ]
              )
            }
            className="text-left p-6 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-purple-500/40 space-y-3 transition-all cursor-pointer group active:scale-[0.99]"
          >
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">Track Your Progress</h3>
              <span className="text-[11px] text-zinc-500 group-hover:text-purple-400">View Info →</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              See exactly how far you’ve progressed across every course, lesson, and quiz attempt.
            </p>
          </button>

          <button
            onClick={() =>
              handleFeatureClick(
                'Test Your Knowledge',
                'Use quizzes to reinforce what you have learned and verify your retention immediately.',
                [
                  'Immediate score calculation and 80% passing threshold indicator',
                  'Answer explanations for every single quiz question',
                  'Unlimited retakes so you can master each topic',
                ]
              )
            }
            className="text-left p-6 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-teal-400/40 space-y-3 transition-all cursor-pointer group active:scale-[0.99]"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-400/10 border border-teal-400/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">Test Your Knowledge</h3>
              <span className="text-[11px] text-zinc-500 group-hover:text-teal-400">View Info →</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Use quizzes to reinforce what you’ve learned and verify your retention immediately.
            </p>
          </button>

          <button
            onClick={() =>
              handleFeatureClick(
                'Practical Skills',
                'Focus on useful knowledge that can be applied in real life.',
                [
                  'Small business setup, marketing strategies, and personal budgeting',
                  'Coding responsive websites and mastering office tools',
                  'Time management and video creation workflows',
                ]
              )
            }
            className="text-left p-6 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-purple-500/40 space-y-3 md:col-span-2 transition-all cursor-pointer group active:scale-[0.99]"
          >
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">Practical Skills</h3>
              <span className="text-[11px] text-zinc-500 group-hover:text-teal-400">View Info →</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Focus on useful knowledge that can be applied in real life—from launching businesses and writing proposals to writing modern code and managing money.
            </p>
          </button>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-600/15 blur-[100px] pointer-events-none rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-xl mx-auto">
            Ready to Build Real-World Skills at Your Own Speed?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
            Sign up with your email to access all 10 complete courses, interactive quizzes, and dynamic progress tracking.
          </p>
          <div className="pt-2">
            <button
              onClick={onStartLearning}
              className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-teal-500/20 inline-flex items-center gap-2 group"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SWIPE-UP INFORMATION DRAWER / BOTTOM SHEET */}
      {activeInfoDrawer && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            onClick={() => setActiveInfoDrawer(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Swipe-Up Modal / Bottom Sheet */}
          <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-t-3xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto z-10 space-y-6 animate-in slide-in-from-bottom-8 duration-300">
            {/* Top Navigation Row with prominent Back Button */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
              <button
                onClick={() => setActiveInfoDrawer(null)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white transition-all shadow-sm active:scale-95"
              >
                <ArrowLeft className="w-4 h-4 text-teal-400" />
                <span>Back</span>
              </button>

              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                {activeInfoDrawer.sectionTitle}
              </span>

              <button
                onClick={() => setActiveInfoDrawer(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Badge & Title */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-400 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeInfoDrawer.badge}</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {activeInfoDrawer.title}
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {activeInfoDrawer.subtitle}
              </p>
            </div>

            {/* Detailed Content */}
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <p className="text-xs text-zinc-300 leading-relaxed">
                {activeInfoDrawer.content}
              </p>

              {activeInfoDrawer.bullets && activeInfoDrawer.bullets.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400 block">
                    Key Features & Outcomes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {activeInfoDrawer.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* If Category, show included course pills */}
            {activeInfoDrawer.courseIds && activeInfoDrawer.courseIds.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                  Included Courses:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeInfoDrawer.courseIds.map((cid) => {
                    const c = COURSES.find((course) => course.id === cid);
                    if (!c) return null;
                    return (
                      <button
                        key={cid}
                        onClick={() => {
                          setActiveInfoDrawer(null);
                          onSelectCourse(c.id);
                        }}
                        className="text-left p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-teal-400/40 text-xs transition-colors flex items-center justify-between group"
                      >
                        <div className="min-w-0 pr-2">
                          <p className="font-semibold text-white truncate group-hover:text-teal-300 transition-colors">
                            {c.title}
                          </p>
                          <span className="text-[11px] text-zinc-400">
                            {c.lessonsCount} lessons · {c.duration}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Actions with prominent Back and CTA Buttons */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveInfoDrawer(null)}
                className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-teal-400" />
                <span>Back</span>
              </button>

              {activeInfoDrawer.onCta && (
                <button
                  onClick={activeInfoDrawer.onCta}
                  className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs transition-all shadow-md shadow-teal-500/20 flex items-center gap-1.5"
                >
                  <span>{activeInfoDrawer.ctaText || 'Proceed'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
