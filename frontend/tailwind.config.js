/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    extend: {
      fontFamily: {
        blackrush: ['Blackrush', 'sans-serif'], // Add your font family here
      },
    },
  },
  plugins: [],
}

