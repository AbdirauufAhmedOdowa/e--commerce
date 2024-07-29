/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bab: "#ff8fab",
        wac: "#0d2818",
        mid: "#04471c",
        bomo: "#fff8f0"
      }
    },
  },
  plugins: [],
}

