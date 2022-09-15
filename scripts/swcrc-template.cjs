module.exports = {
  $schema: 'https://json.schemastore.org/swcrc',
  jsc: {
    parser: {
      syntax: 'typescript',
      tsx: true,
      dts: true,
      decorators: false,
      dynamicImport: false,
    },
    transform: {
      react: {
        pragma: 'React.createElement',
        pragmaFrag: 'React.Fragment',
        throwIfNamespace: true,
        development: false,
        useBuiltins: false,
      },
    },
    baseUrl: '.',
    paths: {
      '@lidofinance/accordion': ['packages/accordion/index.ts'],
      '@lidofinance/address': ['packages/address/index.ts'],
      '@lidofinance/block': ['packages/block/index.ts'],
      '@lidofinance/box': ['packages/box/index.ts'],
      '@lidofinance/button': ['packages/button/index.ts'],
      '@lidofinance/checkbox': ['packages/checkbox/index.ts'],
      '@lidofinance/chip': ['packages/chip/index.ts'],
      '@lidofinance/container': ['packages/container/index.ts'],
      '@lidofinance/data-table': ['packages/data-table/index.ts'],
      '@lidofinance/divider': ['packages/divider/index.ts'],
      '@lidofinance/heading': ['packages/heading/index.tsx'],
      '@lidofinance/hooks': ['packages/hooks/index.ts'],
      '@lidofinance/icons': ['packages/icons/index.tsx'],
      '@lidofinance/identicon': ['packages/identicon/index.ts'],
      '@lidofinance/input': ['packages/input/index.ts'],
      '@lidofinance/lido-logo': ['packages/lido-logo/index.ts'],
      '@lidofinance/link': ['packages/link/index.ts'],
      '@lidofinance/loaders': ['packages/loaders/index.ts'],
      '@lidofinance/main-menu': ['packages/main-menu/index.ts'],
      '@lidofinance/modal': ['packages/modal/index.ts'],
      '@lidofinance/pagination': ['packages/pagination/index.ts'],
      '@lidofinance/popover': ['packages/popover/index.ts'],
      '@lidofinance/popup-menu': ['packages/popup-menu/index.ts'],
      '@lidofinance/select': ['packages/select/index.ts'],
      '@lidofinance/service-page': ['packages/service-page/index.ts'],
      '@lidofinance/stack': ['packages/stack/index.ts'],
      '@lidofinance/styled-system': ['packages/styled-system/index.ts'],
      '@lidofinance/table': ['packages/table/index.ts'],
      '@lidofinance/text': ['packages/text/index.ts'],
      '@lidofinance/theme': ['packages/theme/index.ts'],
      '@lidofinance/toast': ['packages/toast/index.ts'],
      '@lidofinance/tooltip': ['packages/tooltip/index.ts'],
      '@lidofinance/transition': ['packages/transition/index.ts'],
      '@lidofinance/utils': ['packages/utils/index.ts'],
      '@lidofinance/cookie-theme-toggler': ['packages/cookie-theme-toggler'],
      '@lidofinance/content-theme': ['packages/content-theme'],
    },
    target: 'es2019',
    loose: false,
    keepClassNames: true,
  },
  sourceMaps: true,
  minify: false,
}
