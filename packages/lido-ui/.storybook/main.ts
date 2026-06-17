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
    checkOptions: {
      formatter: 'codeframe',
    },
    reactDocgen: 'react-docgen',
  },
  features: {
    legacyDecoratorFileOrder: false,
  },
  webpackFinal: async (config: any) => {
    const postcssOptions = {
      plugins: {
        autoprefixer: {},
        'postcss-import': {},
        'postcss-nested': {},
      },
    }

    const customConfig = { ...config }

    if (process.env.PUBLIC_PATH) {
      customConfig.output = {
        ...customConfig.output,
        publicPath: process.env.PUBLIC_PATH,
      }
    }
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

    // Find css-loader in the rule
    const cssLoaderIndex = cssRule.use.findIndex(
      (use: any) => use.loader && use.loader.includes('css-loader'),
    )

    if (cssLoaderIndex !== -1) {
      // Update css-loader options to not obfuscate class names in Storybook
      const cssLoader = cssRule.use[cssLoaderIndex]
      cssLoader.options = {
        ...cssLoader.options,
        modules: {
          ...cssLoader.options?.modules,
          localIdentName: '[name]__[local]', // Use readable class names
        },
      }
    }

    cssRule.use.push({
      loader: 'postcss-loader',
      options: { postcssOptions },
    })

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
