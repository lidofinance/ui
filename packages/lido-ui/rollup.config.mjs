import fs from 'node:fs'
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const { dependencies = {}, peerDependencies = {} } = JSON.parse(
  fs.readFileSync('package.json', 'utf-8'),
)

const external = [
  'react/jsx-runtime',
  '@inline-svg-unique-id/react',
  ...Object.keys({ ...dependencies, ...peerDependencies }),
]

export default [
  {
    input: './src/index.ts',
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
        generatedCode: 'es2015',
        sourcemap: true,
      },
      {
        dir: 'dist/esm',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].mjs',
        generatedCode: 'es2015',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({ extensions, preferBuiltins: true }),
      commonjs({ include: /node_modules/ }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions,
        rootMode: 'upward',
      }),
      /** index.css – combining styles, including global.css (without typography) */
      postcss({
        config: {
          path: './postcss.config.js',
        },
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
  },
]
