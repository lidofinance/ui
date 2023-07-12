module.exports = {
  core: {
    builder: 'webpack5',
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
