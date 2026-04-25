/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0F0D0B', 50: '#2A2520', 100: '#1E1A16', 200: '#0F0D0B' },
        orange: { DEFAULT: '#E8712A', light: '#F08C4A', dark: '#C55E1E' },
        surface: { 1: '#161310', 2: '#1E1A16', 3: '#252118' },
        muted: '#6B6560',
        border: '#2A2520',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
