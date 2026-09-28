import React, { useState } from 'react';
import { BookOpen, Compass, LayoutDashboard, User, LogOut, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
  onOpenAuth: (initialMode?: 'signin' | 'signup') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenAuth,
}) => {
  const { user, isAuthenticated, logout } = useLearning();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleNav = (view: string, param?: string) => {
    onNavigate(view, param);
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNav('landing')}
          className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-purple-500 to-teal-400 p-[1px] shadow-lg shadow-purple-500/20">
            <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Stepped progress chevrons */}
                <svg className="w-5 h-5 text-teal-400 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15l4-4-4-4" />
                  <path d="M10 15l4-4-4-4" />
                  <path d="M16 15l4-4-4-4" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
              Learn Path <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Flow</span>
            </span>
            <span className="block text-[10px] text-zinc-400 font-mono tracking-wider -mt-1 uppercase">
              Skills Learning
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          <button
            onClick={() => handleNav('courses')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              currentView === 'courses'
                ? 'text-white bg-zinc-900'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => handleNav('landing', 'how-it-works')}
            className="px-3 py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNav('landing', 'why-us')}
            className="px-3 py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-colors"
          >
            About
          </button>

          {isAuthenticated && (
            <button
              onClick={() => handleNav('dashboard')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                currentView === 'dashboard'
                  ? 'text-teal-400 bg-purple-950/40 border border-purple-500/40'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-purple-400" />
              <span>Student Dashboard</span>
            </button>
          )}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-sm text-zinc-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-teal-400 flex items-center justify-center text-xs font-bold text-zinc-950">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <span className="font-medium max-w-[120px] truncate">{user?.name}</span>
                <span className="text-zinc-500 text-xs">▼</span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl py-2 z-50">
                  <div className="px-4 py-2 border-b border-zinc-800">
                    <p className="text-xs font-semibold text-white truncate">{user?.name}</p>
                    <p className="text-[11px] text-zinc-400 font-mono truncate">{user?.email}</p>
                  </div>
                  <button
                    onClick={() => handleNav('dashboard')}
                    className="w-full text-left px-4 py-2 text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center gap-2"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5 text-purple-400" />
                    Student Dashboard
                  </button>
                  <button
                    onClick={() => handleNav('profile')}
                    className="w-full text-left px-4 py-2 text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center gap-2"
                  >
                    <User className="w-3.5 h-3.5 text-teal-400" />
                    Profile & Statistics
                  </button>
                  <button
                    onClick={() => handleNav('settings')}
                    className="w-full text-left px-4 py-2 text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center gap-2"
                  >
                    <Compass className="w-3.5 h-3.5 text-zinc-400" />
                    Settings
                  </button>
                  <div className="border-t border-zinc-800 my-1" />
                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                      onNavigate('landing');
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenAuth('signin')}
                className="px-3.5 py-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-4 py-1.5 text-sm font-semibold rounded-lg bg-teal-400 hover:bg-teal-300 text-zinc-950 shadow-md shadow-teal-500/20 transition-all flex items-center gap-1.5 hover:gap-2"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus-visible:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-4 pt-3 pb-6 space-y-2">
          {/* Only show marketing links when NOT on student dashboard */}
          {currentView !== 'dashboard' && (
            <>
              <button
                onClick={() => handleNav('courses')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-200 hover:bg-zinc-900"
              >
                All Courses (10)
              </button>
              <button
                onClick={() => handleNav('landing', 'how-it-works')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-200 hover:bg-zinc-900"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNav('landing', 'why-us')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-200 hover:bg-zinc-900"
              >
                Why Learn Path Flow
              </button>
            </>
          )}

          {isAuthenticated ? (
            <div className={`space-y-1 ${currentView !== 'dashboard' ? 'pt-2 border-t border-zinc-800' : ''}`}>
              <div className="px-3 py-1.5 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Signed in as </span>
                <span className="text-xs font-semibold text-teal-400 truncate max-w-[150px]">{user?.name}</span>
              </div>
              <button
                onClick={() => handleNav('dashboard')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-teal-400 hover:bg-zinc-900 flex items-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4" />
                Student Dashboard
              </button>
              <button
                onClick={() => handleNav('courses')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-200 hover:bg-zinc-900 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-purple-400" />
                All Courses (10)
              </button>
              <button
                onClick={() => handleNav('profile')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-200 hover:bg-zinc-900 flex items-center gap-2"
              >
                <User className="w-4 h-4 text-purple-400" />
                Profile & Stats
              </button>
              <button
                onClick={() => handleNav('settings')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-200 hover:bg-zinc-900 flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                Settings
              </button>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                  onNavigate('landing');
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          ) : (
            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signin');
                }}
                className="w-full py-2.5 rounded-lg border border-zinc-800 text-sm font-medium text-zinc-200 hover:bg-zinc-900"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signup');
                }}
                className="w-full py-2.5 rounded-lg bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-sm flex items-center justify-center gap-1.5 shadow-md shadow-teal-500/20"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
