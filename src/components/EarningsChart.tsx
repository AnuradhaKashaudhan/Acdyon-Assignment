'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Info } from 'lucide-react';

export default function EarningsChart() {
  const chartData: number[] = [
    650, 720, 890, 750, 1050, 920, 1100, 680, 810, 950, 1200, 880, 750, 920, 1050, 760, 890, 1150, 980, 850,
    1100, 920, 1050, 780, 920, 1150, 1000, 860, 950, 1100,
  ];

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const maxVal = 1200;
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  return (
    <section id="chart" aria-label="30-Day Growth Analytics" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Screen Reader Only Table for Data Accessibility (WCAG 1.1.1 Non-Text Content) */}
      <div className="sr-only">
        <h3>30-Day Earnings Summary Table</h3>
        <table>
          <caption>Daily income recordings over 30 days</caption>
          <thead>
            <tr>
              <th scope="col">Day Number</th>
              <th scope="col">Day of Week</th>
              <th scope="col">Earnings (INR)</th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((val, idx) => (
              <tr key={idx}>
                <td>Day {idx + 1}</td>
                <td>{daysOfWeek[idx % 7]}</td>
                <td>₹{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 mb-4 border border-emerald-500/20"
        >
          <TrendingUp className="w-4 h-4" aria-hidden="true" />
          30-Day Growth Analytics
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4"
        >
          See Your Earnings Grow
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-300 text-base sm:text-lg"
        >
          Track daily earnings surges. Higher payouts on weekends and peak evening hours are automatically flagged to help you plan your shifts.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-[900px] mx-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-blue-900/5 relative"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6 mb-8">
          <div>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Total 30-Day Income
            </span>
            <div className="flex items-baseline gap-3 mt-1">
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">₹28,340</h3>
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md">
                +24.2% vs last month
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-blue-600" aria-hidden="true" />
              <span>Weekday</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>Weekend Peak</span>
            </div>
          </div>
        </div>

        <div className="relative h-64 sm:h-80 flex items-end justify-between gap-1 sm:gap-2 pt-8 pb-6 px-2 border-b border-slate-200 dark:border-slate-800" aria-hidden="true">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 dark:opacity-10 py-6">
            <div className="border-b border-slate-500 w-full flex justify-end pr-2 text-[10px] text-slate-400">₹1,200</div>
            <div className="border-b border-slate-500 w-full flex justify-end pr-2 text-[10px] text-slate-400">₹900</div>
            <div className="border-b border-slate-500 w-full flex justify-end pr-2 text-[10px] text-slate-400">₹600</div>
            <div className="border-b border-slate-500 w-full flex justify-end pr-2 text-[10px] text-slate-400">₹300</div>
          </div>

          {chartData.map((val: number, index: number) => {
            const heightPercent = (val / maxVal) * 100;
            const dayName = daysOfWeek[index % 7];
            const isWeekend = dayName === 'Sat' || dayName === 'Sun';
            const isPeak = val >= 1100;
            const isHovered = hoveredBar === index;

            return (
              <div
                key={index}
                className="relative flex-1 h-full flex flex-col justify-end items-center group cursor-pointer"
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute -top-14 z-30 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap border border-slate-700 flex flex-col items-center pointer-events-none"
                  >
                    <span className="text-[10px] text-slate-400 font-medium">Day {index + 1} ({dayName})</span>
                    <span className="text-emerald-400 font-extrabold text-sm">₹{val.toLocaleString('en-IN')}</span>
                    <div className="w-2 h-2 bg-slate-900 rotate-45 -bottom-1 absolute border-r border-b border-slate-700" />
                  </motion.div>
                )}

                <motion.div
                  initial={{ height: '0%' }}
                  whileInView={{ height: `${heightPercent}%` }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.8, delay: index * 0.03, ease: 'easeOut' }}
                  className={`w-full rounded-t-sm sm:rounded-t-md transition-all duration-300 ${
                    isHovered
                      ? 'scale-x-125 shadow-lg shadow-blue-500/40 z-20 brightness-110'
                      : isPeak
                      ? 'bg-gradient-to-t from-emerald-600 to-emerald-400'
                      : isWeekend
                      ? 'bg-gradient-to-t from-emerald-500/80 to-teal-400'
                      : 'bg-gradient-to-t from-blue-600 to-indigo-500'
                  }`}
                />

                <div className="mt-2 text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-medium truncate max-w-full text-center">
                  {index % 5 === 0 ? `D${index + 1}` : ''}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-500" aria-hidden="true" />
            <span>Highest earnings recorded on Day 11 (₹1,200 - Sunday Surge)</span>
          </div>
          <span className="font-semibold text-slate-700 dark:text-slate-300">Updated today at 9:00 AM</span>
        </div>
      </motion.div>
    </section>
  );
}
