'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Laptop, Car, Wrench, Video, Sparkles, CheckCircle2 } from 'lucide-react';

export default function EarningScenarios() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleMouseEnter = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  // Distance-based Swipe Gesture Handler (>50px threshold)
  const handleDragEnd = (index: number, offsetX: number) => {
    if (offsetX < -50) {
      // Swipe Left -> Flip to Back
      setFlippedCards((prev) => ({ ...prev, [index]: true }));
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(30);
      }
    } else if (offsetX > 50) {
      // Swipe Right -> Flip to Front
      setFlippedCards((prev) => ({ ...prev, [index]: false }));
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(30);
      }
    }
  };

  const scenarios = [
    {
      role: 'Delivery Driver',
      income: '₹18,000/month',
      hours: '⏱ 6 hours/day',
      icon: Truck,
      color: 'from-orange-500 to-amber-600',
      badge: 'Swiggy / Zomato',
      predictability: 94,
      bars: [50, 75, 40, 90, 65],
      backTitle: 'Delivery Shift Insights',
      stats: [
        { label: 'Top Platforms', val: 'Zomato, Swiggy, Dunzo' },
        { label: 'Peak Shift', val: '7 PM - 11 PM (Dinner Surge)' },
        { label: 'Monthly Fuel Savings', val: '₹1,800 via route optimization' },
      ],
    },
    {
      role: 'Freelancer',
      income: '₹25,000/month',
      hours: '📱 Flexible hours',
      icon: Laptop,
      color: 'from-blue-500 to-cyan-600',
      badge: 'Upwork / Fiverr',
      predictability: 98,
      bars: [60, 85, 95, 70, 80],
      backTitle: 'Freelance Growth Metrics',
      stats: [
        { label: 'Top Services', val: 'UI Design, Copywriting' },
        { label: 'Avg Project Payout', val: '₹4,500 / milestone' },
        { label: 'Client Retention Rate', val: '84% recurring' },
      ],
    },
    {
      role: 'Ride-Share Driver',
      income: '₹22,000/month',
      hours: '🚗 Peak hours',
      icon: Car,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Uber / Rapido',
      predictability: 91,
      bars: [45, 60, 80, 50, 70],
      backTitle: 'Ride-Share Breakdown',
      stats: [
        { label: 'High Demand Days', val: 'Fri - Sun (Airport & Office)' },
        { label: 'Surge Multiplier', val: 'Up to 2.4x extra' },
        { label: 'Daily Tip Average', val: '₹120 / day' },
      ],
    },
    {
      role: 'Handyman / Tech',
      income: '₹20,000/month',
      hours: '🔧 Project-based',
      icon: Wrench,
      color: 'from-purple-500 to-indigo-600',
      badge: 'Urban Company',
      predictability: 88,
      bars: [55, 70, 45, 65, 85],
      backTitle: 'Home Services Stats',
      stats: [
        { label: 'Top Category', val: 'AC Repair & Electrical' },
        { label: 'Repeat Customers', val: '68% month-over-month' },
        { label: 'Material Reimbursements', val: '100% Instant' },
      ],
    },
    {
      role: 'Content Creator',
      income: '₹30,000/month',
      hours: '🎬 Ad revenue',
      icon: Video,
      color: 'from-rose-500 to-pink-600',
      badge: 'YouTube / Reels',
      predictability: 96,
      bars: [70, 50, 90, 60, 100],
      backTitle: 'Monetization Stats',
      stats: [
        { label: 'Revenue Sources', val: 'AdSense, Brand Deals, Tips' },
        { label: 'Payout Frequency', val: 'Instant per deal close' },
        { label: 'Taxes Deducted (TDS)', val: 'Tracked & Tax-optimized' },
      ],
    },
  ];

  return (
    <section id="scenarios" aria-label="Earning Scenarios by Role" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4"
        >
          Tailored For Every Gig Economy Path
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-300 text-base sm:text-lg"
        >
          Whether you deliver food, drive, code, or create content — see how much earnings potential you can unlock with EarningsHub.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {scenarios.map((item, i) => {
          const isFlipped = !!flippedCards[i];

          return (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="h-[340px] w-full relative cursor-pointer select-none touch-pan-y"
              onClick={() => toggleFlip(i)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              tabIndex={0}
              role="button"
              aria-label={`${item.role} details card.`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleFlip(i);
                }
              }}
            >
              {/* Touch & Drag Swipe Gesture Container */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                whileDrag={{ scale: 0.98, opacity: 0.9 }}
                onDragEnd={(_, info) => handleDragEnd(i, info.offset.x)}
                className="w-full h-full relative"
              >
                {/* FRONT SIDE */}
                <motion.div
                  initial={false}
                  animate={{
                    rotateY: isFlipped ? 180 : 0,
                    opacity: isFlipped ? 0 : 1,
                  }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className={`absolute inset-0 w-full h-full rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col justify-between ${
                    isFlipped ? 'pointer-events-none' : 'pointer-events-auto'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md`}
                      >
                        <item.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.role}</h3>
                    <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mb-2">
                      {item.income}
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-xl">
                      {item.hours}
                    </div>
                  </div>

                  {/* Bottom Animated Performance Section */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="mb-3">
                      <div className="flex justify-between items-center text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                        <span>Predictability Score</span>
                        <span className="font-bold text-slate-900 dark:text-slate-100">{item.predictability}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.predictability}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Live Sync</span>
                      </div>

                      {/* Mini Bar Chart Animations */}
                      <div className="flex items-end gap-1 h-5">
                        {item.bars.map((height, bIdx) => (
                          <motion.div
                            key={bIdx}
                            animate={{ scaleY: [0.6, 1.1, 0.6] }}
                            transition={{
                              duration: 1.5 + bIdx * 0.2,
                              repeat: Infinity,
                              repeatType: 'reverse',
                              ease: 'easeInOut',
                            }}
                            className={`w-1 rounded-full bg-gradient-to-t ${item.color}`}
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* BACK SIDE */}
                <motion.div
                  initial={false}
                  animate={{
                    rotateY: isFlipped ? 0 : -180,
                    opacity: isFlipped ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className={`absolute inset-0 w-full h-full rounded-3xl p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white border border-blue-500/40 shadow-2xl flex flex-col justify-between ${
                    isFlipped ? 'pointer-events-auto' : 'pointer-events-none'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-3 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                      {item.backTitle}
                    </div>

                    <div className="space-y-3">
                      {item.stats.map((st, idx) => (
                        <div key={idx} className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                          <p className="text-[10px] text-slate-400 font-medium">{st.label}</p>
                          <p className="text-xs font-bold text-slate-100 mt-0.5">{st.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-medium">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      Verified Potential
                    </span>
                    <span className="text-[10px] text-slate-400">EarningsHub AI</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
