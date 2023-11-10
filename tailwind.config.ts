import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        paytone: ['var(--paytone-font)', ...defaultTheme.fontFamily.sans],
        inter: ['var(--inter-font)', ...defaultTheme.fontFamily.sans],
        primary: ['Paytone One', ...defaultTheme.fontFamily.sans],
        secondary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        hero: "linear-gradient(to right, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), url('/images/hero-bg.jpg')",
        'hero-farmers':
          "linear-gradient(to right, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), url('/images/hero-farmers-bg.jpg')",
        'hero-smes':
          "linear-gradient(to right, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), url('/images/hero-smes-bg.jpg')",
        'hero-contact':
          "linear-gradient(to right, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), url('/images/hero-contact-bg.jpg')",
        'hero-about':
          "linear-gradient(to right, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), url('/images/hero-about-bg.jpg')",
      },
      colors: {
        primary: 'hsl(var(--moneco-color-primary))',
        dark: '#222222',
        ring: '#f7b132',
      },
      fontSize: {
        14: 'calc(14 / 16 * 1rem)',
        24: 'calc(24 / 16 * 1rem)',
        30: 'calc(30 / 16 * 1rem)',
        38: 'calc(38 / 16 * 1rem)',
        48: 'calc(48 / 16 * 1rem)',
        56: 'calc(56 / 16 * 1rem)',
        64: 'calc(64 / 16 * 1rem)',
        72: 'calc(72 / 16 * 1rem)',
        '30r': 'clamp(1rem, 0.825rem + 0.8750000000000001vw, 1.875rem)',
        '48r': 'clamp(2.375rem, 2.25rem + 0.625vw, 3rem)',
        '50r': 'clamp(2.375rem, 2.225rem + 0.75vw, 3.125rem)',
        '56r': 'clamp(2.375rem, 2.15rem + 1.125vw, 3.5rem)',
        '64r': 'clamp(1.875rem, 1.45rem + 2.125vw, 4rem)',
        '72r': 'clamp(3.75rem, 3.6rem + 0.75vw, 4.5rem)',
        'hero-title': 'clamp(2.25rem, 2.04rem + 1.0499999999999998vw, 3.3rem)',
        'benefit-title':
          'clamp(3.2rem, 2.9400000000000004rem + 1.2999999999999998vw, 4.5rem)',
      },
      screens: {
        '640': '40rem',
        '992': '62rem',
        '1259': '78.6875rem',
        '1280': '80rem',
        '1400': '87.5rem',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [require('@tailwindcss/forms')],
} as Config;
