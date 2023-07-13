const path = require('node:path')
const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

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
          // direct node_modules import
          id.includes('node_modules') ||
          // everything else is library import
          !(
            // relative import is ok
            id.startsWith('.') ||
            // absolute import is ok
            id.startsWith('/')
          )
        ) {
          return true
        }
        return false
      }
    },
  }
})
