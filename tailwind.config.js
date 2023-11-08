/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Metropolis", "Figtree", "Montserrat", "sans-serif"],
      },
      brightness: {
        70: ".7",
      },
    },
  },
  plugins: [],
};
