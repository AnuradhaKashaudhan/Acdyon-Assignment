'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKonamiCode } from '@/hooks/useKonamiCode';

export default function EasterEgg() {
  const { isTriggered } = useKonamiCode();
  const [isOpen, setIsOpen] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (isTriggered) {
      setIsOpen(true);
      setFormattedDate(
        new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      );

      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isTriggered]);

  const handleExitComplete = () => {
    if (isTriggered && !isOpen) {
      window.location.reload();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isOpen && (
        <motion.div
          key="konami-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              opacity: { duration: 0.2 },
            }}
            className="flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-2xl max-w-md w-full"
          >
            <span className="text-6xl mb-4 select-none" role="img" aria-label="party popper">
              🎉
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
              You found the secret!
            </h2>
            <p className="text-lg font-medium text-emerald-400 mb-6">
              EarningsHub Pro Unlocked 🚀
            </p>
            {formattedDate && (
              <p className="text-xs text-neutral-400 font-mono">
                Easter egg found by user on {formattedDate}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
