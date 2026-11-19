// Every src/<folder> needs a story, a test and a barrel export, or a reasoned exemption.
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const src = path.join(root, 'src')
const indexSource = readFileSync(path.join(src, 'index.ts'), 'utf8')

const filesIn = (name) =>
  readdirSync(path.join(src, name), { recursive: true }).map(String)

const kinds = {
  story: (name) => filesIn(name).some((f) => f.endsWith('.stories.tsx')),
  test: (name) => filesIn(name).some((f) => /\.test\.tsx?$/.test(f)),
  export: (name) => new RegExp(`from '\\./${name}(/[^']*)?'`).test(indexSource),
}

const folders = readdirSync(src, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)

const exemptionsPath = path.join(root, 'coverage-exemptions.json')
const exemptions = existsSync(exemptionsPath)
  ? JSON.parse(readFileSync(exemptionsPath, 'utf8'))
  : {}

const problems = []

for (const [name, kindMap] of Object.entries(exemptions)) {
  if (!folders.includes(name)) {
    problems.push(
      `${name} is in coverage-exemptions.json but is not a folder in src.`,
    )
    continue
  }
  for (const kind of Object.keys(kindMap)) {
    if (!(kind in kinds)) {
      problems.push(`${name} has an unknown exemption kind "${kind}".`)
    }
  }
}

for (const name of folders) {
  for (const [kind, has] of Object.entries(kinds)) {
    const present = has(name)
    const exempt = Boolean(exemptions[name]?.[kind])
    if (!present && !exempt) {
      problems.push(
        `${name} has no ${kind}. Add it, or a reason to coverage-exemptions.json.`,
      )
    }
    if (present && exempt) {
      problems.push(
        `${name} has ${kind} now. Remove its exemption from coverage-exemptions.json.`,
      )
    }
  }
}

if (problems.length) {
  console.error(problems.join('\n'))
  process.exit(1)
}
console.log(`Coverage OK: ${folders.length} folders checked.`)
