/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        spline: ['"Spline Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
