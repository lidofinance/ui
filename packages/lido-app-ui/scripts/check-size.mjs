// Gzip size budget for dist; run `yarn build` first, `--update` rewrites size-budget.json.
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { gzipSync } from 'node:zlib'
import { build } from 'esbuild'

const root = path.resolve(import.meta.dirname, '..')
const budgetPath = path.join(root, 'size-budget.json')
const barrel = path.join(root, 'dist/esm/index.mjs')
const cssPath = path.join(root, 'dist/index.css')

if (!existsSync(barrel) || !existsSync(cssPath)) {
  console.error('dist is missing: run yarn build first.')
  process.exit(1)
}

const external = [
  'react',
  'react-dom',
  'react/*',
  'react-dom/*',
  '@inline-svg-unique-id/react',
]

const gzipBundle = async (contents) => {
  const { outputFiles } = await build({
    stdin: { contents, resolveDir: root, loader: 'js' },
    bundle: true,
    minify: true,
    format: 'esm',
    platform: 'browser',
    write: false,
    external,
    tsconfigRaw: '{}',
    logLevel: 'silent',
  })
  return gzipSync(outputFiles[0].contents).length
}

const barrelImport = (names) =>
  `export { ${names} } from './dist/esm/index.mjs'`

const sizes = {
  'index (all exports)': await gzipBundle(
    `export * from './dist/esm/index.mjs'`,
  ),
}
for (const [entry, names] of [
  ['Button', 'Button'],
  ['Input', 'Input'],
  ['Select', 'Select'],
  ['Modal', 'Modal'],
  ['Tabs', 'Tabs'],
  ['Table', 'Table'],
  ['toast + Toaster', 'toast, Toaster'],
]) {
  sizes[entry] = await gzipBundle(barrelImport(names))
}
sizes['index.css'] = gzipSync(readFileSync(cssPath)).length

if (process.argv.includes('--update')) {
  const budget = Object.fromEntries(
    Object.entries(sizes).map(([k, v]) => [k, Math.ceil(v * 1.1)]),
  )
  writeFileSync(budgetPath, `${JSON.stringify(budget, null, 2)}\n`)
  console.log(`Wrote ${path.relative(root, budgetPath)}`)
  process.exit(0)
}

const budget = existsSync(budgetPath)
  ? JSON.parse(readFileSync(budgetPath, 'utf8'))
  : {}
const problems = []

console.log(
  'entry'.padEnd(22),
  'gzip'.padStart(8),
  'budget'.padStart(8),
  '%'.padStart(5),
)
for (const [entry, bytes] of Object.entries(sizes)) {
  const limit = budget[entry]
  if (limit === undefined) {
    problems.push(`${entry} has no budget. Run with --update.`)
    continue
  }
  const pct = Math.round((bytes / limit) * 100)
  console.log(
    entry.padEnd(22),
    String(bytes).padStart(8),
    String(limit).padStart(8),
    `${pct}%`.padStart(5),
  )
  if (bytes > limit) {
    problems.push(`${entry} is ${bytes} B gzip, over its ${limit} B budget.`)
  }
}
for (const entry of Object.keys(budget)) {
  if (!(entry in sizes)) {
    problems.push(
      `${entry} is in size-budget.json but not measured. Run with --update.`,
    )
  }
}

if (problems.length) {
  console.error(problems.join('\n'))
  process.exit(1)
}
