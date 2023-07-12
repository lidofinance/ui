const path = require('path')
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
      external: [/node_modules/],
    },
  },
})
