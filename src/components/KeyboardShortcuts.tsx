'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HelpCircle } from 'lucide-react';

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);

  // Listen for "?" key press to open/close modal
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      if (e.key === '?' || e.key === '/') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Also close on Escape
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      {/* Help Button in Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 relative overflow-hidden group min-w-[44px] min-h-[44px] flex items-center justify-center"
        title="Keyboard shortcuts (Press ?)"
        aria-label="Show keyboard shortcuts"
      >
        <HelpCircle className="w-5 h-5 text-slate-700 dark:text-slate-200" />
      </button>

      {/* Modal Backdrop + Content */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div
                className="bg-white dark:bg-slate-900 rounded-2xl 
                            shadow-2xl border border-gray-200 dark:border-slate-700
                            max-w-md w-full max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div
                  className="flex items-center justify-between p-6 
                              border-b border-gray-200 dark:border-slate-700
                              sticky top-0 bg-white dark:bg-slate-900 z-10"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    ⌨️ Keyboard Shortcuts
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-slate-800 
                             rounded-lg transition-colors text-gray-700 dark:text-gray-300"
                    aria-label="Close keyboard shortcuts"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Shortcuts List */}
                <div className="p-6 space-y-4">
                  {/* Shortcut 1: Question Mark */}
                  <div className="flex items-start gap-4">
                    <kbd
                      className="px-3 py-2 bg-gray-100 dark:bg-slate-800 
                                   border border-gray-300 dark:border-slate-600
                                   rounded-lg font-mono text-sm font-semibold
                                   text-gray-900 dark:text-white
                                   whitespace-nowrap mt-1"
                    >
                      ?
                    </kbd>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Show this menu
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Press ? anytime to open keyboard shortcuts
                      </p>
                    </div>
                  </div>

                  {/* Shortcut 2: Tab */}
                  <div className="flex items-start gap-4">
                    <kbd
                      className="px-3 py-2 bg-gray-100 dark:bg-slate-800 
                                   border border-gray-300 dark:border-slate-600
                                   rounded-lg font-mono text-sm font-semibold
                                   text-gray-900 dark:text-white
                                   whitespace-nowrap mt-1"
                    >
                      Tab
                    </kbd>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Navigate sections
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Keyboard navigation through entire page
                      </p>
                    </div>
                  </div>

                  {/* EASTER EGG - Separated with visual divider */}
                  <div className="pt-4 border-t-2 border-amber-300 dark:border-amber-600">
                    <div className="flex items-start gap-4">
                      <kbd
                        className="px-2.5 py-2 bg-amber-100 dark:bg-amber-900/30
                                     border-2 border-amber-400 dark:border-amber-600
                                     rounded-lg font-mono text-xs font-bold
                                     text-amber-900 dark:text-amber-300
                                     whitespace-nowrap mt-1"
                      >
                        ↑ ↑ ↓ ↓ ← → ← → B A
                      </kbd>
                      <div>
                        <p
                          className="font-bold text-amber-600 dark:text-amber-400 
                                     text-base sm:text-lg flex items-center gap-2"
                        >
                          🎉 Secret Easter Egg!
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Press the arrow keys in order to unlock a hidden surprise
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div
                  className="px-6 py-4 border-t border-gray-200 dark:border-slate-700
                              bg-gray-50 dark:bg-slate-800/50 text-center"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Press Escape to close this menu
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
