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
  },
}
