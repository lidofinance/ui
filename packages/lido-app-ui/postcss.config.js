import path from 'path'
import autoprefixer from 'autoprefixer'
import mixins from 'postcss-mixins'
import postcssImport from 'postcss-import'
import nested from 'postcss-nested'
import customMedia from 'postcss-custom-media'
import url from 'postcss-url'

import breakpointsCss from './scripts/breakpoints-css.cjs'

export default {
  plugins: [
    breakpointsCss.breakpointMedia(),
    mixins({ mixinsDir: path.resolve('./', 'styles') }),
    autoprefixer(),
    postcssImport(),
    nested(),
    customMedia({ preserve: false }),
    // the inlined lido-shared-ui styles point at assets next to their own
    // stylesheet; rebase them onto dist/assets, where rollup copies them
    url({ filter: /lido-shared-ui/, url: (asset) => `../${asset.url}` }),
  ],
}
