module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,njk}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
