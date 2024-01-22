/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Titillium: ["Titillium Web", "sans-serif"],
        Oxanium: ["Oxanium", "sans-serif"],
      },
      backgroundImage: {
        url: "url('/src/assets/stripes.png')",
        url2: "url('/src/assets/earth.png')",
      },
    },
  },
  plugins: [],
};
