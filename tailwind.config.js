module.exports = {
  content: ["./src/**/*.{html,js,md,xml}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Charter", "Georgia", "serif"],
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
