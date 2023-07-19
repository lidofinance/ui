/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['packages/theme/base/breakpoints.css'],
    },
    'postcss-custom-media': {},
  },
}
