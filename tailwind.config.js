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
        "sb-red": "hsl(0, 90%, 50%)",
        "sb-green": "hsl(127, 90%, 50%)",
        "sb-grey-100": "hsl(0, 0%, 96%)",
        "sb-grey-200": "hsl(0, 0%, 91%)",
        "sb-grey-300": "hsl(0, 0%, 77%)",
        "sb-grey-400": "hsl(0, 0%, 53%)",
        "sb-grey-500": "hsl(0, 0%, 49%)",
        "sb-grey-600": "hsl(0, 0%, 40%)",
        "sb-grey-700": "hsl(0, 0%, 30%)",
        "sb-grey-800": "hsl(0, 0%, 25%)",
        "sb-grey-900": "hsl(0, 0%, 15%)",
        "sb-primary-100": "hsl(240, 60%, 60%)",
        "sb-primary-200": "hsl(240, 60%, 55%)",
        "sb-primary-300": "hsl(240, 60%, 50%)",
      },
      brightness: {
        70: ".7",
      },
      screens: {
        "sb-sm": "30em",
        "sb-md": "59.375em",
      },
      boxShadow: {
        "inset-input": "inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.1)",
      },
    },
  },
  plugins: [],
};
