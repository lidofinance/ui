export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-webpack5-compiler-swc',
  ],

  typescript: {
    check: false,
    reactDocgen: 'react-docgen',
  },

  webpackFinal: async (config: any) => {
    const customConfig = { ...config }

    customConfig.resolve.extensionAlias = {
      '.js': ['.tsx', '.ts', '.js'],
    }

    const cssRule = customConfig.module.rules.find(
      (rule: any) =>
        rule.test instanceof RegExp &&
        rule.test.test('test.css') &&
        Array.isArray(rule.use),
    )

    if (cssRule) {
      const cssLoaderIndex = cssRule.use.findIndex(
        (use: any) => use.loader && use.loader.includes('css-loader'),
      )
      if (cssLoaderIndex !== -1) {
        cssRule.use[cssLoaderIndex].options = {
          ...cssRule.use[cssLoaderIndex].options,
          modules: {
            ...cssRule.use[cssLoaderIndex].options?.modules,
            localIdentName: '[name]__[local]',
          },
        }
      }
    }

    return customConfig
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {
      strictMode: false,
      builder: {
        useSWC: true,
      },
    },
  },

  docs: {
    autodocs: 'tag',
  },
}
