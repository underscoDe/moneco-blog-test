import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--outfit)', ...defaultTheme.fontFamily.sans],
        primary: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'hsl(var(--moneco-color-primary))',
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
