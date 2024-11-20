module.exports = {
  branches: [
    { name: 'lido-ui-v4' },
    { name: 'next', channel: 'next', prerelease: true },
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
    '@semantic-release/release-notes-generator',
    '@semrel-extra/npm',
  ],
  verifyConditions: [],
}
