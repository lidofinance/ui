const { transform } = require('@svgr/core')
const svgrSvgo = require('@svgr/plugin-svgo').default
const svgrJsx = require('@svgr/plugin-jsx')
const svgrPrettier = require('@svgr/plugin-prettier')
const prettierConfig = require('../../../.prettierrc.cjs')
const fs = require('fs/promises')
const { extname, resolve } = require('path')

const SRC_DIR = resolve(__dirname, '../svg')
const DEST_DIR = resolve(__dirname, '../components')
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
              if (a.indexOf('url(#') === 0) {
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

const convertToPascalCase = (name) => {
  return name
    .match(/([a-z0-9]+)/gi)
    .map(upperFirst)
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

  // Ensure the components directory exists and clear it
  await fs.rm(DEST_DIR, { recursive: true, force: true })
  await fs.mkdir(DEST_DIR, { recursive: true })

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
    const replaceCurrentColor = ['logo', 'base'].includes(iconCategory)

    // Convert just the name to PascalCase for the component name
    let componentName = convertToPascalCase(name)
    switch (iconCategory) {
      case 'logo':
        componentName = `${componentName}Logo`
        break
      case 'network':
        componentName = `${componentName}Icon`
        break
      case 'lidoProject':
        componentName = `Lido${componentName}`
        break
    }
    // Check if this component name already exists
    // If it does, include the directory name to make it unique
    if (componentNames.has(componentName)) {
      // If there's a directory path, include it in the component name
      if (componentPath) {
        const uniqueNameBase = [...dirNames, name].join('_')
        componentName = convertToPascalCase(uniqueNameBase)
      } else {
        // If there's no directory path, we need to make the name unique somehow
        // This is a fallback, but shouldn't happen in practice
        componentName = `${componentName}_${componentExports.length}`
      }
    }

    // Add the component name to the set of used names
    componentNames.add(componentName)

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
      ? resolve(DEST_DIR, componentPath)
      : DEST_DIR
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
      .join('\n')}\n\n`

    // Create the index content with individual exports
    let objectExportFileContent = `// THIS FILE IS AUTO GENERATED\n\n${components
      .map(
        ({ componentName }) =>
          `import { ${componentName} } from './${componentName}'`,
      )
      .join('\n')}\n\n`

    // Add the constant object with all icons
    objectExportFileContent += `// Export a constant with all icons in this directory\n`
    objectExportFileContent += `export const ${constName} = {\n`
    objectExportFileContent += components
      .map(({ componentName }) => `  ${componentName},`)
      .join('\n')
    objectExportFileContent += `\n}\n`

    const dirIndexDir = resolve(DEST_DIR, directory)
    await fs.mkdir(dirIndexDir, { recursive: true })
    const dirIndexPath = resolve(dirIndexDir, 'index.tsx')
    const objectExportFilePath = resolve(dirIndexDir, 'iconsMap.tsx')

    await fs.writeFile(dirIndexPath, dirIndexContent)
    await fs.writeFile(objectExportFilePath, objectExportFileContent)
  }

  // Create the main index file that exports from sub-folder index files
  const uniqueDirectories = [
    ...new Set(
      componentExports.map(({ importPath }) => {
        const pathParts = importPath.split('/')
        return pathParts.slice(0, pathParts.length - 1).join('/')
      }),
    ),
  ]

  const indexContent = `// THIS FILE IS AUTO GENERATED\n\n
  ${uniqueDirectories
    .map((directory) => `export * from '${directory}';`)
    .join('\n')}\n`

  await fs.writeFile(ICONS_FILE, indexContent)

  const mapsContent = `// THIS FILE IS AUTO GENERATED\n\n
  ${uniqueDirectories
    .map((directory) => `export * from '${directory}/iconsMap'`)
    .join('\n')}\n`

  await fs.writeFile(MAPS_FILE, mapsContent)
}

convertFiles()
