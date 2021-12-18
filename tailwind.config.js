module.exports = {
  content: ['./src/**/*.{html,js,md,xml}'],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
