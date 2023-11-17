/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Metropolis", "Figtree", "Montserrat", "sans-serif"],
      },
      colors: {
        "sb-black": "hsl(0, 0%, 15%)",
        "sb-grey-100": "hsl(0, 0%, 91%)",
      },
      brightness: {
        70: ".7",
      },
    },
  },
  plugins: [],
};
