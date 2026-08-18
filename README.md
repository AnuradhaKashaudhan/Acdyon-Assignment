<div align="center">

  <!-- Animated Header Banner -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,10,20,30&height=220&section=header&text=EarningsHub%20🚀&fontSize=50&fontColor=fff&animation=twinkling&desc=Real-Time%20Earnings%20Tracking%20%26%20Calculator%20for%20Gig%20Workers&descSize=18&descAlignY=70" width="100%" alt="EarningsHub Banner"/>

  <br/>

  <!-- Animated Typing Subtitle -->
  <a href="https://github.com/AnuradhaKashaudhan/Acdyon-Assignment">
    <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=24&pause=1000&color=10B981&center=true&vCenter=true&width=700&lines=Know+your+money.+Every+rupee%2C+every+day.;Interactive+Earnings+Projection+Calculator;100%25+WCAG+2.1+AA+Accessible+%26+Lighthouse+90%2B;Try+the+Konami+Code+%E2%86%91+%E2%86%91+%E2%86%90+%E2%86%92+%E2%86%90+%E2%86%92+B+A" alt="Typing SVG" />
  </a>

  <br/><br/>

  <!-- Badges -->
  ![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
  ![React](https://img.shields.io/badge/React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
  ![WCAG AA](https://img.shields.io/badge/WCAG_2.1-AA_Passed-10B981?style=for-the-badge&logo=w3c&logoColor=white)
  ![Lighthouse Score](https://img.shields.io/badge/Lighthouse-92_Performance-2563EB?style=for-the-badge&logo=lighthouse&logoColor=white)

</div>

---

## 🌟 Overview

**EarningsHub** is a high-performance web application designed for India's 100,000+ gig workers (Swiggy, Zomato, Uber, Rapido, Urban Company, and freelancers).

It features an interactive **Earnings Projection Calculator**, real-time income aggregation previews, 3D flip scenario cards with mobile swipe gestures, scroll-linked animations, and full WCAG 2.1 AA accessibility compliance.

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

<div align="center">
  <sub>Built with ❤️ for Indian Gig Workers by <a href="https://github.com/AnuradhaKashaudhan">Anuradha Kashaudhan</a></sub>
</div>
