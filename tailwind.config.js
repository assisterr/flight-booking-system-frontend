/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0284c7",
        textColor: "#262626",
        grayColor: "#4b5563",
      },
    },
  },
  plugins: [],
}

