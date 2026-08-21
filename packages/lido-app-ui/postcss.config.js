export default {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    'postcss-url': {
      url: 'copy',
      assetsPath: '../assets',
      useHash: true,
      filter: /lido-shared-ui/,
    },
  },
}
