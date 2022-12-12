#!/usr/bin/env yarn zx
/*global fs*/

const baseConfig = require('./swcrc-template.cjs')

const devConfig = {
  ...baseConfig,
  jsc: {
    ...(baseConfig.jsc ?? {}),
    externalHelpers: false,
  },
}

const prodConfig = {
  ...baseConfig,
  jsc: {
    ...(baseConfig.jsc ?? {}),
    externalHelpers: true,
  },
  env: {
    targets: {
      chrome: '69',
      firefox: '68',
      safari: '13.1',
      node: '12',
    },
    mode: 'entry',
    coreJs: '3.22',
  },
  exclude: '\\.(test|stories)\\.',
}

const cjsConfig = {
  ...prodConfig,
  module: {
    ...(prodConfig.module ?? {}),
    type: 'commonjs',
  },
}

const esmConfig = {
  ...prodConfig,
  module: {
    ...(prodConfig.module ?? {}),
    type: 'es6',
  },
}

const generateConfig = (name, config) => {
  fs.writeFileSync(name, JSON.stringify(config, null, 2))
}

generateConfig('.swcrc', devConfig)
generateConfig('.swcrc.commonjs', cjsConfig)
generateConfig('.swcrc.esm', esmConfig)
