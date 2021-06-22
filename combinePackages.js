const path = require('path')
const fs = require('fs')
const { listWorkspaces } = require('yarn-workspaces-list')

const excludedWorkspaces = ['.', 'packages/lido-ui']

;(async () => {
  const packages = await listWorkspaces()
  const filteredPackages = packages.filter(
    ({ location }) => !excludedWorkspaces.includes(location)
  )

  const mainPackage = packages.find(
    ({ location }) => location === 'packages/lido-ui'
  )

  updatePackageJson(filteredPackages, mainPackage)
  updateIndexFile(filteredPackages, mainPackage)
})()

const updatePackageJson = (packages, mainPackage) => {
  const packageDir = mainPackage.location
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(packageDir, 'package.json'), 'utf-8')
  )

  packageJson.dependencies = packages.reduce((acc, { name }) => {
    acc[name] = 'workspace:*'
    return acc
  }, {})

  const packageJsonContent = JSON.stringify(packageJson, null, 2) + '\n'
  fs.writeFileSync(path.join(packageDir, 'package.json'), packageJsonContent)
}

const updateIndexFile = (packages, mainPackage) => {
  const packageDir = mainPackage.location
  const indexContent =
    packages.map(({ name }) => `export * from '${name}'`).join('\n') + '\n'

  fs.writeFileSync(path.join(packageDir, 'src/index.ts'), indexContent)
}
