import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../shared/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#5B4B5A',
        'brand-mauve': '#8B7B8A',
        'brand-rose': '#D4A5A5',
        'brand-lavender': '#E8D8E0',
        'brand-light': '#F5EEF2',
      },
      fontFamily: {
        'sans': ['Nexa', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'nexa': ['Nexa', 'sans-serif'],
        'nexa-bold': ['Nexa Bold', 'Nexa', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
