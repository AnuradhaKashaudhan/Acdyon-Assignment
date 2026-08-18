'use client';

import { useState, useEffect, RefObject } from 'react';
import { useInView, animate } from 'framer-motion';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  format?: 'number' | 'k';
}

/**
 * Reusable custom hook for scroll-triggered counter animations using Framer Motion animate.
 * Triggers only once when the targetRef enters the viewport.
 */
export function useCounterAnimation(
  targetRef: RefObject<HTMLElement | null>,
  { start = 0, end, duration = 2, format = 'k' }: UseCounterOptions
) {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const isInView = useInView(targetRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(start, end, {
        duration,
        ease: 'easeOut',
        onUpdate(value) {
          const current = Math.floor(value);
          if (format === 'k') {
            if (current >= 1000) {
              const formattedK = Math.floor(current / 1000);
              setDisplayValue(`${formattedK}K+`);
            } else {
              setDisplayValue(`${current}`);
            }
          } else {
            setDisplayValue(current.toLocaleString('en-IN'));
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, start, end, duration, format]);

  return displayValue;
}
