const toEsm = process.env.BABEL_ESM === 'true'

module.exports = {
  plugins: [
    'babel-plugin-styled-components',
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: toEsm ? false : 'auto',
        loose: true,
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
}
