/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Charter", "Georgia", "serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
