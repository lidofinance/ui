/*
 * This script was used during migration to css variables
 * to ensure all variables used in each component were declared.
 *
 * This is not establised part of pipeline, so use with caution and
 * double-check results.
 */
import fs, { glob } from 'node:fs/promises'

const getDefinedVariables = async () => {
  const content = await fs.readFile('./packages/theme/theme.css', 'utf-8')
  const matches = content.match(/--lido-ui-[^:]+/g)
  return new Set(matches)
}

const getUsedVariables = async () => {
  const files = await glob('packages/**/*.module.css')
  const usedVars = (
    await Promise.all(
      files.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const matches = content.match(/var\(--lido-ui-[^,)]+[),]/g)
        const vars = matches?.map(
          (rawVariable) => rawVariable.match(/--lido-ui-[^,)]+/)?.[0],
        )
        return vars
      }),
    )
  )
    .flat()
    .filter((result) => result != null)
  return new Set(usedVars)
}

const main = async () => {
  const usedVars = await getUsedVariables()
  const definedVars = await getDefinedVariables()
  const usedButNotDefined = [...usedVars].filter(
    (usedVar) => !definedVars.has(usedVar),
  )
  if (usedButNotDefined.length === 0) {
    console.log('All used variables are defined')
    process.exit(0)
  }

  for (let weirdVar of usedButNotDefined) {
    console.error(`var(${weirdVar}) used but not defined`)
  }
  process.exit(1)
}

void main()
