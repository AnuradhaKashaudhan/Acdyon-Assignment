import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#3B82F6',
          glow: '#60A5FA',
        },
        accent: {
          DEFAULT: '#10B981',
          light: '#34D399',
        },
        darkbg: '#0F172A',
        lightbg: '#FFFFFF',
        graytext: {
          light: '#475569',
          dark: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
