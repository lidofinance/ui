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
