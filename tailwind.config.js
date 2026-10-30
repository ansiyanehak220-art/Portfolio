/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#06090e',
          900: '#0d1117', // Core matte carbon requested
          850: '#11161d',
          800: '#161b22',
          700: '#21262d',
          600: '#30363d',
        },
        cyber: {
          emerald: '#10b981',
          emeraldGlow: '#34d399',
          lime: '#a3e635',
          limeBright: '#bef264',
          darkEmerald: '#064e3b',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-emerald': '0 0 25px rgba(16, 185, 129, 0.45)',
        'glow-emerald-lg': '0 0 45px rgba(16, 185, 129, 0.65)',
        'glow-lime': '0 0 25px rgba(163, 230, 53, 0.45)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(16, 185, 129, 0.15)',
      },
      animation: {
        'radar-ping': 'radarPing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        radarPing: {
          '75%, 100%': {
            transform: 'scale(2.2)',
            opacity: '0',
          },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};

