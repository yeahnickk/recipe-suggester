/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'scale-in': 'scale-in 0.2s ease-out'
      },
      colors: {
        primary: {
          DEFAULT: '#1A3D50',
          light: '#234B61',
          dark: '#122C3A'
        },
        accent: {
          DEFAULT: '#C8A87D',
          light: '#D4BA97',
          dark: '#B39468'
        },
        neutral: {
          50: '#F9F7F5',
          100: '#F0EDE8',
          200: '#E2DCD4',
          300: '#D4CBC0',
          400: '#B3A89C',
          500: '#958A7E',
          600: '#766D62',
          700: '#5A5248',
          800: '#3D372F',
          900: '#272420'
        }
      }
    }
  },
  plugins: []
}

