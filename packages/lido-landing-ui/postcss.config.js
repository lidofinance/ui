import path from 'path'

export default {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./src/styles/breakpoints.css'],
    },
    'postcss-mixins': {
      mixinsDir: path.resolve('./', 'src/styles'),
    },
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-custom-media': { preserve: false },
  },
}
