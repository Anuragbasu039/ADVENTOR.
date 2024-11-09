/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    extend: {
      fontFamily: {
        rogthem: ['__rogthem_9bf312', '__rogthem_Fallback_9bf312', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

