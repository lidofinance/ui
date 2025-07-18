#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, '..')

// CSS files to scan
const cssFiles = [
  'styles/colors.css',
  'styles/colors-deprecated.css',
  'styles/typography-variables.css',
  'styles/variables.css',
]

// Additional files for breakpoints and mixins
const breakpointFiles = ['styles/breakpoints.css']
const mixinFiles = ['styles/typography-mixins.css']

function extractCSSVariables(cssText) {
  const variableRegex = /--[\w-]+(?=\s*:)/g
  const variables = cssText.match(variableRegex) || []
  return [...new Set(variables)].sort()
}

function extractCustomMediaBreakpoints(cssText) {
  const customMediaRegex = /@custom-media\s+(--[\w-]+)\s+\(([^)]+)\)/g
  const breakpoints = []
  let match

  while ((match = customMediaRegex.exec(cssText)) !== null) {
    breakpoints.push({
      name: match[1],
      mediaQuery: match[2],
      category: 'Breakpoints',
    })
  }

  return breakpoints
}

function extractDefineMixins(cssText) {
  // Handle multiline mixins with proper bracket counting
  const defineMixinRegex = /@define-mixin\s+([\w-]+)\s*\{/g
  const mixins = []
  let match

  while ((match = defineMixinRegex.exec(cssText)) !== null) {
    const mixinName = match[1]
    let bracketCount = 1
    let startIndex = match.index + match[0].length
    let endIndex = startIndex

    // Find matching closing bracket
    for (let i = startIndex; i < cssText.length && bracketCount > 0; i++) {
      if (cssText[i] === '{') bracketCount++
      else if (cssText[i] === '}') bracketCount--
      endIndex = i
    }

    if (bracketCount === 0) {
      const content = cssText.substring(startIndex, endIndex).trim()
      mixins.push({
        name: mixinName,
        content,
        category: 'Typography Mixins',
      })
    }
  }

  return mixins
}

function categorizeVariable(variableName) {
  const name = variableName.toLowerCase()

  if (name.includes('deprecated')) {
    return 'Deprecated'
  }

  if (name.includes('color-text')) {
    return 'Text Colors'
  }

  if (name.includes('color-icon')) {
    return 'Icon Colors'
  }

  if (name.includes('color-background')) {
    return 'Background Colors'
  }

  if (name.includes('color-border')) {
    return 'Border Colors'
  }

  if (
    name.includes('color') &&
    (name.includes('button') ||
      name.includes('primary') ||
      name.includes('secondary'))
  ) {
    return 'Button Colors'
  }

  if (
    name.includes('font') ||
    name.includes('letter-spacing') ||
    name.includes('line-height')
  ) {
    return 'Typography'
  }

  if (name.includes('border-radius') || name.includes('select-size')) {
    return 'Layout'
  }

  if (name.includes('ease') || name.includes('transition')) {
    return 'Animations'
  }

  if (
    name.includes('visibility') ||
    name.includes('display') ||
    name.includes('mode')
  ) {
    return 'Theme Utils'
  }

  if (name.includes('color')) {
    return 'Other Colors'
  }

  return 'Other'
}

function generateCSSVariables() {
  const allVariables = new Set()
  const allBreakpoints = []
  const allMixins = []

  console.log('Scanning CSS files for variables...')

  cssFiles.forEach((cssFile) => {
    const filePath = path.join(projectRoot, cssFile)

    if (!fs.existsSync(filePath)) {
      console.warn(`CSS file not found: ${filePath}`)
      return
    }

    console.log(`Processing: ${cssFile}`)
    const cssContent = fs.readFileSync(filePath, 'utf-8')
    const variables = extractCSSVariables(cssContent)

    console.log(`  Found ${variables.length} variables`)
    variables.forEach((variable) => allVariables.add(variable))
  })

  // Process breakpoint files
  console.log('\nScanning breakpoint files...')
  breakpointFiles.forEach((breakpointFile) => {
    const filePath = path.join(projectRoot, breakpointFile)

    if (!fs.existsSync(filePath)) {
      console.warn(`Breakpoint file not found: ${filePath}`)
      return
    }

    console.log(`Processing: ${breakpointFile}`)
    const cssContent = fs.readFileSync(filePath, 'utf-8')
    const breakpoints = extractCustomMediaBreakpoints(cssContent)

    console.log(`  Found ${breakpoints.length} breakpoints`)
    allBreakpoints.push(...breakpoints)
  })

  // Process mixin files
  console.log('\nScanning mixin files...')
  mixinFiles.forEach((mixinFile) => {
    const filePath = path.join(projectRoot, mixinFile)

    if (!fs.existsSync(filePath)) {
      console.warn(`Mixin file not found: ${filePath}`)
      return
    }

    console.log(`Processing: ${mixinFile}`)
    const cssContent = fs.readFileSync(filePath, 'utf-8')
    const mixins = extractDefineMixins(cssContent)

    console.log(`  Found ${mixins.length} mixins`)
    allMixins.push(...mixins)
  })

  const sortedVariables = Array.from(allVariables).sort()
  console.log(`\nTotal unique variables found: ${sortedVariables.length}`)
  console.log(`Total breakpoints found: ${allBreakpoints.length}`)
  console.log(`Total mixins found: ${allMixins.length}`)

  const tsContent = `// Auto-generated file - do not edit manually
// Generated on ${new Date().toISOString()}

export type CSSVariableInfo = {
  name: string
  category: string
}

export type BreakpointInfo = {
  name: string
  mediaQuery: string
  category: string
}

export type MixinInfo = {
  name: string
  content: string
  category: string
}

export const cssVariablesList: CSSVariableInfo[] = [
${sortedVariables
  .map(
    (variable) =>
      `  { name: '${variable}', category: '${categorizeVariable(variable)}' },`,
  )
  .join('\n')}
]

export const breakpointsList: BreakpointInfo[] = [
${allBreakpoints
  .map(
    (breakpoint) =>
      `  { name: '${breakpoint.name}', mediaQuery: '${breakpoint.mediaQuery}', category: '${breakpoint.category}' },`,
  )
  .join('\n')}
]

export const mixinsList: MixinInfo[] = [
${allMixins
  .map(
    (mixin) =>
      `  { name: '${mixin.name}', content: \`${mixin.content}\`, category: '${mixin.category}' },`,
  )
  .join('\n')}
]

export const cssVariablesByCategory = {
${[...new Set(sortedVariables.map(categorizeVariable))]
  .sort()
  .map(
    (category) =>
      `  '${category}': [${sortedVariables
        .filter((v) => categorizeVariable(v) === category)
        .map((v) => `'${v}'`)
        .join(', ')}],`,
  )
  .join('\n')}
}

export const breakpointsByCategory = {
${[...new Set(allBreakpoints.map((b) => b.category))]
  .sort()
  .map(
    (category) =>
      `  '${category}': [${allBreakpoints
        .filter((b) => b.category === category)
        .map((b) => `'${b.name}'`)
        .join(', ')}],`,
  )
  .join('\n')}
}

export const mixinsByCategory = {
${[...new Set(allMixins.map((m) => m.category))]
  .sort()
  .map(
    (category) =>
      `  '${category}': [${allMixins
        .filter((m) => m.category === category)
        .map((m) => `'${m.name}'`)
        .join(', ')}],`,
  )
  .join('\n')}
}
`

  // Write to packages/design-variables/css-variables.generated.ts
  const outputPath = path.join(
    projectRoot,
    'packages/design-variables/css-variables.generated.ts',
  )
  fs.writeFileSync(outputPath, tsContent)
  console.log(`\nGenerated: ${outputPath}`)
}

generateCSSVariables()
