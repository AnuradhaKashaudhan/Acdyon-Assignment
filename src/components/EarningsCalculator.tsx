'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RotateCcw, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';
import {
  useEarningsCalculator,
  PLATFORM_DEFAULTS,
  PlatformKey,
} from '@/hooks/useEarningsCalculator';

export default function EarningsCalculator() {
  const {
    platform,
    hoursPerDay,
    daysPerWeek,
    hourlyRate,
    dailyEarnings,
    weeklyEarnings,
    monthlyEarnings,
    yearlyEarnings,
    percentageDiff,
    benchmarkLabel,
    unit,
    setHoursPerDay,
    setDaysPerWeek,
    setHourlyRate,
    handlePlatformChange,
    resetCalculator,
  } = useEarningsCalculator();

  const isHoursInvalid = hoursPerDay < 1 || hoursPerDay > 24;
  const isDaysInvalid = daysPerWeek < 1 || daysPerWeek > 7;
  const isRateInvalid = hourlyRate < 50 || hourlyRate > 5000;
  const isAnyInvalid = isHoursInvalid || isDaysInvalid || isRateInvalid;

  return (
    <section
      id="calculator"
      aria-label="Interactive Earnings Calculator"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3 border border-blue-500/20 bg-blue-500/10"
        >
          <Calculator className="w-4 h-4" aria-hidden="true" />
          📊 Earnings Projection Tool
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4"
        >
          See Your Earning Potential
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-300 text-base sm:text-lg"
        >
          Calculate how much you could earn based on your work style and platform presets
        </motion.p>
      </div>

      {/* MAIN CONTAINER (50/50 DESKTOP SPLIT) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl"
      >
        {/* LEFT CARD: INPUT FORM */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-500" aria-hidden="true" />
              Work Parameters
            </h3>

            <button
              onClick={resetCalculator}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Reset Calculator Inputs"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              Reset Calculator
            </button>
          </div>

          {/* Input 1: Platform Dropdown */}
          <div className="space-y-2">
            <label
              htmlFor="calc-platform-select"
              className="block text-sm font-bold text-slate-700 dark:text-slate-300"
            >
              Select Your Platform
            </label>
            <select
              id="calc-platform-select"
              value={platform}
              onChange={(e) => handlePlatformChange(e.target.value as PlatformKey)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              {(Object.keys(PLATFORM_DEFAULTS) as PlatformKey[]).map((key) => (
                <option key={key} value={key}>
                  {PLATFORM_DEFAULTS[key].name}
                </option>
              ))}
            </select>
          </div>

          {/* Input 2: Hours Per Day */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm font-bold text-slate-700 dark:text-slate-300">
              <label htmlFor="calc-hours-input">Hours Per Day</label>
              <span className="text-blue-600 dark:text-blue-400 font-extrabold text-base">
                {hoursPerDay} hrs/day
              </span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={1}
                max={24}
                value={isHoursInvalid ? 6 : hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                aria-label="Hours per day slider"
              />
              <input
                id="calc-hours-input"
                type="number"
                min={1}
                max={24}
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className={`w-20 px-3 py-2 text-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isHoursInvalid ? 'border-red-500 text-red-500' : 'border-slate-200 dark:border-slate-700'
                }`}
                aria-describedby={isHoursInvalid ? 'calc-hours-error' : undefined}
              />
            </div>
            {isHoursInvalid && (
              <p id="calc-hours-error" className="text-xs text-red-500 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> Please enter hours between 1 and 24.
              </p>
            )}
          </div>

          {/* Input 3: Days Per Week */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm font-bold text-slate-700 dark:text-slate-300">
              <label htmlFor="calc-days-input">Days Per Week</label>
              <span className="text-blue-600 dark:text-blue-400 font-extrabold text-base">
                {daysPerWeek} days/week
              </span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={1}
                max={7}
                value={isDaysInvalid ? 6 : daysPerWeek}
                onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                aria-label="Days per week slider"
              />
              <input
                id="calc-days-input"
                type="number"
                min={1}
                max={7}
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                className={`w-20 px-3 py-2 text-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDaysInvalid ? 'border-red-500 text-red-500' : 'border-slate-200 dark:border-slate-700'
                }`}
                aria-describedby={isDaysInvalid ? 'calc-days-error' : undefined}
              />
            </div>
            {isDaysInvalid && (
              <p id="calc-days-error" className="text-xs text-red-500 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> Please enter days between 1 and 7.
              </p>
            )}
          </div>

          {/* Input 4: Hourly/Per-Order Rate */}
          <div className="space-y-2">
            <label
              htmlFor="calc-rate-input"
              className="block text-sm font-bold text-slate-700 dark:text-slate-300"
            >
              Rate per {unit} (₹)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-bold text-sm pointer-events-none">
                ₹
              </span>
              <input
                id="calc-rate-input"
                type="number"
                min={50}
                max={5000}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className={`w-full pl-8 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isRateInvalid ? 'border-red-500 text-red-500' : 'border-slate-200 dark:border-slate-700'
                }`}
                aria-describedby={isRateInvalid ? 'calc-rate-error' : undefined}
              />
            </div>
            {isRateInvalid && (
              <p id="calc-rate-error" className="text-xs text-red-500 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> Rate must be between ₹50 and ₹5,000.
              </p>
            )}
          </div>
        </div>

        {/* RIGHT CARD: RESULTS GRID */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Daily Earnings */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-lg flex flex-col justify-between"
            >
              <p className="text-xs font-bold text-emerald-100 uppercase tracking-wider">
                Daily Earnings
              </p>
              <div className="text-xl sm:text-2xl font-black mt-2">
                ₹{isAnyInvalid ? '—' : dailyEarnings.toLocaleString('en-IN')}
              </div>
              <p className="text-[10px] text-emerald-100/80 mt-1 font-medium">Per shift total</p>
            </motion.div>

            {/* Weekly Earnings */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 text-white shadow-lg flex flex-col justify-between"
            >
              <p className="text-xs font-bold text-blue-100 uppercase tracking-wider">
                Weekly Earnings
              </p>
              <div className="text-xl sm:text-2xl font-black mt-2">
                ₹{isAnyInvalid ? '—' : weeklyEarnings.toLocaleString('en-IN')}
              </div>
              <p className="text-[10px] text-blue-100/80 mt-1 font-medium">Per 7-day cycle</p>
            </motion.div>
          </div>

          {/* Monthly Earnings (Featured Large Card) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 text-white shadow-xl relative overflow-hidden border border-amber-400/30"
          >
            <div className="absolute top-3 right-4 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md text-[11px] font-extrabold text-amber-200 uppercase tracking-wider border border-white/20">
              Primary Goal
            </div>

            <p className="text-xs sm:text-sm font-bold text-amber-100 uppercase tracking-wider mb-1">
              Estimated Monthly Income
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${monthlyEarnings}-${platform}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-4xl sm:text-5xl font-black tracking-tight my-2 text-white"
              >
                ₹{isAnyInvalid ? '—' : monthlyEarnings.toLocaleString('en-IN')}
              </motion.div>
            </AnimatePresence>

            <p className="text-xs text-amber-100/90 font-medium">
              Calculated at 4.33 weeks per month
            </p>
          </motion.div>

          {/* Yearly Earnings */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-900 text-white shadow-lg flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-bold text-purple-200 uppercase tracking-wider">
                Yearly Potential
              </p>
              <div className="text-xl sm:text-2xl font-black mt-1">
                ₹{isAnyInvalid ? '—' : yearlyEarnings.toLocaleString('en-IN')}
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/10 text-purple-100 border border-white/10">
              12 Months
            </span>
          </motion.div>

          {/* Benchmark Comparison Card */}
          <div
            className={`p-4 rounded-2xl border flex items-center gap-3.5 transition-colors ${
              percentageDiff >= 0
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-800 dark:text-amber-300'
            }`}
          >
            <div
              className={`p-2.5 rounded-xl font-bold ${
                percentageDiff >= 0 ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
              }`}
            >
              <TrendingUp className="w-5 h-5" aria-hidden="true" />
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-wide">
                Platform Benchmark Insight
              </p>
              <p className="text-xs sm:text-sm font-bold mt-0.5">
                {isAnyInvalid
                  ? 'Please fix input errors to see benchmark insights.'
                  : `${percentageDiff >= 0 ? '+' : ''}${percentageDiff}% ${
                      percentageDiff >= 0 ? 'above' : 'below'
                    } ${benchmarkLabel}`}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
