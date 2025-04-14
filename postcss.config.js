module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./styles/breakpoints.css'],
    },
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-custom-media': { preserve: false },
  },
}
