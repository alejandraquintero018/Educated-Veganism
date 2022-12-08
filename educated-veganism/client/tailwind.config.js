

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src"
  ],
  theme: {
    fontFamily: {
      'mono': ['monospace'],
      'display': ['Oswald' ],
      'body': ['Open Sans'],
      // 'merra': ['Meera Inimai', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
