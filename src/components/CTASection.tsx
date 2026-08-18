'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Mail, Sparkles, ArrowRight, Shield, X, AlertCircle } from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const isEmpty = email.trim() === '';
  const isValidEmail = EMAIL_REGEX.test(email.trim());
  const isInvalidEmail = !isEmpty && !isValidEmail;

  const showToast = (type: 'success' | 'error', message: string, durationMs = 4000) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, durationMs);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail || status !== 'idle') return;

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      showToast('success', 'Welcome! Check your email for next steps.');

      setTimeout(() => {
        setStatus('idle');
        setEmail('');
      }, 3000);
    }, 600);
  };

  return (
    <section id="cta" aria-label="Join Waitlist Section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Dynamic Screen Reader Live Region for Toast Alerts */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {toast?.message}
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-6 right-6 z-50 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-xl border text-sm font-semibold flex items-center gap-3 ${
              toast.type === 'success'
                ? 'bg-emerald-900/90 border-emerald-500/50 text-emerald-100 shadow-emerald-900/40'
                : 'bg-red-900/90 border-red-500/50 text-red-100 shadow-red-900/40'
            }`}
          >
            {toast.type === 'success' ? (
              <Check className="w-5 h-5 text-emerald-400 stroke-[3]" aria-hidden="true" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400" aria-hidden="true" />
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative rounded-3xl p-8 sm:p-14 md:p-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white shadow-2xl overflow-hidden border border-blue-400/30"
      >
        <div className="absolute -right-20 -top-20 w-96 h-96 border-4 border-white/10 rounded-full pointer-events-none animate-spin-slow" aria-hidden="true" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 border-4 border-emerald-400/20 rounded-full pointer-events-none animate-pulse-subtle" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/15 backdrop-blur-md border border-white/20 mb-6 text-white">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />
            Limited Early Access Slots Remaining
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Join 10K+ gig workers tracking smarter
          </h2>

          <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-xl mx-auto font-normal">
            Take total control of your earnings today. Get priority access to real-time sync, automated expense logging, and instant payouts.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Accessible Form Input linked via htmlFor and aria-invalid */}
              <div className="relative w-full text-left">
                <label htmlFor="cta-email-input" className="sr-only">
                  Email Address
                </label>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <input
                  id="cta-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  disabled={status !== 'idle'}
                  aria-invalid={isInvalidEmail}
                  aria-describedby={isInvalidEmail ? 'email-error-text' : undefined}
                  className={`w-full pl-11 pr-10 py-4 rounded-2xl bg-white text-slate-900 placeholder-slate-400 font-medium text-sm sm:text-base border transition-all duration-300 focus:outline-none ${
                    isEmpty
                      ? 'border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30'
                      : isInvalidEmail
                      ? 'border-red-500 ring-2 ring-red-500/30'
                      : 'border-emerald-500 ring-2 ring-emerald-500/30'
                  }`}
                />

                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                  {isInvalidEmail && <X className="w-5 h-5 text-red-500" aria-hidden="true" />}
                  {isValidEmail && <Check className="w-5 h-5 text-emerald-500 stroke-[3]" aria-hidden="true" />}
                </div>

                {isInvalidEmail && (
                  <p id="email-error-text" className="text-xs text-red-200 mt-1 pl-2 font-medium">
                    Please enter a valid email address (e.g. name@domain.com)
                  </p>
                )}
              </div>

              {/* Accessible Action Button */}
              <motion.button
                type="submit"
                disabled={!isValidEmail || status !== 'idle'}
                aria-label="Submit email to get early access"
                whileHover={isValidEmail && status === 'idle' ? { scale: 1.05 } : {}}
                whileTap={isValidEmail && status === 'idle' ? { scale: 0.95 } : {}}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`w-full sm:w-auto px-7 py-4 rounded-2xl font-bold text-sm sm:text-base whitespace-nowrap transition-all duration-300 flex items-center justify-center gap-2 shadow-xl min-h-[44px] ${
                  status === 'success'
                    ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30'
                    : isValidEmail && status === 'idle'
                    ? 'bg-slate-950 hover:bg-slate-900 text-white hover:text-emerald-300 shadow-slate-950/40 shadow-emerald-500/20 hover:shadow-emerald-500/30'
                    : 'bg-slate-800/80 text-slate-400 cursor-not-allowed border border-white/10'
                }`}
              >
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 font-bold"
                    >
                      <Check className="w-5 h-5 text-slate-950 stroke-[3]" aria-hidden="true" />
                      ✓ Check your email
                    </motion.span>
                  ) : status === 'loading' ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      Get Early Access
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </form>

          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-blue-100/80">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-300" aria-hidden="true" />
              No spam guaranteed
            </span>
            <span>•</span>
            <span>Unsubscribe anytime</span>
            <span>•</span>
            <span>Instant setup</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
