# Monorepo Architecture

## Overview

This repository is a **Yarn 4 workspace monorepo** with three independently published npm packages and one internal shared package. Build orchestration via **Turborepo**, library builds via **Rollup**.

---

## Directory Structure

```
lido-ui/                              ← monorepo root (private)
├── package.json                      ← workspaces, root devDeps, release config
├── turbo.json                        ← task pipeline
├── tsconfig.base.json                ← shared TS compiler options
├── tsconfig.json                     ← IDE-wide type checking (all packages)
├── .eslintrc.cjs                     ← shared ESLint config
├── .prettierrc.cjs
├── .stylelintrc
├── postcss.config.js                 ← shared PostCSS (landing + widget)
├── commitlint.config.cjs
├── yarn.lock
│
├── .github/workflows/
│   ├── publish.yml                   ← release to npm (monorepo branch)
│   ├── deploy-storybook.yml          ← build & deploy all 3 Storybooks to gh-pages
│   ├── test.yml                      ← CI: types, lint, tests, build
│   ├── ci-preview-deploy.yml         ← deploy preview stand on PR
│   └── ci-preview-demolish.yml       ← tear down preview stand on PR close
│
└── packages/
    ├── lido-ui/                      → @lidofinance/lido-ui (published)
    ├── lido-ui-landing/              → @lidofinance/lido-landing (published)
    ├── lido-ui-widget/               → @lidofinance/lido-widget (published)
    └── shared/                       → @lidofinance/lido-shared (NOT published)
```

---

## Packages

### `@lidofinance/lido-ui` — `packages/lido-ui/`

- **Purpose:** General-purpose design system (buttons, inputs, typography, icons, hooks, etc.)
- **Styling:** CSS Modules + PostCSS
- **React peer:** `16 || 17 || 18`
- **Storybook port:** `5555`
- **Exports:** JS + `./index.css` + `./styles/*`

### `@lidofinance/lido-landing` — `packages/lido-ui-landing/`

- **Purpose:** Landing page UI components
- **Styling:** CSS Modules + PostCSS (shared `postcss.config.js` at root)
- **React peer:** `^18`
- **Storybook port:** `5556`
- **Exports:** JS + `./index.css` + `./styles/*`
- **Internal dep:** `@lidofinance/lido-shared` (devDependency)

### `@lidofinance/lido-widget` — `packages/lido-ui-widget/`

- **Purpose:** Widget UI components
- **React peer:** `^18`
- **Storybook port:** `5557`
- **Exports:** JS
- **Internal dep:** `@lidofinance/lido-shared` (devDependency)

### `@lidofinance/lido-shared` — `packages/shared/`

- **NOT published to npm** — controlled via `"npmPublish": false` in its release config
- **Purpose:** Common hooks, utilities and types shared between `lido-ui-landing` and `lido-ui-widget`
- **Exports:** source-level (`.ts` files directly) — no separate build step, resolved via `tsconfig.json` paths
- `lido-ui` does **not** depend on shared

#### Why shared is set up this way

`@lidofinance/lido-shared` is **not marked `"private": true`** in its `package.json`, even though it's never published. This is intentional — `@lidofinance/multi-semantic-release`'s CLI hardcodes `--ignore-private=true` and cannot be overridden via config, so a private package is completely excluded from the release queue and cannot trigger version cascades in dependent packages.

Instead, publishing is blocked via `"npmPublish": false` in the package's own release config:

```json
// packages/shared/package.json
{
  "release": {
    "verifyConditions": [],
    "plugins": [
      ["@semantic-release/commit-analyzer", { "preset": "conventionalcommits" }],
      "@semantic-release/release-notes-generator",
      ["@semantic-release/npm", { "npmPublish": false }]
    ]
  }
}
```

`verifyConditions: []` skips npm and GitHub auth checks for this package (it has a different git remote).

#### Cascade mechanism

`@lidofinance/lido-landing` and `@lidofinance/lido-widget` list `@lidofinance/lido-shared` in their **`devDependencies`** (not `dependencies`) with version `"*"`:

```json
"devDependencies": {
  "@lidofinance/lido-shared": "*"
}
```

- `devDependencies` is enough for `multi-semantic-release` to build the dependency graph and trigger a cascade
- `devDependencies` is **not included** in the published `package.json`, so consumers never see `@lidofinance/lido-shared`
- `"*"` (not `"workspace:*"`) is used because `npm version` (called internally during release) does not support the `workspace:` protocol

Result: when `packages/shared` has a relevant commit, shared gets a version bump → landing and widget automatically get a patch release.

---

## Package Layout (each published package)

```
packages/<name>/
├── package.json
├── tsconfig.json              ← extends ../../tsconfig.base.json
├── tsconfig.production.json   ← tsc emitDeclarationOnly for dist/types
├── rollup.config.mjs          ← library build config
├── .babelrc.json              ← babel presets (env, typescript, react)
├── postcss.config.js          ← PostCSS config (paths to src/styles/)
├── jest.config.cjs
├── .storybook/                ← package-local Storybook
│   ├── main.ts
│   ├── preview.ts
│   └── components/
├── src/
│   ├── index.ts               ← public API
│   ├── styles/                ← CSS tokens, global.css, typography, etc.
│   ├── <component>/
│   │   ├── Component.tsx
│   │   ├── Component.module.css
│   │   ├── Component.stories.tsx
│   │   └── index.ts
│   └── hooks/
└── dist/                      ← gitignored, generated by rollup + tsc
```

