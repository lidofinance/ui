module.exports = {
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    'storybook-dark-mode',
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
