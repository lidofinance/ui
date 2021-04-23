module.exports = {
  stories: ['../packages/**/*.stories.(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs', 'storybook-dark-mode'],
  typescript: {
    check: false,
    checkOptions: {
      formatter: 'codeframe',
    },
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
}
