'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Sparkles, Award } from 'lucide-react';

export default function Hero() {
  const headlineText = "Know your money. Every rupee, every day.";
  const subheadingText = "Real-time earnings tracking for Swiggy, Zomato, Uber, Rapido, and freelancers. Instant bank transfers, smart income predictions, and zero hidden platform fees.";

  // Framer Motion useScroll hook for Desktop Parallax (0.5x speed)
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 400]);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.008, delayChildren: 0.6 },
    },
  };

  const letterChildVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.12 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* GPU-accelerated Parallax Background (0.5x scroll speed on desktop) */}
      <motion.div
        style={{ y: isDesktop ? yParallax : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-emerald-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors duration-500 pointer-events-none"
      />

      {/* Background Parallax Gradient Orbs */}
      <motion.div
        style={{ y: isDesktop ? yParallax : 0 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-emerald-500/20 blur-[120px] rounded-full pointer-events-none animate-pulse-subtle"
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 md:right-24 w-40 h-40 border border-blue-500/20 dark:border-blue-400/20 rounded-3xl pointer-events-none hidden sm:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-24 left-10 md:left-20 w-56 h-56 border border-emerald-500/20 dark:border-emerald-400/20 rounded-full pointer-events-none hidden sm:block"
      />

      {/* Floating Decorative Badges */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-36 left-[8%] hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 shadow-xl shadow-blue-950/5 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md"
      >
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
          ₹
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Payout Sent</p>
          <p className="text-sm font-bold text-slate-900 dark:text-slate-100">₹850 Instant Transfer</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 right-[8%] hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 shadow-xl shadow-blue-950/5 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md"
      >
        <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Sync Speed</p>
          <p className="text-sm font-bold text-slate-900 dark:text-slate-100">&lt; 1 sec Realtime</p>
        </div>
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border border-blue-500/20 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-spin-slow" />
            Designed for 100,000+ Indian Gig Workers
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6"
        >
          Know your money.{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 dark:from-blue-400 dark:via-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent">
            Every rupee, every day.
          </span>
        </motion.h1>

        <motion.div
          variants={letterContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal min-h-[4rem]"
        >
          {subheadingText.split('').map((char, index) => (
            <motion.span key={index} variants={letterChildVariants} className="inline-block whitespace-pre">
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 30px -10px rgba(37, 99, 235, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold rounded-2xl text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Tracking Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.a
            href="#dashboard"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-7 py-4 text-base font-semibold rounded-2xl text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 shadow-sm backdrop-blur-sm flex items-center justify-center gap-2"
          >
            View Live Demo
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-14 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Bank-grade 256-bit Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-500" />
            <span>Instant Daily Withdrawals</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-500" />
            <span>4.9/5 Rating by Gig Workers</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
