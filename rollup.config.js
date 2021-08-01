import path from 'path'
import fs from 'fs'
import tslib from 'tslib'
import ts from 'typescript'
import { topologicallySort, listWorkspaces } from 'yarn-workspaces-list'
import typescript from 'rollup-plugin-typescript2'
import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'

const excludedWorkspaces = ['.']
const extensions = ['.js', '.jsx', '.ts', '.tsx']
const commonExternal = ['react/jsx-runtime']

export default async () => {
  const packages = await listWorkspaces()
  const filteredPackages = packages.filter(
    ({ location }) => !excludedWorkspaces.includes(location)
  )
  const sortedPackages = topologicallySort(filteredPackages)

  const config = sortedPackages.map((packageData) => {
    const packageDir = packageData.location
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(packageDir, 'package.json'), 'utf-8')
    )
    const { dependencies, peerDependencies } = packageJson
    const external = [
      ...commonExternal,
      ...Object.keys({ ...dependencies, ...peerDependencies }),
    ]

    return {
      input: path.join(packageDir, 'src/index'),
      output: [
        {
          dir: path.join(packageDir, path.dirname(packageJson.main)),
          preserveModules: true,
          format: 'cjs',
          exports: 'named',
        },
        {
          dir: path.join(packageDir, path.dirname(packageJson.module)),
          preserveModules: true,
          format: 'es',
          exports: 'named',
        },
      ],
      plugins: [
        del({ targets: path.join(packageDir, 'dist/*'), runOnce: true }),
        resolve({ extensions }),
        typescript({
          tslib,
          typescript: ts,
          tsconfig: path.join(packageDir, 'tsconfig.json'),
          tsconfigOverride: {
            compilerOptions: {
              paths: { tslib: [require.resolve('tslib/tslib.d.ts')] },
              emitDeclarationOnly: false,
              noEmit: false,
            },
            exclude: ['node_modules', 'dist', '**/*.stories.*', '**/*.test.*'],
            include: ['src/**/*'],
          },
        }),
        babel({
          exclude: 'node_modules/**',
          babelHelpers: 'bundled',
          extensions,
        }),
        commonjs({
          namedExports: {
            './.yarn/react-toastify/dist/inject-style.js': ['injectStyle'],
          },
        }),
      ],
      external,
    }
  })

  return config
}
