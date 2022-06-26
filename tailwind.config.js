/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,md,xml}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Charter", ...defaultTheme.fontFamily.serif],
        mono: ["MonoLisa", ...defaultTheme.fontFamily.mono],
      },
    },
    gridTemplateRows: {
      layout: "auto 1fr auto",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
