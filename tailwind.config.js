/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,md,xml}"],
  theme: {
    fontFamily: {
      serif: ["Charter", "Georgia", "serif"],
      mono: ["monospace"],
    },
    gridTemplateRows: {
      layout: "auto 1fr auto",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
