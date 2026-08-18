'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CreditCard, LineChart, Percent } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: Zap,
      title: 'Real-Time Tracking',
      description: 'See money as it comes in',
      detail: 'Live synchronization with 15+ gig apps including Swiggy, Zomato, Uber, Rapido, and Urban Company.',
      iconBg: 'from-blue-500 to-indigo-600',
      badge: 'Live Sync',
    },
    {
      icon: CreditCard,
      title: 'Smart Payouts',
      description: 'Withdraw whenever you want',
      detail: 'No waiting for weekly payout cycles. Transfer earnings directly to your UPI or bank account 24/7.',
      iconBg: 'from-emerald-500 to-teal-600',
      badge: '24/7 UPI',
    },
    {
      icon: LineChart,
      title: 'Income Trends',
      description: "Predict next month's earnings",
      detail: 'AI-driven forecasting models calculate your projected income based on historical shifts and seasonal surges.',
      iconBg: 'from-indigo-500 to-purple-600',
      badge: 'AI Smart',
    },
    {
      icon: Percent,
      title: 'Zero Fees',
      description: "We don't take a cut",
      detail: '100% of your earnings stay yours. Free forever tier with zero commission or hidden transaction fees.',
      iconBg: 'from-amber-500 to-orange-600',
      badge: '100% Free',
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 block"
        >
          Built For Gig Professionals
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4"
        >
          Supercharge Your Earnings Workflow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-300 text-base sm:text-lg"
        >
          Everything you need to master your income streams, save on platform fees, and get paid instantly.
        </motion.p>
      </div>

      {/* Grid container: Cascade reveal with 100ms stagger, trigger at 30% visibility */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 30px -10px rgba(15, 23, 42, 0.15)',
            }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-md transition-all duration-300 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:bg-slate-50/50 dark:hover:bg-slate-850 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.iconBg} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {feature.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                {feature.description}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {feature.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
