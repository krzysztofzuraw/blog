module.exports = {
  content: ["./src/**/*.{html,js,md,xml}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      gridTemplateColumns: {
        list: "auto 1fr",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
