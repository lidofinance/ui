#!/usr/bin/env yarn zx
/*global fs*/

const baseConfig = require('./swcrc-template.cjs')

const defaultConfig = {
  ...baseConfig,
  exclude: undefined,
  env: undefined,
}

const cjsConfig = {
  ...baseConfig,
  module: {
    ...(baseConfig.module ?? {}),
    type: 'commonjs',
  },
}

const esmConfig = {
  ...baseConfig,
  module: {
    ...(baseConfig.module ?? {}),
    type: 'es6',
  },
}

const generateConfig = (name, config) => {
  fs.writeFileSync(name, JSON.stringify(config, null, 2))
}

generateConfig('.swcrc', defaultConfig)
generateConfig('.swcrc.commonjs', cjsConfig)
generateConfig('.swcrc.esm', esmConfig)
