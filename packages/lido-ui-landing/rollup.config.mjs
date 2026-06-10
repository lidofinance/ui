import fs from 'node:fs'
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import postcssNested from 'postcss-nested'
import copy from 'rollup-plugin-copy'
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
      }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        exclude: /src\/styles\/typography\.css$/,
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
  {
    input: 'src/styles/typography.css',
    output: {
      file: 'dist/ignore.js',
      format: 'es',
    },
    plugins: [
      postcss({
        plugins: [postcssNested(), autoprefixer()],
        include: /src\/styles\/typography\.css$/,
        modules: false,
        inject: false,
        extract: 'styles/typography.css',
        minimize: true,
      }),
      copy({
        targets: [
          {
            src: 'src/styles/typography-mixins.css',
            dest: 'dist/styles',
          },
          {
            src: './assets/fonts/*',
            dest: 'dist/assets/fonts',
          },
        ],
      }),
    ],
  },
]
