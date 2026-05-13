import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Deep-blue glass theme from design spec
        brand: {
          50:  '#F2F8FF',
          100: '#E0EDFB',
          200: '#B8D8F5',
          300: '#8EBDEC',
          400: '#67A8E8',
          500: '#2F6FB0',
          600: '#1F4E79', // primary
          700: '#163E61',
          800: '#0F2D49',
          900: '#091D32',
        },
        accent: {
          50:  '#FDECEC',
          100: '#F9C9C9',
          200: '#F19292',
          300: '#E55656',
          400: '#D62525',
          500: '#C0392B',
          600: '#A02E22',
          700: '#7A2419',
        },
        copper: {
          500: '#924C00',
          600: '#7A3F00',
        },
        ink: {
          50:  '#F7FBFF',
          100: '#EEF5FC',
          200: '#DDE7F5',
          300: '#B7C4D8',
          400: '#4F6488',
          500: '#3F557D',
          600: '#34507A',
          700: '#1E3759',
          800: '#0F2440',
          900: '#0B1F3A',
        },
        success: '#0F7B0F',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1F4E79 0%, #2F6FB0 100%)',
        'brand-soft': 'linear-gradient(135deg, #F2F8FF 0%, #E0EDFB 100%)',
        'mesh': 'radial-gradient(1200px 800px at 85% -10%, #e3f0ff 0%, transparent 55%), radial-gradient(1000px 700px at -10% 30%, #ecf4ff 0%, transparent 55%), radial-gradient(800px 600px at 60% 110%, #e7f1fb 0%, transparent 60%), linear-gradient(180deg, #fafdff 0%, #f1f7fe 100%)',
      },
      boxShadow: {
        'card': '0 10px 40px -10px rgba(31,78,121,0.18), 0 2px 6px -2px rgba(31,78,121,0.08)',
        'cardHover': '0 30px 80px -20px rgba(31,78,121,0.28), 0 8px 24px -8px rgba(31,78,121,0.12)',
        'glass': 'inset 0 1px 0 rgba(255,255,255,0.6), 0 14px 50px -14px rgba(31,78,121,0.22)',
        'glow': '0 10px 24px -8px rgba(31,78,121,0.45), inset 0 1px 0 rgba(255,255,255,0.25)',
        'glowLg': '0 16px 32px -10px rgba(31,78,121,0.55), inset 0 1px 0 rgba(255,255,255,0.25)',
      },
      maxWidth: { '7xl': '1280px' },
      keyframes: {
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'slide-up': { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'floaty': { '0%': { translate: '0 0' }, '100%': { translate: '0 -12px' } },
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(15, 123, 15, 0.35)' },
          '50%':       { boxShadow: '0 0 0 6px rgba(15, 123, 15, 0)' },
        },
        'drift': {
          '0%':   { transform: 'translate(0,0) scale(1)' },
          '50%':  { transform: 'translate(40px,-30px) scale(1.08)' },
          '100%': { transform: 'translate(-30px,40px) scale(0.96)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-out',
        'slide-up': 'slide-up 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        'floaty': 'floaty 6s ease-in-out infinite alternate',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'drift': 'drift 22s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
