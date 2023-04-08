/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: '2px -5px 1px #111827',
        myShadow2: '-2px -5px 1px #111827',
      }
    },
  },
  plugins: [],
}