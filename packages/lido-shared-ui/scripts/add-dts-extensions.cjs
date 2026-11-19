// Node ESM type resolution (node16/nodenext) needs explicit extensions in relative d.ts specifiers.
const fs = require('fs')
const path = require('path')

const SPECIFIER =
  /(\bfrom\s+|\bimport\s*\(\s*|\bimport\s+)(['"])(\.{1,2}\/[^'"]*)\2/g

const resolveSpecifier = (dir, spec) => {
  if (/\.(js|mjs|cjs|json|css)$/.test(spec)) return spec
  const target = path.resolve(dir, spec)
  if (fs.existsSync(`${target}.d.ts`)) return `${spec}.js`
  if (fs.existsSync(path.join(target, 'index.d.ts'))) return `${spec}/index.js`
  throw new Error(`add-dts-extensions: cannot resolve "${spec}" from ${dir}`)
}

const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(file)
    else if (entry.name.endsWith('.d.ts')) {
      const source = fs.readFileSync(file, 'utf8')
      const output = source.replace(SPECIFIER, (_, prefix, quote, spec) => {
        const resolved = resolveSpecifier(path.dirname(file), spec)
        return `${prefix}${quote}${resolved}${quote}`
      })
      if (output !== source) fs.writeFileSync(file, output)
    }
  }
}

walk(path.resolve(process.argv[2]))
