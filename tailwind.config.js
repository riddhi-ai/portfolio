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
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F4EFE7',
          300: '#EBE3D7',
          400: '#DDD2C3',
        },
        charcoal: {
          950: '#181512',
          900: '#221D18',
          800: '#342D26',
          700: '#4C4238',
          600: '#6C5E51',
          500: '#8E7D6D',
        },
        // Warm artisanal terracotta palette
        terracotta: {
          50: '#FDF7F4',
          100: '#FCEEE8',
          200: '#F9D9CD',
          300: '#F3BBA7',
          400: '#E89073',
          500: '#D4633B',
          600: '#C04C24',
          700: '#A13B1A',
          800: '#853218',
        },
        // Soft herbal sage green
        sage: {
          50: '#F4F7F5',
          100: '#E5EDE7',
          200: '#CCDDD0',
          300: '#A7C4AF',
          400: '#7AA486',
          500: '#548463',
          600: '#416B4E',
          700: '#34553F',
        },
        // Warm honey & amber
        amber: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
        },
        // Graceful alias for lavender -> terracotta to instantly humanize any legacy classes
        lavender: {
          50: '#FDF7F4',
          100: '#FCEEE8',
          200: '#F9D9CD',
          300: '#F3BBA7',
          400: '#E89073',
          500: '#D4633B',
          600: '#C04C24',
          700: '#A13B1A',
        },
        peach: {
          50: '#FFF8F4',
          100: '#FFF0E8',
          200: '#FFE0CF',
          300: '#FFC8AD',
          400: '#FFA378',
        },
        mint: {
          50: '#F4F7F5',
          100: '#E5EDE7',
          400: '#7AA486',
        }
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Newsreader', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(34, 29, 24, 0.05), 0 2px 6px -1px rgba(34, 29, 24, 0.03)',
        'soft-lg': '0 12px 36px -4px rgba(34, 29, 24, 0.08), 0 4px 12px -2px rgba(34, 29, 24, 0.04)',
        'cute': '0 6px 0px 0px rgba(34, 29, 24, 0.08)',
        'glow-terracotta': '0 0 35px -5px rgba(212, 99, 59, 0.25)',
        'glow-lavender': '0 0 35px -5px rgba(212, 99, 59, 0.25)',
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
