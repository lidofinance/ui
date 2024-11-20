# Releases

## Overview

[Release workflow](https://github.com/lidofinance/ui/blob/main/.github/workflows/deploy.yml) is triggered automatically on pushes to `lido-ui-v4`. It will:

- Build all packages
- Run tests
- Release packages if they need releasing

## Technical Setup

NPM token is stored as a repo secret and passed as an environment variable.

[Yarn 3](https://yarnpkg.com/features/pnp) is used with PNP resolution.

[semantic-release](https://github.com/semantic-release/semantic-release) is used to parse commit messages to determine how to bump package versions. It is ran on each package of Yarn workspaces. It reads versions in tags to find latest.

It is configured via [.releaserc.js](https://github.com/lidofinance/ui/blob/main/.releaserc.js) with a Conventional Commits preset (not Angular).

[multi-semantic-release](https://github.com/dhoulb/multi-semantic-release) is used to release all packages at once, accounting for their in-repo dependencies.

CLI args in [workflow](https://github.com/lidofinance/ui/blob/a203e52f64a6b91938820765d9573bbcddc18f5a/package.json#L18):

- deps.bump=satisfy
- deps.release=inherit

With these settings, ui global package will follow version changes of each package inside it eg when hooks is upgraded from 1.0.0 -> 2.0.0 with a breaking change, ui will also be upgraded to a new major version.

## Known Issues

We now have a lot of packages and our release method is not ideal - semantic-release tries to verify conditions of each package, leading to npm throttling whoami requests. We use a special [@semantic-release/npm](https://github.com/semantic-release/npm) wrapper - [@semrel-extra/npm](https://github.com/semrel-extra/npm), which has memoization for npm token verification. Now, we even have [verify conditions disabled](https://github.com/lidofinance/ui/blob/6a2998453a4239a3a94c3ea88a64647a599cdef6/.releaserc.js#L8).

There are potential incompatibilities when dependencies of lido-ui and multi-semantic-release are not updated for some time. [Node version of the release workflow](https://github.com/lidofinance/ui/blob/a203e52f64a6b91938820765d9573bbcddc18f5a/.github/workflows/deploy.yml#L22) may need to be tweaked in the future.
