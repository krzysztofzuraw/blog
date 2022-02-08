module.exports = {
  content: ["./src/**/*.{html,js,md,xml}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["MonoLisa", "monospace"],
    },
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
