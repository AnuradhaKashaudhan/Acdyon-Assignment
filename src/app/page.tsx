import Hero from '@/components/Hero';
import DashboardMockup from '@/components/DashboardMockup';
import EarningsChart from '@/components/EarningsChart';
import FeaturesGrid from '@/components/FeaturesGrid';
import EarningScenarios from '@/components/EarningScenarios';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. EARNINGS DASHBOARD MOCKUP SECTION */}
      <DashboardMockup />

      {/* 3. ANIMATED EARNINGS CHART SECTION */}
      <EarningsChart />

      {/* 4. FEATURES GRID SECTION */}
      <FeaturesGrid />

      {/* 5. EARNINGS VISUALIZATION SECTION (5 Scenario Flip Cards) */}
      <EarningScenarios />

      {/* 6. CTA SECTION */}
      <CTASection />
    </main>
  );
}
