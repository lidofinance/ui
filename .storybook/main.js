const { readdirSync } = require('node:fs')
const { resolve } = require('node:path')
const basepath = resolve(__dirname, '../packages')
const packages = readdirSync(basepath)

module.exports = {
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...Object.fromEntries(
        packages.map((dir) => [`@lidofinance/${dir}`, resolve(basepath, dir)])
      ),
    }
    return config
  },
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  reactOptions: {
    // FIXME: replace with true
    // https://github.com/lidofinance/ui/issues/198
    strictMode: false,
  },
  addons: [
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    {
      name: 'storybook-addon-swc',
      options: {
        enableSwcMinify: false,
      },
    },
  ],
  typescript: {
    check: false,
    checkOptions: {
      formatter: 'codeframe',
    },
    reactDocgen: 'none',
  },
  features: {
    postcss: false,
  },
}
