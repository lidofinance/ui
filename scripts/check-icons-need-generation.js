#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const SVG_DIR = path.resolve(__dirname, '../packages/icons/svg')
const COMPONENTS_DIR = path.resolve(__dirname, '../packages/icons/components')

const convertToPascalCase = (name) => {
  return name
    .match(/([a-z0-9]+)/gi)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

const getComponentName = (svgPath, fileName) => {
  const relativePath = path.relative(SVG_DIR, svgPath)
  const dirNames = path.dirname(relativePath).split(path.sep).filter(Boolean)
  const iconCategory = dirNames[0]?.toLowerCase() || 'root'
  const baseName = path.basename(fileName, '.svg')

  let componentName = convertToPascalCase(baseName)

  switch (iconCategory) {
    case 'logo':
      componentName = `${componentName}Logo`
      break
    case 'network':
      componentName = `${componentName}Icon`
      break
    case 'lidoproject':
      componentName = `Lido${componentName}`
      break
  }

  return { componentName, componentPath: dirNames.join('/') }
}

const checkIconsNeedGeneration = () => {
  try {
    const stagedFiles = process.argv.slice(2)
    const svgFiles = stagedFiles.filter(
      (file) => file.startsWith('packages/icons/svg/') && file.endsWith('.svg'),
    )

    if (svgFiles.length === 0) {
      process.exit(1) // No SVG files changed
    }

    for (const svgFile of svgFiles) {
      const fullSvgPath = path.resolve(svgFile)
      const fileName = path.basename(svgFile)
      const { componentName, componentPath } = getComponentName(
        fullSvgPath,
        fileName,
      )

      const componentFile = componentPath
        ? path.join(COMPONENTS_DIR, componentPath, `${componentName}.tsx`)
        : path.join(COMPONENTS_DIR, `${componentName}.tsx`)

      if (!fs.existsSync(componentFile)) {
        process.exit(0) // Component doesn't exist, generation needed
      }
    }

    process.exit(1)
  } catch (error) {
    process.exit(0)
  }
}

checkIconsNeedGeneration()
