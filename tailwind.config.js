/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  './page/dasboard.html',
  './page/**/*.html',
  './buyout/**/*.html'
],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px',
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        },
        marquee: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        scale: 'scale 1s ease-in-out infinite',
        spin: 'spin 4s linear infinite',
        marquee: 'marquee 20s linear infinite'
      },
    },
  },
  plugins: [],
}
