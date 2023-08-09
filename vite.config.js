const path = require('node:path')
const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[folder]-[local]',
    },
  },
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
          id.includes('/node_modules/') ||
          // everything except relative and absolute imports are library imports
          !(id.startsWith('.') || id.startsWith('/'))
        ) {
          return true
        }
        return false
      },
    },
  },
})
