/** @type {import('postcss-load-config').Config} */
module.exports = (ctx) => ({
  plugins: {
    'postcss-custom-media': {},
    '@csstools/postcss-global-data': {
      files: ['packages/theme/breakpoints.css'],
    },
    '@csstools/postcss-cascade-layers': ctx.env === 'production' ? {} : false,
    'postcss-nesting': {},
  },
})
