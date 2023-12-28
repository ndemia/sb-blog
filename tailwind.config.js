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
        "sb-green": "hsl(173, 80%, 36%)",
        "sb-grey-100": "hsl(200, 20%, 96%)",
        "sb-grey-200": "hsl(200, 16%, 91%)",
        "sb-grey-300": "hsl(200, 12%, 77%)",
        "sb-grey-400": "hsl(200, 10%, 53%)",
        "sb-grey-500": "hsl(200, 10%, 49%)",
        "sb-grey-600": "hsl(200, 12%, 40%)",
        "sb-grey-700": "hsl(200, 16%, 30%)",
        "sb-grey-800": "hsl(200, 18%, 25%)",
        "sb-grey-900": "hsl(200, 20%, 15%)",
        "sb-primary-100": "hsl(199, 42%, 25%)",
        "sb-primary-200": "hsl(205, 42%, 22%)",
        "sb-primary-300": "hsl(210, 42%, 20%)",
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
