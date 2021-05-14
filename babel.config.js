const toEsm = process.env.BABEL_ESM === 'true'

const esmConfig = { modules: false }
const cjsConfig = { modules: 'auto' }

module.exports = {
  plugins: ['babel-plugin-styled-components'],
  presets: [
    ['@babel/preset-env', toEsm ? esmConfig : cjsConfig],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
}
