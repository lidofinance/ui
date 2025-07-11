module.exports = {
  branches: [
    { name: 'lido-ui-v4' },
    {
      name: 'lido-ui-v4-canary', "channel": "alpha", "prerelease": "alpha"
    },
    {
      name: 'release-beta-version', "channel": "alpha", "prerelease": "beta"
    }
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
    '@semantic-release/release-notes-generator',
    '@semrel-extra/npm',
    [
      "@semantic-release/github"
    ]
  ],
  verifyConditions: [],
}
