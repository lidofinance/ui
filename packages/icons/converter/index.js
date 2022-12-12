const svgr = require('@svgr/core').default
const svgrSvgo = require('@svgr/plugin-svgo').default
const svgrJsx = require('@svgr/plugin-jsx').default
const svgrPrettier = require('@svgr/plugin-prettier').default
const indexTemplate = require('./template.index.js')

const fs = require('fs/promises')
const { extname, resolve } = require('path')

const SRC_DIR = resolve(__dirname, '../svg')
const DEST_FILE = resolve(__dirname, '../index.tsx')

const svgoConfig = {
  plugins: [
    { removeStyleElement: true },
    { removeScriptElement: true },
    { removeViewBox: false },
    { removeTitle: false },
    { removeUnknownsAndDefaults: false },
    {
      removeAttrs: {
        attrs: [
          '(class|style)',
          'svg:fill',
          'aria-labelledby',
          'aria-describedby',
          'xmlns:xlink',
          'xmlns',
          'data-name',
        ],
      },
    },
  ],
  multipass: true,
}

const upperFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const convertToPascalCase = (name) => {
  return name
    .match(/([a-z0-9]+)/gi)
    .map(upperFirst)
    .join('')
}

const readFolder = async (folder) => {
  const files = await fs.readdir(folder)
  const filtered = files.filter((file) => extname(file) === '.svg')

  return await Promise.all(
    filtered.map(async (file) => {
      const data = await fs.readFile(resolve(folder, file))

      return {
        code: data.toString(),
        name: file.replace('.svg', ''),
      }
    })
  )
}

const convertFiles = async () => {
  const svgData = await readFolder(SRC_DIR)

  const componentsCode = await Promise.all(
    svgData.map(async ({ code, name }) => {
      const componentName = convertToPascalCase(name)

      return await svgr(
        code,
        {
          icon: false,
          ref: true,
          svgo: true,
          typescript: true,
          svgoConfig,
          svgProps: {
            fill: 'currentColor',
          },
          plugins: [svgrSvgo, svgrJsx, svgrPrettier],
          template: require('./template.component.js'),
        },
        { componentName }
      )
    })
  )

  const content = indexTemplate(componentsCode)
  fs.writeFile(DEST_FILE, content)
}

convertFiles()
