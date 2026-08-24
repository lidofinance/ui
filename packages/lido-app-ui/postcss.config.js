const plugins = {
  // inlines the lido-shared-ui stylesheet imported from styles/global.css
  'postcss-import': {},
  autoprefixer: {},
  // the inlined lido-shared-ui styles point at assets next to their own
  // stylesheet; rebase them onto dist/assets, where rollup copies them
  'postcss-url': {
    filter: /lido-shared-ui/,
    url: (asset) => `../${asset.url}`,
  },
}

export default { plugins }
