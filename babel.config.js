module.exports = {
  plugins: ['babel-plugin-styled-components'],
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
}
