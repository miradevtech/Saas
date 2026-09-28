import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/courses';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenAuth: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAuth }) => {
  return (
    <footer id="footer-section" className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 15l4-4-4-4" />
                  <path d="M10 15l4-4-4-4" />
                  <path d="M16 15l4-4-4-4" />
                </svg>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Learn Path <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Flow</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Structured courses designed to help you learn at your own pace, test your understanding through interactive quizzes, and make measurable progress.
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-400">
              Learning → Progress → Growth
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Explore All 10 Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('landing', 'how-it-works')}
                  className="hover:text-teal-400 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('landing', 'why-us')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Why Learn Path Flow
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="hover:text-teal-400 transition-colors flex items-center gap-1"
                >
                  <span>Student Dashboard</span>
                  <ArrowUpRight className="w-3 h-3 text-purple-400" />
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">Course Categories</h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.filter((c) => c !== 'All').map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onNavigate('courses', cat)}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {cat} Courses
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">Student Access</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Access your personalized learning plan, quiz scores, and lesson history anytime.
            </p>
            <div className="pt-1">
              <button
                onClick={() => onOpenAuth()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-200 hover:text-white hover:border-purple-500/50 transition-all"
              >
                <span>Student Sign In</span>
                <ArrowUpRight className="w-3 h-3 text-teal-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Learn Path Flow. All rights reserved.</p>
          <div className="flex items-center gap-6 text-zinc-400">
            <span>Structured Skills Learning</span>
            <span>·</span>
            <span>Mobile-First Experience</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
