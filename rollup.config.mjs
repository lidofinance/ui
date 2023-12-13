import fs from 'node:fs'
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const { dependencies = {}, peerDependencies = {} } = JSON.parse(
  fs.readFileSync('package.json', 'utf-8'),
)

const external = [
  'react/jsx-runtime',
  ...Object.keys({ ...dependencies, ...peerDependencies }),
]

export default {
  input: './packages/index',
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
  ],
  external,
}
