'use client';

import React from 'react';
import { TrendingUp, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white shadow-lg">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-extrabold text-white tracking-tight">EarningsHub</span>
            <p className="text-xs text-slate-500">Real-time earnings tracking for India&apos;s gig workers</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact Support
          </a>
        </div>

        {/* Copyright & Made with Love */}
        <div className="text-xs text-slate-500 text-center md:text-right">
          <p>© 2024 EarningsHub. All rights reserved.</p>
          <p className="mt-1 flex items-center justify-center md:justify-end gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for the gig economy.
          </p>
        </div>
      </div>
    </footer>
  );
}
