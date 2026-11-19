# Releases

## Overview

Production releases are triggered automatically by CI; alpha releases are manual:

- Pushes to `main` run [`publish-production.yml`](./.github/workflows/publish-production.yml) → production npm channel, then build and deploy all Storybooks to GitHub Pages. It first calls the shared [`_dry-run.yml`](./.github/workflows/_dry-run.yml) reusable workflow as a gate (builds all packages and runs `semantic-release --dry-run` for every package), then on success runs the real build + release job:
  - Build all packages (`yarn build`)
  - Release packages if they need releasing (`yarn release`)
- Alpha releases of a `release-alpha-*` branch are started by hand via [`publish-alpha.yml`](./.github/workflows/publish-alpha.yml) (see below). Storybook is not deployed for alpha.

### Manual alpha release of a branch

[`publish-alpha.yml`](./.github/workflows/publish-alpha.yml) is a `workflow_dispatch` workflow that runs the semantic-release flow for a `release-alpha-*` branch. Run it **from `main`** (the `production` environment only allows `main`) and pass the branch as the `ref` input — it must match `release-alpha-*` (lowercase letters, digits, dashes). It has three jobs, `guard → dry-run → publish`:

- **`guard`** rejects branches that don't match `release-alpha-*` and branches behind `main` (semantic-release only sees tags reachable from the branch, so without `main` merged in it can compute a version below the latest stable). It pins the branch to a commit SHA and writes the diff link and the list of build-affecting files (`package.json`, `yarn.lock`, `.github/`, ...) to the job summary for the reviewer. `dry-run` and `publish` fail if the branch has moved since.
- **`dry-run`** (environment `npm-dry-run`, no approval) checks out `ref`, builds and runs `yarn release --dry-run`, so the planned versions and tags are visible in the job summary before the approval. It has `contents: write` because semantic-release checks push access even in dry-run mode, and `NPM_TOKEN` must be available in the `npm-dry-run` environment.
- **`publish`** (environment `production`, manual approval) checks out the same commit, builds and runs `yarn release` with `provenance=true`.
- The branch is picked up by a static entry in `release.branches` (`package.json`): `{ name: "release-alpha-*", channel/prerelease: "${name.replace(/^release-/, '')}" }` — semantic-release expands the glob against remote branches, so `release-alpha-foo` gives `1.5.0-alpha-foo.1`, dist-tag `alpha-foo`. A per-branch id avoids version/dist-tag collisions between branches. Nothing is rewritten at runtime.
- `GITHUB_REF` is overridden to the real branch before `yarn release`: otherwise semantic-release sees `refs/heads/main` and would publish a stable release from the branch.
- Branch code runs in the same job as `NPM_TOKEN` (in both `dry-run` and `publish`); keep the `production` environment protected and review the diff that `guard` prints.
- Runs are serialized per branch (`concurrency` group `publish-alpha-<ref>`), so a run waiting for approval does not block other branches.
- Like any semantic-release run it pushes git tags and creates GitHub releases for these prereleases.
- Install with `yarn add @lidofinance/lido-app-ui@alpha-foo`.

## Technical Setup

NPM token is stored as the `NPM_TOKEN` secret (in the `production` environment, and in `npm-dry-run` for the dry-run job) and passed as an environment variable to the release step.

Yarn 4.9 is used (via Corepack — see `packageManager` in [`package.json`](./package.json)) with the `node-modules` linker; PnP is disabled (see [`.yarnrc.yml`](./.yarnrc.yml)).

[semantic-release](https://github.com/semantic-release/semantic-release) parses commit messages (Conventional Commits preset) to determine version bumps. It runs once per package across the Yarn workspaces and reads versions from git tags to find the latest release per package.

Release configuration lives inline in the root [`package.json`](./package.json) — under the `"release"` key (branches, plugins) and the `"multi-release"` key (multi-package options) — rather than a separate `.releaserc.js` file.

[`@lidofinance/multi-semantic-release`](https://github.com/lidofinance/multi-semantic-release) (a Lido-maintained fork of [`dhoulb/multi-semantic-release`](https://github.com/dhoulb/multi-semantic-release)) is used to release all packages at once, accounting for their in-repo dependencies.

Current `multi-release.deps` settings (`package.json`):

```json
"deps": {
  "bump": "override",
  "release": "patch",
  "prefix": "^"
}
```

With these settings, a dependent's version range for another released package is overwritten with the new version (`bump: override`, prefixed with `^`), and the dependent gets a patch release cascaded to it whenever that dependency releases — e.g. when `lido-shared-ui` gets a new version, `lido-landing-ui` and `lido-app-ui` also get released.

### Slack notifications

The [`semantic-release-slack-bot`](https://github.com/juliuscc/semantic-release-slack-bot) plugin posts a Slack message whenever a package is actually released (it does nothing when semantic-release decides there's nothing to release). It's configured with `notifyOnSuccess: false` at the root and a `branchesConfig` entry that turns notifications on only for `main`, so alpha releases stay silent. The webhook URL comes from the `SLACK_WEBHOOK_URL` repo secret, passed to the `publish` job's `Release` step as the `SLACK_WEBHOOK` env var (the name the plugin reads by default).

Because multi-semantic-release runs semantic-release once per package, a cascaded release (e.g. `lido-shared-ui` bumping its dependents) can post one Slack message per released package rather than a single combined message.

## Known Issues

`publish-alpha.yml` has a `guard` job that checks the `release-alpha-*` branch isn't behind `main` before running the alpha dry-run. This exists because semantic-release only sees tags reachable from the branch it runs on — if the branch hasn't had `main` merged into it recently, it can compute a version *below* the latest stable release. The guard fails closed (blocks the release) if the branch is behind, or if the GitHub API comparison can't be read. Merge `main` into the branch before cutting an alpha release if this guard fails.

There are potential incompatibilities when dependencies of the packages and `@lidofinance/multi-semantic-release` are not updated for some time — check the Node version used by the release workflows (`.nvmrc`) against what `@lidofinance/multi-semantic-release` supports if releases start failing unexpectedly.
