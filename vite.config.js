const path = require('path')
const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

const packageJson = require('./package.json')

const excluded = [
  ...Object.keys(packageJson.peerDependencies),
  ...Object.keys(packageJson.dependencies),
  ...Object.keys(packageJson.devDependencies),
]

module.exports = defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'),
      name: 'index',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      output: {
        exports: 'named',
        preserveModules: true,
        interop: 'compat',
      },
      external: (id) => {
        if (
          excluded.includes(id.split('/')[0]) ||
          (id.startsWith('@') &&
            excluded.includes(id.split('/').slice(0, 2).join('/')))
        ) {
          return true
        }
        return false
      },
    },
  },
})
