module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,njk}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Inter', 'sans-serif'],
      mono: ['MonoLisa', 'monospace'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
