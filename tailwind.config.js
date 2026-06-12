/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        blue: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      animation: {
        'float':      'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite 2s',
        'spin-slow':  'spin 25s linear infinite',
        'spin-rev':   'spinRev 35s linear infinite',
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'blink':      'blink 1s step-end infinite',
      },
      keyframes: {
        float:    { '0%,100%': { transform: 'translateY(0) rotate(-1deg)' }, '50%': { transform: 'translateY(-14px) rotate(1deg)' } },
        spinRev:  { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(-360deg)' } },
        pulseDot: { '0%,100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: .4, transform: 'scale(1.5)' } },
        blink:    { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
    },
  },
  plugins: [],
}
