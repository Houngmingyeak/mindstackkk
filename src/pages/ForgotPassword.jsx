// src/pages/ForgotPassword.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/config';
import {
  FiMail, FiArrowLeft, FiCheckCircle, FiAlertCircle,
  FiRefreshCw, FiSend,
} from 'react-icons/fi';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email.trim());
      setSent(true);
    } catch (err) {
      // Map Firebase error codes to user-friendly messages
      switch (err.code) {
        case 'auth/user-not-found':
        case 'auth/invalid-email':
          setError('No account found with this email address. Please check and try again.');
          break;
        case 'auth/too-many-requests':
          setError('Too many attempts. Please wait a few minutes before trying again.');
          break;
        case 'auth/network-request-failed':
          setError('Network error. Please check your connection and try again.');
          break;
        default:
          setError('Something went wrong. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleTryAgain = () => {
    setSent(false);
    setEmail('');
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-4 transition-colors duration-300">

      {/* Decorative blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-indigo-200/30 dark:bg-indigo-900/20 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">

        {/* Card */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 overflow-hidden">

          {/* Top accent */}
          <div className="h-1.5 bg-linear-to-r from-blue-500 via-indigo-500 to-violet-500" />

          <div className="p-8">

            {/* Back link */}
            <Link
              to="/login"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 group"
            >
              <FiArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Back to Login
            </Link>

            {/* ── SUCCESS STATE ── */}
            {sent ? (
              <div className="flex flex-col items-center text-center py-4">

                {/* Animated icon */}
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-500/30 mb-5">
                  <FiCheckCircle className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  Check your inbox!
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  We sent a password reset link to
                </p>
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-5 break-all px-2">
                  {email}
                </p>

                {/* Instructions */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl p-4 text-left w-full mb-6">
                  <p className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-2">What to do next:</p>
                  <ol className="text-xs text-blue-600 dark:text-blue-400 space-y-1.5 list-none">
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                      Open the email from <strong>Firebase / MindStack</strong>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                      Click <strong>"Reset Password"</strong> in the email
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                      Set your new password and log in
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">!</span>
                      Check your <strong>Spam / Junk</strong> folder if you don't see it
                    </li>
                  </ol>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <button
                    onClick={handleTryAgain}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-bold rounded-xl transition-all"
                  >
                    <FiRefreshCw className="w-4 h-4" /> Try Again
                  </button>
                  <Link
                    to="/login"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20"
                  >
                    Back to Login
                  </Link>
                </div>
              </div>

            ) : (
              /* ── FORM STATE ── */
              <>
                {/* Icon + title */}
                <div className="flex flex-col items-center mb-7">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                    <FiMail className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-2xl font-black text-gray-900 dark:text-white text-center tracking-tight">
                    Forgot Password?
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1 leading-relaxed">
                    Enter your email and we'll send you a reset link instantly
                  </p>
                </div>

                {/* Error banner */}
                {error && (
                  <div className="flex items-start gap-3 p-3.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl mb-4">
                    <FiAlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(''); }}
                        placeholder="your@email.com"
                        required
                        disabled={loading}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 transition-all disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !email.trim()}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:translate-y-0 shadow-lg shadow-blue-500/20"
                  >
                    {loading ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                    ) : (
                      <><FiSend className="w-4 h-4" /> Send Reset Link</>
                    )}
                  </button>
                </form>

                <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-5">
                  Remember your password?{' '}
                  <Link to="/login" className="text-blue-500 hover:underline font-semibold">
                    Sign in here
                  </Link>
                </p>
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
