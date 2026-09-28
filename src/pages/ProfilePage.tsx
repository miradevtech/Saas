import React, { useState } from 'react';
import { User, Mail, Award, BookOpen, CheckCircle2, TrendingUp, Edit3, Save, Compass } from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { COURSES } from '../data/courses';

interface ProfilePageProps {
  onExploreCourses: () => void;
  onGoToDashboard: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  onExploreCourses,
  onGoToDashboard,
}) => {
  const { user, stats, updateProfile } = useLearning();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [title, setTitle] = useState(user?.title || 'Student & Aspiring Builder');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, title });
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Profile Header Card */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-purple-600 via-purple-500 to-teal-400 p-[2px] shadow-lg shadow-purple-500/20 shrink-0">
              <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center text-2xl font-bold text-white">
                {user?.name?.charAt(0) || 'U'}
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {user?.name || 'Student Account'}
              </h1>
              <p className="text-xs text-teal-400 font-medium">{user?.title || 'Lifelong Learner'}</p>
              <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono pt-1">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <span>{user?.email}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch sm:self-auto">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Edit3 className="w-3.5 h-3.5 text-teal-400" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
            <button
              onClick={onGoToDashboard}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 text-xs font-bold transition-all shadow-md shadow-teal-500/20"
            >
              Dashboard
            </button>
          </div>
        </div>

        {savedSuccess && (
          <div className="mt-4 p-3 rounded-lg bg-purple-950/40 border border-purple-800/40 text-teal-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>Profile details updated successfully!</span>
          </div>
        )}

        {/* Edit Form */}
        {isEditing && (
          <form onSubmit={handleSave} className="mt-6 pt-6 border-t border-zinc-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Display Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Learning Role / Bio Headline
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </form>
        )}
      </div>

      {/* Learning Performance Breakdown */}
      <div className="space-y-4">
        <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
          Student Milestone Metrics
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
            <span className="text-xs text-zinc-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>Enrolled</span>
            </span>
            <div className="text-2xl font-bold font-mono text-white pt-1">
              {stats.coursesEnrolled}
            </div>
            <p className="text-[11px] text-zinc-400">Total Courses</p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
            <span className="text-xs text-zinc-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Completed</span>
            </span>
            <div className="text-2xl font-bold font-mono text-white pt-1">
              {stats.coursesCompleted}
            </div>
            <p className="text-[11px] text-zinc-400">Courses Finished</p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
            <span className="text-xs text-zinc-400 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Lessons</span>
            </span>
            <div className="text-2xl font-bold font-mono text-white pt-1">
              {stats.lessonsCompleted}
            </div>
            <p className="text-[11px] text-zinc-400">Lessons Completed</p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
            <span className="text-xs text-zinc-400 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-zinc-300" />
              <span>Avg Quiz Score</span>
            </span>
            <div className="text-2xl font-bold font-mono text-white pt-1">
              {stats.averageQuizScore > 0 ? `${stats.averageQuizScore}%` : '—'}
            </div>
            <p className="text-[11px] text-zinc-400">Across {stats.quizAttempts} attempts</p>
          </div>
        </div>
      </div>
    </div>
  );
};
