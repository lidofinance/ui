import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distTypes = path.resolve(__dirname, '../dist/types')
const sharedDistTypes = path.resolve(__dirname, '../../shared/dist/types')

// Copy shared's built type declarations into dist/types/shared/
fs.cpSync(sharedDistTypes, path.join(distTypes, 'shared'), { recursive: true })

// Patch all .d.ts files: replace '@lidofinance/lido-shared-ui' with correct relative path
function patchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  if (!content.includes('@lidofinance/lido-shared-ui')) return

  const rel = path.relative(
    path.dirname(filePath),
    path.join(distTypes, 'shared'),
  )
  const relSpec = rel.startsWith('.') ? rel : './' + rel

  const patched = content.replaceAll(
    "'@lidofinance/lido-shared-ui'",
    `'${relSpec}'`,
  )
  fs.writeFileSync(filePath, patched)
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory() && entry.name !== 'shared') walk(full)
    else if (entry.name.endsWith('.d.ts')) patchFile(full)
  }
}

walk(distTypes)
console.log('Patched @lidofinance/lido-shared-ui references in dist/types/')
