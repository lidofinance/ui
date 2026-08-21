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
    // copies assets referenced by the inlined lido-shared-ui styles into this
    // package's dist and rewrites their paths. Scoped to that package so the
    // fonts, which are copied by rollup-plugin-copy, keep their own paths
    'postcss-url': {
      url: 'copy',
      assetsPath: '../assets',
      useHash: true,
      filter: /lido-shared-ui/,
    },
  },
}
