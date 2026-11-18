const { transform } = require('@svgr/core')
const svgrSvgo = require('@svgr/plugin-svgo').default
const svgrJsx = require('@svgr/plugin-jsx')
const svgrPrettier = require('@svgr/plugin-prettier')
const prettierConfig = require('../../../../../.prettierrc.cjs')
const fs = require('fs/promises')
const { extname, resolve } = require('path')

const SRC_DIR = resolve(__dirname, '../svg')
const DEST_DIR = resolve(__dirname, '../components')
const BUILD_DIR = resolve(__dirname, '../.components-build')
const MAPS_FILE = resolve(__dirname, '../iconMaps.tsx')
const ICONS_FILE = resolve(__dirname, '../allIcons.tsx')

const svgoConfig = (convertAllToCurrentColor, prefix) => {
  return {
    plugins: [
      {
        convertStopColorToCurrentColor: {
          type: 'perItem',
          fn: (item) => {
            if (!convertAllToCurrentColor) {
              return
            }
            if (item.isElem('stop')) {
              item.removeAttr('stop-color')
              item.removeAttr('stopColor')
              item.addAttr({
                name: 'stop-color',
                value: 'currentColor',
                prefix: '',
                local: 'stop-color',
              })
            }
          },
        },
      },
      { removeStyleElement: true },
      { removeScriptElement: true },
      { removeViewBox: false },
      { removeTitle: false },
      {
        prefixIds: {
          prefix: prefix,
        },
      },
      {
        convertColors: {
          currentColor: {
            exec: (a) => {
              if (a === 'none' || a.indexOf('url(#') === 0) {
                return false
              }
              return convertAllToCurrentColor
            },
          },
        },
      },

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
            'preserveAspectRatio',
            'overflow',
          ],
        },
      },
    ],
    multipass: true,
  }
}

const upperFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Collapses runs of 2+ consecutive uppercase letters/digits (acronyms) down
// to a single capitalized word, e.g. "KELP" -> "Kelp", "ETH" in "abcETH" -> "Eth".
// Everything else keeps its original casing (e.g. "OpenSea" is untouched).
const normalizeAcronyms = (word) => {
  return word.replace(/[A-Z0-9]{2,}/g, (match) =>
    upperFirst(match.toLowerCase()),
  )
}

const convertToPascalCase = (name) => {
  return (name.match(/([a-zA-Z0-9]+)/g) || [])
    .map((word) => upperFirst(normalizeAcronyms(word)))
    .join('')
}

const readFolder = async (folder, basePath = '') => {
  const files = await fs.readdir(folder, { withFileTypes: true })

  const results = await Promise.all(
    files.map(async (file) => {
      const filePath = resolve(folder, file.name)

      if (file.isDirectory()) {
        // Recursively read subdirectories
        const nestedPath = basePath ? `${basePath}/${file.name}` : file.name
        return await readFolder(filePath, nestedPath)
      } else if (extname(file.name) === '.svg') {
        // Process SVG files
        const data = await fs.readFile(filePath)
        const relativePath = basePath ? `${basePath}/${file.name}` : file.name

        return [
          {
            code: data.toString(),
            name: file.name.replace('.svg', ''),
            path: relativePath,
          },
        ]
      }

      return []
    }),
  )

  // Flatten the array of arrays
  return results.flat()
}

