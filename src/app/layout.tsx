import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EasterEgg from '@/components/EasterEgg';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import SkipLink from '@/components/SkipLink';

// Zero-CLS, self-hosted Next.js Google Font Optimization (display: swap)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'EarningsHub — Real-Time Earnings Tracking for Gig Workers',
  description:
    'Track your earnings across delivery, ride-share, and freelance platforms in real time. Know your money. Every rupee, every day.',
  keywords: [
    'EarningsHub',
    'Gig Workers',
    'Swiggy',
    'Zomato',
    'Uber',
    'Rapido',
    'Real-time earnings',
    'Income tracker',
    'India gig economy',
  ],
  authors: [{ name: 'EarningsHub Team' }],
  openGraph: {
    title: 'EarningsHub — Know your money. Every rupee, every day.',
    description:
      'Real-time earnings tracking platform for gig workers (delivery, freelance, ride-share). Instant payouts with zero hidden fees.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} antialiased selection:bg-blue-500 selection:text-white`}>
        <ThemeProvider>
          <SkipLink />
          <ScrollProgressBar />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <EasterEgg />
        </ThemeProvider>
      </body>
    </html>
  );
}
