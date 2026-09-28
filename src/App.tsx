import React, { useState, useEffect } from 'react';
import { LearningProvider, useLearning } from './context/LearningContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { LandingPage } from './pages/LandingPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { LearningInterface } from './pages/LearningInterface';
import { QuizView } from './pages/QuizView';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';

function AppContent() {
  const { isAuthenticated } = useLearning();

  // Navigation State
  const [currentView, setCurrentView] = useState<
    'landing' | 'courses' | 'course-details' | 'dashboard' | 'learning' | 'quiz' | 'profile' | 'settings'
  >('landing');

  const [selectedCourseId, setSelectedCourseId] = useState<string>('course-1');
  const [activeLessonId, setActiveLessonId] = useState<string | undefined>(undefined);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Auth Modal State
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authInitialMode, setAuthInitialMode] = useState<'signin' | 'signup'>('signin');

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedCourseId]);

  const handleNavigate = (view: string, param?: string) => {
    if (view === 'courses') {
      if (param) {
        setFilterCategory(param);
      } else {
        setFilterCategory('All');
      }
      setCurrentView('courses');
    } else if (view === 'landing') {
      setCurrentView('landing');
      if (param) {
        setTimeout(() => {
          const el = document.getElementById(param);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (view === 'dashboard') {
      if (!isAuthenticated) {
        setAuthInitialMode('signin');
        setAuthModalOpen(true);
      } else {
        setCurrentView('dashboard');
      }
    } else if (view === 'profile') {
      if (!isAuthenticated) {
        setAuthInitialMode('signin');
        setAuthModalOpen(true);
      } else {
        setCurrentView('profile');
      }
    } else if (view === 'settings') {
      if (!isAuthenticated) {
        setAuthInitialMode('signin');
        setAuthModalOpen(true);
      } else {
        setCurrentView('settings');
      }
    }
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentView('course-details');
  };

  const handleStartLesson = (courseId: string, lessonId?: string) => {
    setSelectedCourseId(courseId);
    setActiveLessonId(lessonId);
    setCurrentView('learning');
  };

  const handleStartQuiz = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentView('quiz');
  };

  const handleOpenAuth = (mode: 'signin' | 'signup' = 'signin') => {
    setAuthInitialMode(mode);
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = () => {
    setCurrentView('dashboard');
  };
  // Show landing page Navbar and Footer ONLY on public marketing views
  const isMarketingView =
    currentView === 'landing' || currentView === 'courses' || currentView === 'course-details';

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-teal-200">
      {/* Show marketing navbar ONLY on landing and courses pages, NEVER on student dashboard/learning */}
      {isMarketingView && (
        <Navbar
          currentView={currentView}
          onNavigate={handleNavigate}
          onOpenAuth={handleOpenAuth}
        />
      )}

      {/* Main Page View Renderer */}
      <main className="flex-1">
        {currentView === 'landing' && (
          <LandingPage
            onSelectCourse={handleSelectCourse}
            onExploreCourses={(category) => {
              if (category) setFilterCategory(category);
              setCurrentView('courses');
            }}
            onStartLearning={() => {
              if (isAuthenticated) {
                setCurrentView('dashboard');
              } else {
                handleOpenAuth('signup');
              }
            }}
          />
        )}

        {currentView === 'courses' && (
          <CoursesPage
            initialCategory={filterCategory}
            onSelectCourse={handleSelectCourse}
            onBack={() => setCurrentView('landing')}
          />
        )}

        {currentView === 'course-details' && (
          <CourseDetailsPage
            courseId={selectedCourseId}
            onBack={() => setCurrentView('courses')}
            onOpenAuth={handleOpenAuth}
            onStartLesson={handleStartLesson}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {currentView === 'dashboard' && (
          <StudentDashboard
            onStartLesson={handleStartLesson}
            onStartQuiz={handleStartQuiz}
            onExploreCourses={() => {
              setFilterCategory('All');
              setCurrentView('courses');
            }}
            onSelectCourse={handleSelectCourse}
            onNavigateProfile={() => setCurrentView('profile')}
            onNavigateSettings={() => setCurrentView('settings')}
            onLogout={() => setCurrentView('landing')}
          />
        )}

        {currentView === 'learning' && (
          <LearningInterface
            courseId={selectedCourseId}
            initialLessonId={activeLessonId}
            onExit={() => setCurrentView('dashboard')}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {currentView === 'quiz' && (
          <QuizView
            courseId={selectedCourseId}
            onExit={() => setCurrentView('course-details')}
            onReturnToLessons={() => handleStartLesson(selectedCourseId)}
            onGoToDashboard={() => setCurrentView('dashboard')}
            onExploreCourses={() => {
              setFilterCategory('All');
              setCurrentView('courses');
            }}
          />
        )}

        {currentView === 'profile' && (
          <ProfilePage
            onExploreCourses={() => setCurrentView('courses')}
            onGoToDashboard={() => setCurrentView('dashboard')}
          />
        )}

        {currentView === 'settings' && (
          <SettingsPage
            onLogout={() => setCurrentView('landing')}
            onGoToDashboard={() => setCurrentView('dashboard')}
          />
        )}
      </main>

      {/* Show marketing footer ONLY on landing and courses pages, NEVER on student dashboard */}
      {isMarketingView && (
        <Footer
          onNavigate={handleNavigate}
          onOpenAuth={() => handleOpenAuth('signin')}
        />
      )}

      {/* Global Email Authentication Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authInitialMode}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default function App() {
  return (
    <LearningProvider>
      <AppContent />
    </LearningProvider>
  );
}
