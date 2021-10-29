module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,njk}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['MonoLisa', 'monospaced'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
