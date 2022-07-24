/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,md}"],
  theme: {
    gridTemplateColumns: {
      list: "1fr min-content",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
