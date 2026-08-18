'use client';

import { useState, useEffect, useCallback } from 'react';

export const PLATFORM_DEFAULTS = {
  delivery: {
    name: 'Swiggy/Zomato (Delivery Driver)',
    rate: 142,
    hours: 6,
    days: 6,
    unit: 'order',
    avgMonthly: 22150,
    benchmarkLabel: 'delivery driver average',
  },
  freelancer: {
    name: 'Upwork/Fiverr (Freelancer)',
    rate: 500,
    hours: 5,
    days: 5,
    unit: 'project',
    avgMonthly: 25000,
    benchmarkLabel: 'freelance average',
  },
  rideshare: {
    name: 'Uber/Rapido (Ride-Share)',
    rate: 180,
    hours: 6,
    days: 6,
    unit: 'ride',
    avgMonthly: 23500,
    benchmarkLabel: 'ride-share average',
  },
  handyman: {
    name: 'Urban Company (Handyman/Tech)',
    rate: 800,
    hours: 4,
    days: 5,
    unit: 'job',
    avgMonthly: 24000,
    benchmarkLabel: 'home service average',
  },
  creator: {
    name: 'YouTube/Reels (Content Creator)',
    rate: 1200,
    hours: 3,
    days: 5,
    unit: 'deal',
    avgMonthly: 30000,
    benchmarkLabel: 'creator average',
  },
  custom: {
    name: 'Custom (Manual Entry)',
    rate: 200,
    hours: 6,
    days: 5,
    unit: 'hour',
    avgMonthly: 22000,
    benchmarkLabel: 'gig worker average',
  },
} as const;

export type PlatformKey = keyof typeof PLATFORM_DEFAULTS;

const STORAGE_KEY = 'earnings_calculator_v1';

export function useEarningsCalculator() {
  const [platform, setPlatform] = useState<PlatformKey>('delivery');
  const [hoursPerDay, setHoursPerDay] = useState<number>(6);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(6);
  const [hourlyRate, setHourlyRate] = useState<number>(142);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved state from localStorage on initial mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.platform && PLATFORM_DEFAULTS[parsed.platform as PlatformKey]) {
          setPlatform(parsed.platform);
        }
        if (typeof parsed.hoursPerDay === 'number') setHoursPerDay(parsed.hoursPerDay);
        if (typeof parsed.daysPerWeek === 'number') setDaysPerWeek(parsed.daysPerWeek);
        if (typeof parsed.hourlyRate === 'number') setHourlyRate(parsed.hourlyRate);
      }
    } catch {
      // Ignore localStorage errors
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save state to localStorage whenever inputs change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ platform, hoursPerDay, daysPerWeek, hourlyRate })
      );
    } catch {
      // Ignore storage write errors
    }
  }, [platform, hoursPerDay, daysPerWeek, hourlyRate, isLoaded]);

  // Handle platform change and apply platform preset values
  const handlePlatformChange = useCallback((newPlatform: PlatformKey) => {
    setPlatform(newPlatform);
    const preset = PLATFORM_DEFAULTS[newPlatform];
    setHoursPerDay(preset.hours);
    setDaysPerWeek(preset.days);
    setHourlyRate(preset.rate);
  }, []);

  // Reset calculator to default delivery preset
  const resetCalculator = useCallback(() => {
    handlePlatformChange('delivery');
  }, [handlePlatformChange]);

  // Calculation logic:
  // dailyEarnings = hoursPerDay * hourlyRate
  // weeklyEarnings = dailyEarnings * daysPerWeek
  // monthlyEarnings = weeklyEarnings * 4.33
  // yearlyEarnings = monthlyEarnings * 12
  const dailyEarnings = Math.round(hoursPerDay * hourlyRate);
  const weeklyEarnings = Math.round(dailyEarnings * daysPerWeek);
  const monthlyEarnings = Math.round(weeklyEarnings * 4.33);
  const yearlyEarnings = Math.round(monthlyEarnings * 12);

  const preset = PLATFORM_DEFAULTS[platform];
  const platformAverage = preset.avgMonthly;
  const percentageDiff = Math.round(
    ((monthlyEarnings - platformAverage) / platformAverage) * 100
  );

  return {
    platform,
    hoursPerDay,
    daysPerWeek,
    hourlyRate,
    dailyEarnings,
    weeklyEarnings,
    monthlyEarnings,
    yearlyEarnings,
    percentageDiff,
    benchmarkLabel: preset.benchmarkLabel,
    unit: preset.unit,
    setHoursPerDay,
    setDaysPerWeek,
    setHourlyRate,
    handlePlatformChange,
    resetCalculator,
  };
}
