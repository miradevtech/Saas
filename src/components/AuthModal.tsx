import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
  onSuccess: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'signin',
  onSuccess,
}) => {
  const { login, signup, resetPassword } = useLearning();
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [resetSent, setResetSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanEmail = email.trim();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (mode === 'forgot') {
      setLoading(true);
      try {
        await resetPassword(cleanEmail);
        setResetSent(true);
      } catch (err: any) {
        setError(err.message || 'Unable to send reset email. Please verify the address.');
      } finally {
        setLoading(false);
      }
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (mode === 'signup') {
      if (!name.trim()) {
        setError('Please enter your full name.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      setLoading(true);
      try {
        await signup(name, cleanEmail, password);
        onClose();
        onSuccess();
      } catch (err: any) {
        const msg = err.code === 'auth/email-already-in-use'
          ? 'An account with this email already exists. Please sign in.'
          : err.message || 'Failed to create student account. Please try again.';
        setError(msg);
      } finally {
        setLoading(false);
      }
    } else {
      // Sign In
      setLoading(true);
      try {
        await login(cleanEmail, password);
        onClose();
        onSuccess();
      } catch (err: any) {
        const msg = err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential'
          ? 'Incorrect password or credentials. Please try again or reset.'
          : err.code === 'auth/user-not-found'
          ? 'No student account found with this email. Please sign up.'
          : err.message || 'Sign in failed. Please check credentials.';
        setError(msg);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-teal-400 mb-3 shadow-inner">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M4 15l4-4-4-4" />
              <path d="M10 15l4-4-4-4" />
              <path d="M16 15l4-4-4-4" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            {mode === 'signin' && 'Sign in to Learn Path Flow'}
            {mode === 'signup' && 'Create Your Student Account'}
            {mode === 'forgot' && 'Reset Your Password'}
          </h2>
          <p className="text-xs text-zinc-400 mt-2">
            {mode === 'signin' && 'Access your courses, saved quiz scores, and student dashboard.'}
            {mode === 'signup' && 'Start learning practical skills through structured courses.'}
            {mode === 'forgot' && 'Enter your email to receive password recovery instructions.'}
          </p>
        </div>

        {/* Mode Switcher Tabs (Sign In / Sign Up) */}
        {mode !== 'forgot' && (
          <div className="flex p-1 bg-zinc-950 rounded-xl mb-6 border border-zinc-800/80">
            <button
              type="button"
              onClick={() => {
                setMode('signin');
                setError(null);
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                mode === 'signin'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setError(null);
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                mode === 'signup'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Error notification */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-slate-900/80 border border-slate-700/70 text-slate-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-indigo-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Reset Email Sent Confirmation */}
        {mode === 'forgot' && resetSent ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Reset email sent</h3>
              <p className="text-xs text-zinc-400 mt-1">
                We sent password recovery instructions to <span className="text-teal-400">{email}</span>.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setResetSent(false);
                setMode('signin');
              }}
              className="text-xs font-medium text-teal-400 hover:underline"
            >
              Return to Sign In
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Roland Kaiser"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-purple-500 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-purple-500 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition-all"
                />
              </div>
            </div>

            {mode !== 'forgot' && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-medium text-zinc-300">
                    Password
                  </label>
                  {mode === 'signin' && (
                    <button
                      type="button"
                      onClick={() => {
                        setMode('forgot');
                        setError(null);
                      }}
                      className="text-[11px] text-zinc-400 hover:text-teal-400 transition-colors"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-purple-500 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition-all"
                  />
                </div>
              </div>
            )}

            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-purple-500 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-500 hover:to-teal-400 disabled:opacity-50 text-white font-semibold text-xs transition-all shadow-md shadow-purple-500/20 flex items-center justify-center gap-1.5 mt-2"
            >
              <span>
                {loading
                  ? 'Signing in...'
                  : mode === 'signin'
                  ? 'Sign In to Dashboard'
                  : mode === 'signup'
                  ? 'Create Student Account'
                  : 'Send Reset Link'}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        {mode === 'forgot' && !resetSent && (
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setMode('signin')}
              className="text-xs text-zinc-400 hover:text-white transition-colors"
            >
              Back to Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
