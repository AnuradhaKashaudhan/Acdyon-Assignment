'use client';

import React from 'react';

/**
 * WCAG 2.4.1 Bypass Blocks (Level A)
 * Allows keyboard users to bypass header navigation and jump straight to main content.
 */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-400"
    >
      Skip to main content
    </a>
  );
}
