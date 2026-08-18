'use client';

import React, { useRef } from 'react';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  format?: 'number' | 'k';
  className?: string;
}

/**
 * Renders an inline scroll-triggered animated number counter.
 * Blends naturally into headers with high-contrast accent text styling.
 */
export default function AnimatedCounter({
  end,
  duration = 2,
  format = 'k',
  className = '',
}: AnimatedCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const countText = useCounterAnimation(containerRef, {
    start: 0,
    end,
    duration,
    format,
  });

  return (
    <span
      ref={containerRef}
      className={`tabular-nums font-bold text-amber-300 dark:text-emerald-400 ${className}`}
    >
      {countText}
    </span>
  );
}
