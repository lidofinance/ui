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
    // eslint-disable-next-line
    // @ts-ignore
    // eslint-disable-next-line
    const path = require('path')

    const postcssOptions = {
      plugins: {
        autoprefixer: {},
        'postcss-import': {},
        'postcss-nested': {},
      },
    }

    const customConfig = { ...config }

    // Fix @storybook/react-dom-shim version conflict: storybook v7 preset aliases
    // @storybook/react-dom-shim to ./dist/react-18 but yarn hoisted v8 to root
    // which doesn't export that sub-path. Use absolute path to local v7 file instead.
    if (customConfig.resolve?.alias?.['@storybook/react-dom-shim']) {
      customConfig.resolve.alias['@storybook/react-dom-shim'] = path.resolve(
        process.cwd(),
        'node_modules/@storybook/react-dom-shim/dist/react-18.js',
      )
    }

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
