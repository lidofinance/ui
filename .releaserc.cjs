module.exports = {
  branches: [
    { name: 'lido-ui-v4' },
    {
      name: 'lido-ui-v4-canary', "channel": "alpha", "prerelease": "alpha"
    },
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
    '@semantic-release/release-notes-generator',
    '@semrel-extra/npm',
  ],
  verifyConditions: [],
}
