/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Figtree"', '"Montserrat"', "sans-serif"],
      },
      colors: {
        "sb-white": "hsl(0, 0%, 100%)",
        "sb-black": "hsl(0, 0%, 15%)",
        "sb-grey-100": "hsl(0, 0%, 96%)",
        "sb-grey-200": "hsl(0, 0%, 91%)",
        "sb-grey-300": "hsl(0, 0%, 77%)",
        "sb-grey-400": "hsl(0, 0%, 53%)",
        "sb-grey-500": "hsl(0, 0%, 49%)",
        "sb-grey-600": "hsl(0, 0%, 40%)",
        "sb-grey-700": "hsl(0, 0%, 30%)",
        "sb-grey-800": "hsl(0, 0%, 25%)",
        "sb-grey-900": "hsl(0, 0%, 15%)",
        "sb-primary-100": "hsl(24, 89%, 54%)",
        "sb-primary-200": "hsl(24, 89%, 35%)",
        "sb-primary-300": "hsl(24, 89%, 25%)",
      },
      brightness: {
        70: ".7",
      },
    },
  },
  plugins: [],
};
