import Hero from '@/components/Hero';
import DashboardMockup from '@/components/DashboardMockup';
import EarningsChart from '@/components/EarningsChart';
import FeaturesGrid from '@/components/FeaturesGrid';
import EarningsCalculator from '@/components/EarningsCalculator';
import EarningScenarios from '@/components/EarningScenarios';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <DashboardMockup />
      <EarningsChart />
      <FeaturesGrid />
      <EarningsCalculator />
      <EarningScenarios />
      <CTASection />
    </>
  );
}
