const buildPackages = async () => {
  console.log('🏎️  Building packages...')
  await $`vite build`
}

const buildTypes = async () => {
  console.log('🏎️  Building types...')
  await $`tsc -p tsconfig.build.json`
}

const concatAssets = async ({ from, to }) => {
  const files = await glob(from)
  const filesContent = await Promise.all(files.map((file) => fs.readFile(file)))
  const result = filesContent.join('\n')
  await fs.writeFile(to, result)
  console.log(`${files.length} concatenated`)
  console.log(to)
}

const buildPostcssExport = async () => {
  console.log('🏎️  Building PostCSS export...')
  await concatAssets({
    from: ['packages/theme/breakpoints.css'],
    to: 'dist/postcss.css',
  })
}

const polyfillCSSLayrs = async () => {
  console.log('🏎️  Polyfilling cascade layers')
  await $`postcss --use '@csstools/postcss-cascade-layers' --replace dist/style.css`
}

const main = async () => {
  await buildPackages()
  await buildTypes()
  await buildPostcssExport()
  // await polyfillCSSLayrs()
}

main()
