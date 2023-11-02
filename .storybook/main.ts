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

  webpackFinal: async (config: any) => {
    const customConfig = { ...config }
    // Configure webpack to allow using .js extension for typescript file imports.
    // Refer: https://github.com/storybookjs/storybook/issues/11587#issuecomment-1374816054
    customConfig.resolve.extensionAlias = {
      '.js': ['.tsx', '.ts', '.js'],
    }
    return customConfig
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
