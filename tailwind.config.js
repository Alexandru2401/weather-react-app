/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImg: "url('/src/assets/bg-img.jpg')",
        cardImg: "url('/src/assets/bg-3.jpg')",
        bgDark: "url('/src/assets/bg-dark.jpg')",
      },
    },
  },
  plugins: [],
};
