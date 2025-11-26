import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        display: ['"Clash Display"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          50: '#f5f5ff',
          100: '#e5e7ff',
          200: '#c7cbff',
          300: '#a4afff',
          400: '#7c8bff',
          500: '#5666ff',
          600: '#2f4bff',
          700: '#233bd1',
          800: '#1b2ea4',
          900: '#111f73',
        },
        ink: '#0b1120',
        midnight: '#0f172a',
        champagne: '#fef3c7',
      },
      boxShadow: {
        'soft-xl': '0 20px 45px rgba(15, 23, 42, 0.25)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        aurora: 'aurora 16s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        aurora: {
          '0%': { transform: 'translateX(-10%)' },
          '50%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(-10%)' },
        },
      },
    },
  },
  plugins: [],
};

