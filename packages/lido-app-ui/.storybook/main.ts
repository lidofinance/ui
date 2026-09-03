import path from 'path'

export default {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    // lido-shared-ui has no Storybook of its own; it serves both libraries,
    // so its components are rendered here as well as in lido-landing-ui
    '../../lido-shared-ui/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

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
    const packageRoot = process.cwd()

    const postcssOptions = {
      plugins: {
        '@csstools/postcss-global-data': {
          files: [path.join(packageRoot, 'styles/breakpoints.css')],
        },
        'postcss-mixins': {
          mixinsDir: path.join(packageRoot, 'styles'),
        },
        autoprefixer: {},
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-custom-media': { preserve: false },
      },
    }

    const customConfig = { ...config }

    if (process.env.PUBLIC_PATH) {
      customConfig.output = {
        ...customConfig.output,
        publicPath: process.env.PUBLIC_PATH,
      }
    }

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

      // Everything under a `styles/` folder is a global layer (tokens, fonts,
      // the Storybook surface) and must not be turned into CSS Modules.
      cssRule.exclude = [...(cssRule.exclude || []), /styles[\\/][^\\/]+\.css$/]

      cssRule.use.push({
        loader: 'postcss-loader',
        options: { postcssOptions },
      })
    }

    customConfig.module.rules.push({
      test: /styles[\\/][^\\/]+\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { modules: false } },
        { loader: 'postcss-loader', options: { postcssOptions } },
      ],
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
