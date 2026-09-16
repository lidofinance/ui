import path from 'path'

export default {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./styles/breakpoints.css'],
    },
    'postcss-mixins': {
      mixinsDir: path.resolve('./', 'styles'),
    },
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-custom-media': { preserve: false },
    // the inlined lido-shared-ui styles point at assets next to their own
    // stylesheet; rebase them onto dist/assets, where rollup copies them
    'postcss-url': {
      filter: /lido-shared-ui/,
      url: (asset) => `../${asset.url}`,
    },
  },
}
