/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#156082',
          navy: '#0E2841',
          heading: '#0F4761',
          orange: '#E97132',
          green: '#196B24',
          sky: '#0F9ED5',
          grey: '#E8E8E8',
        },
      },
      boxShadow: {
        panel: '0 24px 60px -40px rgba(14, 40, 65, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
