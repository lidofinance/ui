export default {
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
    postcss: true,
  },
  webpackFinal: async (config: any) => {
    const customConfig = { ...config }
    // Configure webpack to allow using .js extension for typescript file imports.
    // Refer: https://github.com/storybookjs/storybook/issues/11587#issuecomment-1374816054
    customConfig.resolve.extensionAlias = {
      '.js': ['.tsx', '.ts', '.js'],
    }

    const cssRule = customConfig.module.rules.find(
      (rule: any) =>
        rule.test instanceof RegExp &&
        rule.test.test('test.css') &&
        Array.isArray(rule.use),
    )

    cssRule.use.push({
      loader: 'postcss-loader',
      options: {
        postcssOptions: require('../postcss.config.js'),
      },
    })
    return customConfig
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
