const commonPlugins = [
  ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ['@babel/plugin-proposal-private-methods', { loose: true }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
]

const testPlugins = [...commonPlugins]
const mainPlugins = ['babel-plugin-styled-components', ...commonPlugins]

const plugins = process.env.NODE_ENV === 'test' ? testPlugins : mainPlugins

module.exports = {
  plugins,
  presets: [
    ['@babel/preset-env', { modules: 'auto', loose: true }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
}
