module.exports = {
  content: [
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './assets/**/*.liquid'
  ],
  theme: {
    extend: {},
    screens: {
      xs: '450px',
      sm: '750px',
      md: '990px',
      lg: '1200px',
      xl: '1440px',
    },
  },
  plugins: [],
};
