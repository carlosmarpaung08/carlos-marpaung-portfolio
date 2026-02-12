/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#002B5B',
          50: '#f0f4f9',
          100: '#e1e9f3',
          200: '#c3d3e7',
          300: '#a5bcda',
          400: '#87a6ce',
          500: '#6990c2',
          600: '#4b79b6',
          700: '#002B5B',
          800: '#002146',
          900: '#001731',
        }
      }
    }
  },
  plugins: [],
}
