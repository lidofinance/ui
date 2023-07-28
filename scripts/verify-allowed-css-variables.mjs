const getDefinedVariables = async () => {
  const content = await fs.readFile('./packages/theme/theme.css', 'utf-8')
  const matches = content.match(/--lido-[^:]+/g)
  return new Set(matches)
}

const getUsedVariables = async () => {
  const files = await glob('packages/**/*.module.css')
  const usedVars = (await Promise.all(files.map(async file => {
    const content = await fs.readFile(file, 'utf-8')
    const matches = content.match(/var\(--lido-[^,)]+\)/g)
    const vars = matches?.map(rawVariable => rawVariable.match(/--lido-[^,)]+/)?.[0])
    return vars
  })))
    .flat()
    .filter(result => result != null)
  return new Set(usedVars)
}

// TODO: this can by stylelint plugin
const main = async () => {
  const usedVars = await getUsedVariables()
  const definedVars = await getDefinedVariables()
  // console.log(definedVars)
  const usedButNotDefined = [...usedVars].filter(usedVar => !definedVars.has(usedVar))
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