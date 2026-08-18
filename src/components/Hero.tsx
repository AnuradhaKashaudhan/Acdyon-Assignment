'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Texture: Subtle SVG Grain Noise & Background Gradient Meshes */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" aria-hidden="true" />
      
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-400/30 via-blue-500/20 to-purple-600/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT-ALIGNED ASYMMETRIC CONTENT BLOCK */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Asymmetric Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-bold tracking-wide shadow-sm"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Actually Synced 24/7 Across Swiggy, Uber & Zomato
            </motion.div>

            {/* SPLIT TYPOGRAPHY HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]"
            >
              Know your money. <br />
              <span className="text-emerald-500 dark:text-emerald-400 font-black">
                Every rupee, every day.
              </span>
            </motion.h1>

            {/* Human Intentional Micro-Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-xl"
            >
              Stop guessing your daily payouts. Track delivery shifts, ride-share tips, and freelance milestones in one unified, real-time dashboard. <strong className="text-amber-500 font-bold">Get paid TODAY</strong> with zero platform deduction.
            </motion.p>

            {/* PROMINENT HUGE CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-lg sm:text-xl shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Tracking Now</span>
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
              </a>

              <a
                href="#dashboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-800 font-bold text-base hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              >
                <TrendingUp className="w-5 h-5 text-amber-500" />
                View Demo Dashboard
              </a>
            </motion.div>

            {/* TRUST BADGES & GOLD ACCENT NUMBERS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800/80"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% Free for Gig Workers</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Avg Daily Shift: <strong className="text-amber-500 dark:text-amber-400 font-extrabold text-sm">₹850</strong></span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT-SIDE DASHBOARD MOCKUP & GEOMETRIC SHAPE */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-400/20 rounded-full blur-xl pointer-events-none" />
            <DashboardMockup />
          </div>

        </div>
      </div>

      {/* WAVY ORGANIC SECTION DIVIDER */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg className="relative block w-full h-12 text-white dark:text-slate-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,156.44,117.82,221,108.43Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
