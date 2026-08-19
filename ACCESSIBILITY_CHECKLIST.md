# WCAG 2.1 AA Compliance Checklist & Testing Guide

EarningsHub is engineered for 100% WCAG 2.1 AA accessibility standards.

---

## Key Features Implemented

1. **Bypass Navigation (Skip Link)**:
   - Screen reader & keyboard users can press `Tab` immediately on page load to see **"Skip to main content"**.
   - Directly jumps focus to `<main id="main-content">`.

2. **Semantic Structure & Landmarks**:
   - `<header>` / `<nav>` for main site navigation.
   - `<main>` wrapping primary content.
   - `<section>` tags with `aria-label` for distinct regions (`#features`, `#dashboard`, `#chart`, `#scenarios`, `#cta`).
   - Strict Heading Hierarchy: single `<h1>` on Hero, `<h2>` per section, `<h3>` per card.

3. **High-Contrast Text & Color Ratios**:
   - All normal text maintains at least **4.5:1** contrast ratio against backgrounds in Light and Dark modes.
   - Large text maintains at least **3:1** ratio.

4. **Keyboard Navigation & Focus Indicators**:
   - Visible 2px outline focus rings (`*:focus-visible`).
   - Every interactive element has a minimum touch target size of **44x44px**.
   - Accessible keyboard triggers for mobile drawer and dark mode toggle.

5. **Screen Reader Accessibility (Non-Text Content)**:
   - Hidden screen reader data table (`.sr-only`) provided alongside the 30-Day Growth Chart so non-visual users hear full daily data summaries.
   - Decorative SVGs and icons use `aria-hidden="true"`.
   - Toast notifications trigger `aria-live="polite"`.

6. **Reduced Motion Support**:
   - Full support for `prefers-reduced-motion: reduce`. Disables automatic looping animations and continuous heavy transforms for sensitive users.

---

## How to Test

1. **Keyboard Audit**:
   - Press `Tab` continuously from page load to verify focus ring visibility on all links, buttons, and inputs.
2. **Screen Reader Audit**:
   - Enable VoiceOver (macOS: `Cmd + F5`) or NVDA (Windows) to verify landmark announcements and input field labels.
3. **Lighthouse Audit**:
   - Open Chrome DevTools -> Lighthouse -> Check **Accessibility** -> Run Audit (Target: 95-100).

