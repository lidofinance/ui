module.exports = {
  typescript: {
    check: true,
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
  stories: ['../packages/**/*.stories.(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs', 'storybook-dark-mode'],
}
