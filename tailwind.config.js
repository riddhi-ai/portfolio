/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFB',
          100: '#FAF7F2',
          200: '#F4EFEA',
          300: '#EAE3DA',
          400: '#D8CFC3',
        },
        charcoal: {
          950: '#141216',
          900: '#1C191F',
          800: '#2D2932',
          700: '#433E4A',
          600: '#635D6C',
          500: '#8A8494',
        },
        lavender: {
          50: '#F7F5FE',
          100: '#EFEAFF',
          200: '#DDD5FD',
          300: '#C2B4FB',
          400: '#A48EF7',
          500: '#8664F3',
          600: '#7043EA',
          700: '#5C28D4',
        },
        peach: {
          50: '#FFF7F2',
          100: '#FFEFE5',
          200: '#FFDEC9',
          300: '#FFC5A3',
          400: '#FF9E7D',
        },
        mint: {
          50: '#F0FDF8',
          100: '#DCFCEE',
          400: '#34D399',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(28, 25, 31, 0.05), 0 2px 6px -1px rgba(28, 25, 31, 0.03)',
        'soft-lg': '0 12px 36px -4px rgba(28, 25, 31, 0.08), 0 4px 12px -2px rgba(28, 25, 31, 0.04)',
        'cute': '0 6px 0px 0px rgba(28, 25, 31, 0.08)',
        'glow-lavender': '0 0 35px -5px rgba(134, 100, 243, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'wiggle-gentle': 'wiggle 3s ease-in-out infinite',
        'steam': 'steam 2.5s ease-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'translateY(-14px) scale(1.4)', opacity: '0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