---

## Build System

### Turborepo (`turbo.json`)

| Task | Command | Cached |
|------|---------|--------|
| `build` | `rm -rf dist && rollup -c && tsc --project tsconfig.production.json` | ✅ |
| `build-storybook` | `storybook build` | ✅ |
| `test` | `jest` | ✅ |
| `lint` | `eslint` | ✅ |
| `types` | `tsc --noEmit` | ✅ |

```bash
yarn build              # build all packages in parallel
yarn test               # test all
yarn lint               # lint all
yarn storybook:ui       # dev storybook for lido-ui
yarn storybook:landing  # dev storybook for lido-ui-landing
yarn storybook:widget   # dev storybook for lido-ui-widget
```

### Rollup

Each published package uses **Rollup** with `preserveModules: true` — one output file per source file. Critical for tree-shaking.

Build output:
```
dist/
├── cjs/                   ← CJS output (preserveModules)
├── esm/                   ← ESM output (preserveModules)
├── types/                 ← Declaration files from tsc
├── index.css              ← bundled CSS
└── styles/
```

---

## Releases

### Tool: `@lidofinance/multi-semantic-release`

Analyzes commits per-package via Conventional Commits. Only packages with relevant commits since their last release are published. Cascade: if package A releases, any package that lists A in its deps automatically gets a patch release.

### Root release config (`package.json`)

```json
{
  "release": {
    "branches": [
      "monorepo",
      "main",
      { "name": "lido-ui-v4-canary", "channel": "alpha", "prerelease": "alpha" }
    ],
    "plugins": [
      ["@semantic-release/commit-analyzer", { "preset": "conventionalcommits" }],
      "@semantic-release/release-notes-generator",
      "@semantic-release/npm",
      "@semantic-release/github"
    ],
    "verifyConditions": ["@semantic-release/github"]
  },
  "multi-release": {
    "tagFormat": "${name}@${version}",
    "sequentialInit": true,
    "ignorePrivate": true,
    "deps": {
      "bump": "override",
      "release": "patch",
      "prefix": "^"
    }
  }
}
```

`verifyConditions` is overridden to skip the npm auth check — npm credentials are only needed at publish time, not at the verify stage. This allows `yarn release --dry-run` to work without an npm token.

### Dry run

```bash
yarn release --dry-run
```

Shows what versions would be released without publishing anything.

### GitHub Actions

| Workflow | Trigger | What it does |
|----------|---------|--------------|
| `publish.yml` | push to `monorepo` | Runs `yarn release` — publishes all packages with new commits |
| `deploy-storybook.yml` | push to `monorepo` | Builds all 3 Storybooks and deploys to GitHub Pages |
| `test.yml` | push / PR | Types, lint JS, lint CSS, tests, build |
| `ci-preview-deploy.yml` | PR opened/updated | Deploys preview stand |
| `ci-preview-demolish.yml` | PR closed/drafted | Tears down preview stand |

All workflows have `concurrency` configured. `publish.yml` uses `cancel-in-progress: false` to never interrupt an in-flight release.

### Commit convention

| Commit prefix | Version bump |
|---------------|-------------|
| `fix:` | patch |
| `feat:` | minor |
| `feat!:` / `BREAKING CHANGE:` | major |
| `chore:`, `docs:`, `style:` | no release |

---

## Storybook Deployment

```
https://<org>.github.io/lido-ui/lido-ui/
https://<org>.github.io/lido-ui/lido-ui-landing/
https://<org>.github.io/lido-ui/lido-ui-widget/
```

Workflow builds all 3 in parallel via `yarn turbo run build-storybook`, assembles into `gh-pages/<name>/`, deploys via `peaceiris/actions-gh-pages`.

---

## Development Workflow

```bash
yarn install            # install deps
yarn storybook:landing  # dev storybook for landing
yarn build              # build all packages
yarn test               # run all tests
yarn lint               # lint everything
yarn types              # type check everything
yarn release --dry-run  # preview what would be released
```

### Adding a new shared component

1. Create component in `packages/shared/src/`
2. Export from `packages/shared/src/index.ts`
3. Import in `lido-ui-landing` or `lido-ui-widget` as `@lidofinance/lido-shared`

### Adding a new publishable package

1. Create `packages/<name>/` with `package.json`, `tsconfig.json`, `rollup.config.mjs`, `tsconfig.production.json`
2. Root `workspaces: ["packages/*"]` picks it up automatically
3. Run `yarn install`
4. Add Storybook script to root `package.json` if needed

---

## Tech Stack

| Tool | Role |
|------|------|
| Yarn 4 | Package manager + workspaces |
| Turborepo | Task orchestration, caching |
| Rollup (preserveModules) | Library build — per-file output, tree-shakeable |
| Babel | TS/TSX transpilation |
| TypeScript 5.x | Typing |
| PostCSS | CSS transforms (nested, mixins, autoprefixer) |
| CSS Modules | Component-scoped styles |
| Storybook 8 (webpack5) | Component development |
| Jest + ts-jest | Unit tests |
| ESLint + Stylelint | Linting |
| Husky + lint-staged | Pre-commit hooks |
| @lidofinance/multi-semantic-release | Independent per-package releases with cascade |
| Conventional Commits | Commit format for automatic versioning |
| GitHub Actions | CI/CD |
