import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the official Arihant Packaging logo.
        brand: {
          // Copper / brown — used for "ARIHANT" wordmark in the logo. Primary surface accent.
          50: '#FAF6F0',
          100: '#F2E7D6',
          200: '#E2C9A6',
          300: '#C9A36C',
          400: '#A77738',
          500: '#924C00', // primary
          600: '#7A3F00',
          700: '#5E3000',
          800: '#42220A',
          900: '#2A1607',
        },
        accent: {
          // Brand red — used for "PACKAGING" wordmark.
          50: '#FDECEC',
          100: '#F9C9C9',
          200: '#F19292',
          300: '#E55656',
          400: '#D62525',
          500: '#C20E1A', // primary red
          600: '#A00B15',
          700: '#7A0810',
          800: '#54050B',
          900: '#330306',
        },
        sky: {
          50: '#EEF7FF',
          100: '#BCDFFF', // light blue from logo
        },
        ink: {
          50:  '#F8F8F8',
          100: '#EDEDED',
          200: '#D9D9D9',
          300: '#B5B5B5',
          400: '#7A7A7A',
          500: '#595959',
          600: '#404040',
          700: '#2A2A2A',
          800: '#1A1A1A',
          900: '#0A0A0A',
        },
        success: '#0F7B0F',
        warning: '#B7791F',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1280px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 14px rgba(0,0,0,0.06)',
        'cardHover': '0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(146,76,0,0.12)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'slide-up': { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};

export default config;
