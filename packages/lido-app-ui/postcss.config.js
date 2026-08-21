export default {
  plugins: {
    // inlines the lido-shared-ui stylesheet imported from styles/global.css
    'postcss-import': {},
    autoprefixer: {},
    // copies assets referenced by the inlined lido-shared-ui styles into this
    // package's dist and rewrites their paths
    'postcss-url': {
      url: 'copy',
      assetsPath: '../assets',
      useHash: true,
      filter: /lido-shared-ui/,
    },
  },
}
