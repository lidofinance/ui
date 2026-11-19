import path from 'path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))

export const basePlugins = {
  '@csstools/postcss-global-data': {
    files: [
      path.join(root, 'styles/breakpoints.css'),
      path.join(root, 'styles/container-queries.css'),
    ],
  },
  'postcss-mixins': {
    mixinsDir: path.join(root, 'styles'),
  },
  autoprefixer: {},
  'postcss-import': {},
  'postcss-nested': {},
  [path.join(root, 'scripts/postcss-custom-queries.cjs')]: {},
}

export default {
  plugins: {
    ...basePlugins,
    // the inlined lido-shared-ui styles point at assets next to their own
    // stylesheet; rebase them onto dist/assets, where rollup copies them
    'postcss-url': {
      filter: /lido-shared-ui/,
      url: (asset) => `../${asset.url}`,
    },
  },
}
