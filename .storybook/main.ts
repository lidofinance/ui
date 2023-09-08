import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const basepath = resolve(__dirname, '../packages')
const packages = readdirSync(basepath)
module.exports = {
  webpackFinal: async (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...Object.fromEntries(
        packages.map((dir) => [`@lidofinance/${dir}`, resolve(basepath, dir)]),
      ),
    }
    return config
  },

  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)'],

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

  framework: {
    name: '@storybook/react-webpack5',

    options: {
      strictMode: false,
    },
  },

  docs: {
    autodocs: true,
  },
}
