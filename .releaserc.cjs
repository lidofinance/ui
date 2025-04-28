module.exports = {
  branches: [
    { name: 'lido-ui-v4' },
    {
      name: 'lido-ui-v4-canary', "channel": "alpha", "prerelease": "alpha"
    },{
      name: 'feature/we-1997-add-possibility-to-publish-releases-with-release-notes-for', "channel": "alpha", "prerelease": "test"
    },
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
    '@semantic-release/release-notes-generator',
    //'@semrel-extra/npm',
    [
      "@semantic-release/github",
      {
        "assets": [
          { "path": "dist", "label": "Built library" }
        ]
      }
    ]
  ],
  verifyConditions: [],
}
