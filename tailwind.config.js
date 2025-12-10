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
        primary: {
          DEFAULT: '#065758',
          50: '#e6f2f2',
          100: '#b3d9da',
          200: '#80c0c1',
          300: '#4da7a9',
          400: '#268f90',
          500: '#065758',
          600: '#054b4c',
          700: '#043f40',
          800: '#033334',
          900: '#022728',
        },
        secondary: {
          DEFAULT: '#82c3c5',
          50: '#f0f9f9',
          100: '#d9eff0',
          200: '#c1e5e6',
          300: '#a9dbdc',
          400: '#92d1d3',
          500: '#82c3c5',
          600: '#6fb5b7',
          700: '#5ca7a9',
          800: '#49999b',
          900: '#368b8d',
        },
        tertiary: {
          DEFAULT: '#c46960',
          50: '#fdf2f1',
          100: '#f9e0dd',
          200: '#f0c4bf',
          300: '#e7a8a1',
          400: '#de8c83',
          500: '#c46960',
          600: '#b35a52',
          700: '#a24b44',
          800: '#913c36',
          900: '#802d28',
        },
        accent1: {
          DEFAULT: '#a9d4d6',
        },
        accent2: {
          DEFAULT: '#e2f0ef',
        },
        surface: {
          light: '#ffffff',
          dark: '#0f172a',
        },
        background: {
          light: '#f8fafa',
          dark: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(6, 87, 88, 0.3)',
        'glow-lg': '0 0 60px -15px rgba(6, 87, 88, 0.4)',
      },
    },
  },
  plugins: [],
}
