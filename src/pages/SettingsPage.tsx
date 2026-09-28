import React, { useState } from 'react';
import { Bell, KeyRound, LogOut, Shield, User, CheckCircle2 } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

interface SettingsPageProps {
  onLogout: () => void;
  onGoToDashboard?: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ onLogout, onGoToDashboard }) => {
  const { user, updateProfile, logout } = useLearning();

  const [name, setName] = useState(user?.name || '');
  const [email] = useState(user?.email || '');

  // Notifications
  const [learningReminders, setLearningReminders] = useState(true);
  const [courseUpdates, setCourseUpdates] = useState(true);

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordToast, setPasswordToast] = useState(false);
  const [profileToast, setProfileToast] = useState(false);

  const handleUpdateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name });
    setProfileToast(true);
    setTimeout(() => setProfileToast(false), 3000);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) return;
    setCurrentPassword('');
    setNewPassword('');
    setPasswordToast(true);
    setTimeout(() => setPasswordToast(false), 3000);
  };

  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Title & Back to Dashboard */}
      <div className="flex items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Settings
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Manage your account preferences, notifications, and platform settings.
          </p>
        </div>
        {onGoToDashboard && (
          <button
            onClick={onGoToDashboard}
            className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-semibold text-white transition-all shrink-0"
          >
            ← Dashboard
          </button>
        )}
      </div>

      {profileToast && (
        <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 text-teal-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-teal-400" />
          <span>Account changes saved!</span>
        </div>
      )}

      {passwordToast && (
        <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 text-teal-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-teal-400" />
          <span>Password updated successfully!</span>
        </div>
      )}

      {/* Account Section */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-4 shadow-md">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <User className="w-4 h-4 text-teal-400" />
          <span>Account Information</span>
        </h2>
        <form onSubmit={handleUpdateAccount} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Full Name
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
                Email Address
              </label>
              <input
                type="email"
                disabled
                value={email}
                className="w-full bg-zinc-900/50 border border-zinc-800/60 rounded-xl px-3.5 py-2.5 text-xs text-zinc-500 cursor-not-allowed outline-none font-mono"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors"
          >
            Update Account
          </button>
        </form>
      </section>

      {/* Password Section */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-4 shadow-md">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <KeyRound className="w-4 h-4 text-amber-400" />
          <span>Password & Security</span>
        </h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Current Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                New Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors"
          >
            Change Password
          </button>
        </form>
      </section>

      {/* Notifications Section */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-4 shadow-md">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <Bell className="w-4 h-4 text-cyan-400" />
          <span>Notifications</span>
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
            <div>
              <h3 className="text-xs font-semibold text-white">Daily Learning Reminders</h3>
              <p className="text-[11px] text-zinc-400">Receive gentle nudges to keep your study streak active.</p>
            </div>
            <input
              type="checkbox"
              checked={learningReminders}
              onChange={(e) => setLearningReminders(e.target.checked)}
              className="w-4 h-4 accent-teal-400 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
            <div>
              <h3 className="text-xs font-semibold text-white">Course Updates & Syllabus Additions</h3>
              <p className="text-[11px] text-zinc-400">Be notified when new practical exercises or quizzes are added.</p>
            </div>
            <input
              type="checkbox"
              checked={courseUpdates}
              onChange={(e) => setCourseUpdates(e.target.checked)}
              className="w-4 h-4 accent-teal-400 rounded cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Account Actions Section */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
        <h2 className="text-sm font-bold text-zinc-300 flex items-center gap-2">
          <LogOut className="w-4 h-4" />
          <span>Account Actions</span>
        </h2>
        <p className="text-xs text-zinc-400">
          Sign out of your session on this device. Your enrolled courses and progress will remain securely saved.
        </p>
        <button
          onClick={handleLogout}
          className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 font-semibold text-xs transition-colors"
        >
          Sign Out of Learn Path Flow
        </button>
      </section>
    </div>
  );
};
