/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50', // verde
          light: '#81C784',
          dark: '#388E3C',
        },
        secondary: {
          DEFAULT: '#FFEB3B', // amarillo
          light: '#FFF59D',
          dark: '#FBC02D',
        },
        accent: {
          DEFAULT: '#F44336', // rojo
          light: '#E57373',
          dark: '#D32F2F',
        },
        neutral: {
          DEFAULT: '#FFFFFF', // blanco
          light: '#F5F5F5',
          dark: '#E0E0E0',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      height: {
        'screen-75': '75vh',
        'screen-85': '85vh',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'large': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.7s ease-in-out',
        'bounce-slow': 'bounce 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('assets/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}