# EarningsHub 🚀
### Real-Time Earnings Tracking & Projection Calculator for India's Gig Economy

[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG_2.1-AA_Passed-10B981?style=for-the-badge&logo=w3c&logoColor=white)](ACCESSIBILITY_CHECKLIST.md)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-92_Performance-2563EB?style=for-the-badge&logo=lighthouse&logoColor=white)](PERFORMANCE_GUIDE.md)

---

## 🌟 Overview

**EarningsHub** is a state-of-the-art web application tailored for India's 100,000+ gig economy workforce (Swiggy, Zomato, Uber, Rapido, Urban Company, and freelancers).

It features an **Interactive Earnings Projection Calculator**, real-time income aggregation previews, 3D flip scenario cards with mobile swipe gestures, scroll-linked animations, and full WCAG 2.1 AA accessibility compliance.

---

## ✨ Key Capabilities & Highlights

- 📊 **Interactive Projection Calculator**: Calculate daily, weekly, monthly, and yearly income with platform presets, range sliders, input validation, and `localStorage` persistence.
- 📱 **Mobile Touch Swipe Gestures**: Swipe left/right on 3D scenario cards (`>50px` threshold) with snap-back physics and haptic vibration feedback.
- ⚡ **Scroll-Triggered Animated Counters**: Number count animation (`0` → `10K+`) triggering when scrolled into view.
- 🎮 **Secret Konami Code Easter Egg**: Enter `↑ ↑ ↓ ↓ ← → ← → B A` to trigger a full-screen celebratory modal.
- ♿ **100% WCAG 2.1 AA Compliant**: Bypass navigation skip links, ARIA landmarks, high-contrast focus rings (`*:focus-visible`), and screen-reader data summary tables.
- 🚀 **Lighthouse 90+ Score**: Zero-CLS font preloading via `next/font/google`, SWC minification, and GPU-optimized animation profiling.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18.0.0 or higher
- npm v9.0.0 or higher

### Setup & Local Execution

1. **Clone repository**:
   ```bash
   git clone https://github.com/AnuradhaKashaudhan/Acdyon-Assignment.git
   cd Acdyon-Assignment
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open in browser**:
   Navigate to `http://localhost:3000`.

---

## 🛠️ Project Structure

```
ACDYON/
├── src/
│   ├── app/
│   │   ├── globals.css          # Core CSS tokens & accessibility focus rings
│   │   ├── layout.tsx           # Root layout with font loader & skip link
│   │   └── page.tsx             # Landing page assembly
│   ├── components/
│   │   ├── Navbar.tsx           # Header & theme toggle
│   │   ├── Hero.tsx             # Left-aligned hero with gold accents
│   │   ├── DashboardMockup.tsx  # Live stats feed
│   │   ├── EarningsChart.tsx    # 30-day analytics chart & table
│   │   ├── FeaturesGrid.tsx     # Rich distinct color cards
│   │   ├── EarningsCalculator.tsx # Interactive 50/50 calculator
│   │   ├── EarningScenarios.tsx # 3D swipe flip cards
│   │   ├── CTASection.tsx       # Validated email waitlist form
│   │   ├── EasterEgg.tsx        # Konami code modal
│   │   ├── AnimatedCounter.tsx  # Scroll counter component
│   │   ├── ScrollProgressBar.tsx# Top scroll progress bar
│   │   ├── SkipLink.tsx         # Bypass skip navigation link
│   │   └── Footer.tsx           # Footer landmark
│   ├── context/
│   │   └── ThemeContext.tsx     # Theme state provider
│   └── hooks/
│       ├── useEarningsCalculator.ts # Calculator math & localStorage hook
│       ├── useCounterAnimation.ts   # Scroll counter animation hook
│       └── useKonamiCode.ts         # Secret key sequence hook
├── DECISIONS.md                 # Architecture & design decisions
├── SUBMISSION_SUMMARY.md        # Executive submission overview
├── PERFORMANCE_GUIDE.md         # Lighthouse testing guide
├── ACCESSIBILITY_CHECKLIST.md   # WCAG 2.1 AA audit guide
└── VERIFICATION_REPORT.txt      # QA test execution report
```

---

Built with ❤️ for Indian Gig Workers by [Anuradha Kashaudhan](https://github.com/AnuradhaKashaudhan)
