'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Wallet, Calendar, ArrowUpRight, CheckCircle2, DollarSign, Activity, Zap } from 'lucide-react';

function AnimatedCounter({ from = 0, to, duration = 2, prefix = '₹', formatter }: { from?: number; to: number; duration?: number; prefix?: string; formatter?: (v: number) => string }) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: 'easeOut',
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  const formattedValue = formatter ? formatter(count) : count.toLocaleString('en-IN');

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formattedValue}
    </span>
  );
}

export default function DashboardMockup() {
  const miniStats = [
    {
      title: 'Avg. Per Trip / Order',
      value: '₹142.50',
      change: '+12.4%',
      isPositive: true,
      icon: DollarSign,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Active Shift Hours',
      value: '6 hrs 15 mins',
      change: 'Optimal',
      isPositive: true,
      icon: Activity,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Peak Surge Boost',
      value: '₹180 Extra',
      change: '+18%',
      isPositive: true,
      icon: Zap,
      color: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section id="dashboard" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          Real-Time Earnings Dashboard
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
          Connect all your gig accounts in seconds. See aggregated daily totals, upcoming payouts, and shift analytics in one sleek view.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Main Dashboard Mockup Card (Slides in from left: x -100 -> 0, 20% visible, 600ms ease-out) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ y: -10 }}
          className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-blue-900/10 dark:shadow-slate-950/50 transition-all duration-300 relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-3xl blur opacity-0 group-hover:opacity-25 transition duration-500 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 flex items-center justify-center font-bold">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Live Earnings Feed</h3>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Synced with Swiggy & Uber
                </span>
              </div>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
              Live Mode
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-slate-800 dark:to-slate-800/60 p-5 rounded-2xl border border-blue-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                Today&apos;s Earnings
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
                <AnimatedCounter to={850} duration={2} />
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <ArrowUpRight className="w-4 h-4" />
                <span>+₹180 vs Yesterday</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-slate-800 dark:to-slate-800/60 p-5 rounded-2xl border border-emerald-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                This Month
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
                <AnimatedCounter to={22500} duration={2} />
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <ArrowUpRight className="w-4 h-4" />
                <span>+18.5% monthly target</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 bg-slate-950 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Next Auto Payout</p>
                <p className="text-base font-bold text-white mt-0.5">Tomorrow, 2:30 PM</p>
              </div>
            </div>
            <button className="px-4 py-2 text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-xl transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Instant Transfer Ready
            </button>
          </div>
        </motion.div>

        {/* Right Side: Mini Stat Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {miniStats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-lg shadow-slate-900/5 hover:shadow-xl dark:hover:shadow-slate-950 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${stat.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.title}</p>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">{stat.value}</h4>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {stat.change}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
