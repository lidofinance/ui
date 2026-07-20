# Releases

## Overview

Releases are triggered automatically by CI:

- Pushes to `main` run [`publish-production.yml`](./.github/workflows/publish-production.yml) → production npm channel.
- Pushes to `release-alpha` run [`publish-alpha.yml`](./.github/workflows/publish-alpha.yml) → alpha npm channel (prerelease id `alpha`).

Both first call the shared [`_dry-run.yml`](./.github/workflows/_dry-run.yml) reusable workflow as a gate (builds all packages and runs `semantic-release --dry-run` for every package), then on success run the real build + release job:

- Build all packages (`yarn build`)
- Release packages if they need releasing (`yarn release`)

## Technical Setup

NPM token is stored as a repo secret (`NPM_TOKEN`) and passed as an environment variable to the release step.

Yarn 4.9 is used (via Corepack — see `packageManager` in [`package.json`](./package.json)) with the `node-modules` linker; PnP is disabled (see [`.yarnrc.yml`](./.yarnrc.yml)).

[semantic-release](https://github.com/semantic-release/semantic-release) parses commit messages (Conventional Commits preset) to determine version bumps. It runs once per package across the Yarn workspaces and reads versions from git tags to find the latest release per package.

Release configuration lives inline in the root [`package.json`](./package.json) — under the `"release"` key (branches, plugins) and the `"multi-release"` key (multi-package options) — rather than a separate `.releaserc.js` file.

[`@lidofinance/multi-semantic-release`](https://github.com/lidofinance/multi-semantic-release) (a Lido-maintained fork of [`dhoulb/multi-semantic-release`](https://github.com/dhoulb/multi-semantic-release)) is used to release all packages at once, accounting for their in-repo dependencies.

Current `multi-release.deps` settings (`package.json`):

```json
"deps": {
  "bump": "satisfy",
  "release": "patch",
  "prefix": "^"
}
```

With these settings, a package that depends on another released package gets a patch release cascaded to it whenever that dependency releases — e.g. when `lido-shared-ui` gets a new version, `lido-landing-ui` and `lido-app-ui` also get released.

## Known Issues

`publish-alpha.yml` has a `guard` job that checks `release-alpha` isn't behind `main` before running the alpha dry-run. This exists because semantic-release only sees tags reachable from the branch it runs on — if `release-alpha` hasn't had `main` merged into it recently, it can compute a version *below* the latest stable release. The guard fails closed (blocks the publish) if `release-alpha` is behind, or if the GitHub API comparison can't be read. Merge `main` into `release-alpha` before cutting an alpha release if this guard fails.

There are potential incompatibilities when dependencies of the packages and `@lidofinance/multi-semantic-release` are not updated for some time — check the Node version used by the release workflows (`.nvmrc`) against what `@lidofinance/multi-semantic-release` supports if releases start failing unexpectedly.
