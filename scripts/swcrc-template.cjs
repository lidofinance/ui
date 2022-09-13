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
      '@lidofinance/heading': ['packages/heading/src/index.tsx'],
      '@lidofinance/hooks': ['packages/hooks/src/index.ts'],
      '@lidofinance/icons': ['packages/icons/src/index.tsx'],
      '@lidofinance/identicon': ['packages/identicon/src/index.ts'],
      '@lidofinance/input': ['packages/input/src/index.ts'],
      '@lidofinance/lido-logo': ['packages/lido-logo/src/index.ts'],
      '@lidofinance/link': ['packages/link/src/index.ts'],
      '@lidofinance/loaders': ['packages/loaders/src/index.ts'],
      '@lidofinance/main-menu': ['packages/main-menu/src/index.ts'],
      '@lidofinance/modal': ['packages/modal/src/index.ts'],
      '@lidofinance/pagination': ['packages/pagination/src/index.ts'],
      '@lidofinance/popover': ['packages/popover/src/index.ts'],
      '@lidofinance/popup-menu': ['packages/popup-menu/src/index.ts'],
      '@lidofinance/select': ['packages/select/src/index.ts'],
      '@lidofinance/service-page': ['packages/service-page/src/index.ts'],
      '@lidofinance/stack': ['packages/stack/src/index.ts'],
      '@lidofinance/styled-system': ['packages/styled-system/src/index.ts'],
      '@lidofinance/table': ['packages/table/src/index.ts'],
      '@lidofinance/text': ['packages/text/src/index.ts'],
      '@lidofinance/theme': ['packages/theme/src/index.ts'],
      '@lidofinance/toast': ['packages/toast/src/index.ts'],
      '@lidofinance/tooltip': ['packages/tooltip/src/index.ts'],
      '@lidofinance/transition': ['packages/transition/src/index.ts'],
      '@lidofinance/utils': ['packages/utils/src/index.ts'],
      '@lidofinance/cookie-theme-toggler': ['packages/cookie-theme-toggler'],
    },
    target: 'es2019',
    loose: false,
    keepClassNames: true,
  },
  sourceMaps: true,
  minify: false,
}
