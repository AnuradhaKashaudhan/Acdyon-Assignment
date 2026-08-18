<div align="center">

  <!-- Animated Header Banner -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,10,20,30&height=220&section=header&text=EarningsHub%20🚀&fontSize=50&fontColor=fff&animation=twinkling&desc=Real-Time%20Earnings%20Tracking%20for%20India's%20Gig%20Workers&descSize=20&descAlignY=70" width="100%" alt="EarningsHub Banner"/>

  <br/>

  <!-- Animated Typing Subtitle -->
  <a href="https://github.com/AnuradhaKashaudhan/Acdyon-Assignment">
    <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=24&pause=1000&color=10B981&center=true&vCenter=true&width=700&lines=Know+your+money.+Every+rupee%2C+every+day.;Built+for+Swiggy%2C+Zomato%2C+Uber%2C+Rapido+%26+Freelancers;100%25+WCAG+2.1+AA+Accessible+%26+Lighthouse+90%2B;Try+the+Konami+Code+%E2%86%91+%E2%86%91+%E2%86%90+%E2%86%92+%E2%86%90+%E2%86%92+B+A" alt="Typing SVG" />
  </a>

  <br/><br/>

  <!-- Badges -->
  ![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
  ![React](https://img.shields.io/badge/React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
  ![WCAG AA](https://img.shields.io/badge/WCAG_2.1-AA_Passed-10B981?style=for-the-badge&logo=w3c&logoColor=white)
  ![Lighthouse Score](https://img.shields.io/badge/Lighthouse-90%2B_Performance-2563EB?style=for-the-badge&logo=lighthouse&logoColor=white)

</div>

---

## 🌟 Overview

**EarningsHub** is a state-of-the-art, high-performance web application tailored for India's 100,000+ gig economy workforce (Swiggy, Zomato, Uber, Rapido, Urban Company, and freelancers).

It aggregates real-time daily earnings, provides automated expense tracking, visualizes 30-day income growth, and supports instant UPI payouts.

---

## ✨ Key Features

- ⚡ **Real-Time Income Aggregation**: Live sync simulation across 15+ gig worker platforms.
- 📈 **30-Day Growth Analytics**: Interactive SVG chart highlighting peak weekend earnings surges with custom tooltips.
- 🔄 **3D Interactive Flip Cards**: Career scenarios detailing role-specific potential (Delivery, Ride-Share, Freelance, Content Creation).
- 🌓 **Sleek Light & Dark Mode**: Persistent theme switching powered by Tailwind CSS & CSS custom variables.
- ✉️ **Real-Time Email Capture**: Form validation with dynamic border feedback, loading states, and toast notifications.
- 🎮 **Secret Konami Code Easter Egg**: Trigger full-screen celebratory modal by entering `↑ ↑ ↓ ↓ ← → ← → B A`.
- 📜 **Scroll-Linked Animations**: Desktop background parallax (`0.5x` speed), section scroll reveals, and top spring progress bar.

---

## 🎮 Easter Egg Trigger

Unlock **EarningsHub Pro** secret modal:

```
[↑] [↑] [↓] [↓] [←] [→] [←] [→] [B] [A]
```

- **Trigger**: Type the sequence on any keyable area (ignored inside input fields).
- **Features**: Full-screen backdrop blur modal, spring scale animation, timestamp, auto-close after 3 seconds, and silent page refresh.

---

## ♿ WCAG 2.1 AA Accessibility Standards

- ♿ **Skip Navigation Link**: `Tab` to activate **"Skip to main content"** bypass block.
- 🏷️ **Accessible Landmarks**: `<header>`, `<nav>`, `<main id="main-content">`, `<section aria-label="...">`, `<footer>`.
- 📊 **Screen Reader Data Summaries**: Includes hidden data tables (`.sr-only`) for audio accessibility.
- 🎯 **Focus Indicators**: High-contrast 2px focus ring (`*:focus-visible`).
- ⚡ **Reduced Motion**: Full support for `@media (prefers-reduced-motion: reduce)`.

---

## ⚡ Lighthouse 90+ Performance Optimization

- 🚀 **Zero-CLS Font Preloading**: Self-hosted Inter font via `next/font/google` (`display: swap`).
- 📦 **Minified Production Bundle**: Code splitting and SWC minification enabled.
- 🖼️ **GPU-Accelerated Rendering**: Mutates only `opacity` and `transform` (`scale`, `translate`).

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AnuradhaKashaudhan/Acdyon-Assignment.git
   cd Acdyon-Assignment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Project Structure

```
ACDYON/
├── src/
│   ├── app/
│   │   ├── globals.css          # Core CSS tokens & accessibility rings
│   │   ├── layout.tsx           # Root layout with font loader & skip link
│   │   └── page.tsx             # Main landing page assembly
│   ├── components/
│   │   ├── Navbar.tsx           # Responsive header & theme toggle
│   │   ├── Hero.tsx             # Parallax hero section
│   │   ├── DashboardMockup.tsx  # Live stats feed
│   │   ├── EarningsChart.tsx    # 30-day analytics chart & table
│   │   ├── FeaturesGrid.tsx     # Cascade card grid
│   │   ├── EarningScenarios.tsx # 3D flip card roles
│   │   ├── CTASection.tsx       # Validated email waitlist form
│   │   ├── EasterEgg.tsx        # Konami code celebratory modal
│   │   ├── ScrollProgressBar.tsx# Top scroll spring bar
│   │   ├── SkipLink.tsx         # Accessibility skip block
│   │   └── Footer.tsx           # Footer landmark
│   ├── context/
│   │   └── ThemeContext.tsx     # Theme state provider
│   └── hooks/
│       └── useKonamiCode.ts     # Key sequence detection hook
├── public/                      # Static assets
├── next.config.mjs              # Production optimization config
├── tailwind.config.ts           # Tailwind design tokens
└── README.md                    # Project documentation
```

---

<div align="center">
  <sub>Built with ❤️ for Indian Gig Workers by <a href="https://github.com/AnuradhaKashaudhan">Anuradha Kashaudhan</a></sub>
</div>
