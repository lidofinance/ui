import path from 'path'

export default {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./styles/breakpoints.css', './styles/container-queries.css'],
    },
    'postcss-mixins': {
      mixinsDir: path.resolve('./', 'styles'),
    },
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
    [path.resolve('./scripts/postcss-custom-queries.cjs')]: {},
    // the inlined lido-shared-ui styles point at assets next to their own
    // stylesheet; rebase them onto dist/assets, where rollup copies them
    'postcss-url': {
      filter: /lido-shared-ui/,
      url: (asset) => `../${asset.url}`,
    },
  },
}
