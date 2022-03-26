const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,md,xml}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Charter", ...defaultTheme.fontFamily.serif],
        mono: ["MonoLisa", ...defaultTheme.fontFamily.mono],
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      gridTemplateColumns: {
        bookmarks: "1fr auto",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
