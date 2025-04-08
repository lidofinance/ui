import fs from 'node:fs'
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import postcssNested from 'postcss-nested'
import postcssImport from 'postcss-import'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const { dependencies = {}, peerDependencies = {} } = JSON.parse(
  fs.readFileSync('package.json', 'utf-8'),
)

// in esm build we need to have imports in a form on next/link.js instead of next/link for it tow work
function addNextJsExtensions() {
  return {
    name: 'add-next-link-extension',
    renderChunk(code) {
      return code.replace(/from ['"]next\/([^'"]+)['"]/g, (full, mod) => {
        return `from 'next/${mod}.js'`
      })
    },
  }
}

const external = [
  'react/jsx-runtime',
  'next',
  'next/link',
  'next/image',
  'next/font/google',
  ...Object.keys({ ...dependencies, ...peerDependencies }),
]

export default {
  input: './packages/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'packages',
      generatedCode: 'es2015',
      sourcemap: true,
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'packages',
      entryFileNames: '[name].mjs',
      generatedCode: 'es2015',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ extensions, preferBuiltins: true }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      extensions,
    }),
    addNextJsExtensions(),
    /** typography.css
     * We put the typography in a separate folder so that library users can decide
     * for themselves whether to use these styles or not. */
    postcss({
      plugins: [postcssNested(), autoprefixer()],
      include: /styles\/typography\.css$/,
      modules: false,
      inject: false,
      extract: 'styles/typography.css',
      minimize: true,
    }),
    /** index.css – combining styles, including global.css (without typography) */
    postcss({
      plugins: [postcssImport(), postcssNested(), autoprefixer()],
      exclude: /styles\/typography\.css$/,
      // Disable CSS modules for global.css, and leave the modules for the rest.
      modules: {
        auto: (id) => !/styles[\\/]global\.css$/.test(id),
      },
      inject: false,
      extract: 'index.css',
      minimize: true,
    }),
  ],
  external,
}
