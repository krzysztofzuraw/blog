module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,njk}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
