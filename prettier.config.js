export default {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-pkg",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
