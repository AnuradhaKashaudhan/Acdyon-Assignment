'use client';

import { useEffect, useState, useCallback } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function useKonamiCode() {
  const [isTriggered, setIsTriggered] = useState(false);
  const [inputSequence, setInputSequence] = useState<string[]>([]);

  const resetSequence = useCallback(() => {
    setIsTriggered(false);
    setInputSequence([]);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      const updatedSequence = [...inputSequence, key];

      if (updatedSequence.length > KONAMI_CODE.length) {
        updatedSequence.shift();
      }

      setInputSequence(updatedSequence);

      const isKonamiMatch = KONAMI_CODE.every(
        (codeKey, index) => updatedSequence[index] === codeKey
      );

      if (isKonamiMatch && updatedSequence.length === KONAMI_CODE.length) {
        setIsTriggered(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputSequence]);

  return { isTriggered, resetSequence };
}
