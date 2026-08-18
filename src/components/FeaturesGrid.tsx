'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles, ArrowUpRight, DollarSign } from 'lucide-react';

export default function FeaturesGrid() {
  const cards = [
    {
      title: 'Actually synced (24/7)',
      description: 'No manual entry required. We connect directly to your delivery, ride-share, and freelance accounts for zero-lag earnings feeds.',
      badge: 'Real-Time Pipeline',
      icon: Zap,
      bg: 'bg-blue-600 dark:bg-blue-700',
      accent: 'text-amber-300',
      stats: '15+ Platforms Supported',
    },
    {
      title: 'Get paid TODAY',
      description: 'Withdraw your daily payouts directly into your UPI account instantly. No waiting for weekly settlement cycles or minimum balances.',
      badge: 'Instant Payouts',
      icon: DollarSign,
      bg: 'bg-amber-600 dark:bg-orange-600',
      accent: 'text-amber-200',
      stats: '0% Platform Withdrawal Fee',
    },
    {
      title: 'Automatic Tax & Expense Log',
      description: 'Log fuel, mobile data, vehicle maintenance, and equipment depreciation automatically to maximize your end-of-year tax returns.',
      badge: 'Automated Deductions',
      icon: Shield,
      bg: 'bg-emerald-600 dark:bg-emerald-700',
      accent: 'text-emerald-200',
      stats: 'Save up to ₹14,000 in Taxes',
    },
    {
      title: 'Instant UPI Settlement',
      description: 'One-click bank transfer directly to GPay, PhonePe, or Paytm with end-to-end encryption and zero hidden transaction fees.',
      badge: 'Bank Grade Security',
      icon: Sparkles,
      bg: 'bg-purple-600 dark:bg-purple-700',
      accent: 'text-purple-200',
      stats: 'Instant 24/7 Transfers',
    },
  ];

  return (
    <section id="features" aria-label="Core Features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-500 dark:text-amber-400 mb-2 block"
        >
          Crafted For Indian Workers
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4"
        >
          Everything you need to master your money
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-300 text-base sm:text-lg"
        >
          Engineered from the ground up for maximum transparency, instant cash flow, and tax savings.
        </motion.p>
      </div>

      {/* DISTINCT UNIFIED VIBRANT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className={`relative rounded-3xl p-8 sm:p-10 ${card.bg} text-white shadow-2xl overflow-hidden border border-white/20 flex flex-col justify-between`}
          >
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" aria-hidden="true" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <card.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-black/20 text-white border border-white/20">
                  {card.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white leading-snug">
                {card.title}
              </h3>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {card.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold">
              <span className={card.accent}>{card.stats}</span>
              <ArrowUpRight className="w-5 h-5 text-white/80" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
