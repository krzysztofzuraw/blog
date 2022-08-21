/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