const convertFiles = async () => {
  const svgData = await readFolder(SRC_DIR)

  await fs.rm(BUILD_DIR, { recursive: true, force: true })
  await fs.mkdir(BUILD_DIR, { recursive: true })

  // Keep track of all components for the index file
  const componentExports = []
  // Keep track of component names to avoid duplicates
  const componentNames = new Set()
  // Group components by directory for folder-specific index files
  const componentsByDirectory = {}

  // Process each SVG file
  for (const { code, name, path } of svgData) {
    // Use just the base name for the component, but keep track of the path
    let componentPath = ''
    let dirNames = []

    if (path && path.includes('/')) {
      const pathParts = path.split('/')
      // Remove the file name (last part) and use the directory names for the path
      dirNames = pathParts.slice(0, -1)
      // Create the directory path for the component file
      componentPath = dirNames.join('/')
    }
    const iconCategory = dirNames[0]?.toLowerCase() || 'root'
    const replaceCurrentColor = iconCategory === 'base'

    // Convert just the name to PascalCase for the component name
    let componentName = convertToPascalCase(name)
    switch (iconCategory) {
      case 'base':
        componentName = `Icon${componentName}`
        break
      case 'token':
        componentName = `Token${componentName}`
        break
    }
    const key = componentName.toLowerCase()
    if (componentNames.has(key)) {
      // Case-insensitive: macOS would write both to one file.
      throw new Error(
        `Duplicate icon name "${componentName}" (from ${path}); rename one of the SVGs.`,
      )
    }
    componentNames.add(key)

    // Create the component code
    const componentCode = await transform(
      code,
      {
        icon: false,
        svgo: true,
        typescript: true,
        prettier: true,
        prettierConfig,
        svgProps: {
          fill: 'none',
        },
        svgoConfig: svgoConfig(replaceCurrentColor, componentName),
        jsx: {
          babelConfig: {
            plugins: ['react-inline-svg-unique-id'],
          },
        },
        plugins: [svgrSvgo, svgrJsx, svgrPrettier],
        template: require('./template.component.cjs'),
      },
      { componentName },
    )

    // Create the directory for the component if it doesn't exist
    const componentDir = componentPath
      ? resolve(BUILD_DIR, componentPath)
      : BUILD_DIR
    await fs.mkdir(componentDir, { recursive: true })

    // Write the component file
    const componentFileName = `${componentName}.tsx`
    const componentFilePath = resolve(componentDir, componentFileName)

    // Add import/export info for the index file
    const relativePath = componentPath
      ? `./components/${componentPath}/${componentName}`
      : `./components/${componentName}`

    // Add to main index exports
    componentExports.push({
      componentName,
      importPath: relativePath,
    })

    // Add to directory-specific exports
    const directoryKey = componentPath || 'root'
    if (!componentsByDirectory[directoryKey]) {
      componentsByDirectory[directoryKey] = []
    }
    componentsByDirectory[directoryKey].push({
      componentName,
      componentFileName,
    })

    // Add the React import to the component file
    const fullComponentCode = [
      '// THIS FILE IS AUTO GENERATED\n',
      "import React, { SVGProps } from 'react'\n",
      componentCode,
    ].join('\n')

    await fs.writeFile(componentFilePath, fullComponentCode)
  }

  const iconMapsNames = []
  // Create directory-specific index files
  for (const [directory, components] of Object.entries(componentsByDirectory)) {
    if (directory === 'root') continue // Skip root directory

    // Create a constant name for the directory (e.g., BASE_ICONS, LOGO_ICONS)
    const constName = directory.split('/').pop().toUpperCase() + '_ICONS_MAP'
    iconMapsNames.push(constName)
    // Create the index content with individual exports
    let dirIndexContent = `// THIS FILE IS AUTO GENERATED\n\n${components
      .map(
        ({ componentName }) =>
          `export { ${componentName} } from './${componentName}'`,
      )
      .join('\n')}\n`

    // Create the index content with individual exports
    let objectExportFileContent = `// THIS FILE IS AUTO GENERATED\n\n${components
      .map(
        ({ componentName }) =>
          `import { ${componentName} } from './${componentName}'`,
      )
      .join('\n')}\n\n`

    // Add the constant object with all icons
    objectExportFileContent += `/** @deprecated Import the icon components directly. */\n`
    objectExportFileContent += `export const ${constName} = {\n`
    objectExportFileContent += components
      .map(({ componentName }) => `  ${componentName},`)
      .join('\n')
    objectExportFileContent += `\n}\n`

    const dirIndexDir = resolve(BUILD_DIR, directory)
    await fs.mkdir(dirIndexDir, { recursive: true })
    const dirIndexPath = resolve(dirIndexDir, 'index.tsx')
    const objectExportFilePath = resolve(dirIndexDir, 'iconsMap.tsx')

    await fs.writeFile(dirIndexPath, dirIndexContent)
    await fs.writeFile(objectExportFilePath, objectExportFileContent)
  }

  await fs.rm(DEST_DIR, { recursive: true, force: true })
  await fs.rename(BUILD_DIR, DEST_DIR)

  // Create the main index file that exports from sub-folder index files
  const uniqueDirectories = [
    ...new Set(
      componentExports.map(({ importPath }) => {
        const pathParts = importPath.split('/')
        return pathParts.slice(0, pathParts.length - 1).join('/')
      }),
    ),
  ]

  const indexContent = `// THIS FILE IS AUTO GENERATED\n\n${uniqueDirectories
    .map((directory) => `export * from '${directory}'`)
    .join('\n')}
`

  await fs.writeFile(ICONS_FILE, indexContent)

  const mapsContent = `// THIS FILE IS AUTO GENERATED\n\n${uniqueDirectories
    .map((directory) => `export * from '${directory}/iconsMap'`)
    .join('\n')}\n`

  await fs.writeFile(MAPS_FILE, mapsContent)
}

convertFiles().catch(async (error) => {
  await fs.rm(BUILD_DIR, { recursive: true, force: true })
  console.error(error)
  process.exit(1)
})
