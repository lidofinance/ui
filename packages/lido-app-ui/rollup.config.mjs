import fs from 'node:fs'
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const { dependencies = {}, peerDependencies = {} } = JSON.parse(
  fs.readFileSync('package.json', 'utf-8'),
)

const external = [
  'react/jsx-runtime',
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
      postcss({
        config: {
          path: './postcss.config.js',
        },
        // asset paths are resolved relative to the extracted stylesheet, which
        // is what this package exports
        to: 'dist/esm/index.css',
        modules: {
          auto: (id) => !/src\/styles[\\/]global\.css$/.test(id),
        },
        inject: false,
        extract: 'index.css',
        minimize: true,
      }),
    ],
    external,
  },
]
