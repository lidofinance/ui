# Lido UI

> Monorepo of React component libraries for Lido Finance projects.

## Storybooks

[![lido-landing-ui Storybook](https://img.shields.io/badge/Storybook-lido--landing--ui-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://ui.lido.fi/lido-landing-ui/)
[![lido-app-ui Storybook](https://img.shields.io/badge/Storybook-lido--app--ui-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://ui.lido.fi/lido-app-ui/)
[![lido-ui Storybook (deprecated)](https://img.shields.io/badge/Storybook-lido--ui%20(deprecated)-8b8b8b?style=for-the-badge&logo=storybook&logoColor=white)](https://ui.lido.fi/lido-ui/)

[ui.lido.fi](https://ui.lido.fi/) itself is a landing page linking to all three.

This repository is a [Yarn workspaces](https://yarnpkg.com/features/workspaces) monorepo orchestrated with [Turborepo](https://turbo.build/repo). It publishes the following packages to npm:

| Package | npm name | Description | Storybook |
| --- | --- | --- | --- |
| [`packages/lido-landing-ui`](./packages/lido-landing-ui) | `@lidofinance/lido-landing-ui` | Components tailored for Lido's landing / marketing pages (banners, cards, tags, tooltips, typography, etc). One of the two current replacements for `lido-ui`. | [ui.lido.fi/lido-landing-ui](https://ui.lido.fi/lido-landing-ui/) |
| [`packages/lido-app-ui`](./packages/lido-app-ui) | `@lidofinance/lido-app-ui` | Components for Lido app/widget products. Currently small and growing. The other current replacement for `lido-ui`. | [ui.lido.fi/lido-app-ui](https://ui.lido.fi/lido-app-ui/) |
| [`packages/lido-shared-ui`](./packages/lido-shared-ui) | `@lidofinance/lido-shared-ui` | Shared hooks, utils, theme CSS and types consumed by the other packages. No Storybook of its own. | — |
| [`packages/lido-ui`](./packages/lido-ui) | `@lidofinance/lido-ui` | **Deprecated / legacy.** The original component library (buttons, inputs, modals, data tables, icons, theme, etc). Being phased out in favor of `lido-landing-ui` / `lido-app-ui`. Avoid adding new components here. | [ui.lido.fi/lido-ui](https://ui.lido.fi/lido-ui/) |

> **Note:** `@lidofinance/lido-ui` is deprecated and no longer the primary library. It is being slowly replaced by `@lidofinance/lido-landing-ui` or `@lidofinance/lido-app-ui`, depending on the design requirements of the consuming project — pick whichever matches the target project's design system for new work.

Published Storybooks are deployed to GitHub Pages by the `deploy-storybook` / `deploy-pages` jobs in [`publish-production.yml`](./.github/workflows/publish-production.yml): each package's Storybook is published under its own subfolder, and the domain root ([ui.lido.fi](https://ui.lido.fi/)) serves a landing page (source: [`.github/pages/index.html`](./.github/pages/index.html)) linking to all three.

## Monorepo Structure

### Package dependency graph

- `lido-shared-ui` has no internal dependencies — it's the shared foundation (hooks, utils, theme-css, types).
- `lido-landing-ui` and `lido-app-ui` depend on `lido-shared-ui`.
- `lido-ui` currently has no internal dependencies and is self-contained (legacy, not built on the shared foundation).

### Package layout

Each package under `packages/*` follows the same shape:

- `src/` - component source code
- `dist/` - build output (`cjs` and `esm`), generated on `build`, not committed
- `rollup.config.mjs` - Rollup build config
- `tsconfig.json` / `tsconfig.production.json` - TypeScript configs (production config is used for `.d.ts` generation during build)
- `vitest.config.ts` - test config

### Build orchestration

[Turborepo](https://turbo.build/repo) (configured in [`turbo.json`](./turbo.json)) runs tasks across all packages and caches results:

- `yarn build` → `turbo run build` - builds every package; a package's `build` depends on `^build` (its dependencies' builds), so `lido-shared-ui` is always built before `lido-landing-ui`/`lido-app-ui`.
- `yarn test` → `turbo run test`
- `yarn lint` → `turbo run lint`
- `yarn types` → `turbo run types`
- `yarn build-storybook` → `turbo run build-storybook`

## Developing

### Initial setup

1. Install the required node version
```
nvm use
```

2. To get started, install the dependencies:

```
yarn install
```

3. Build the packages:

```
yarn build
```

### Working on a single package

Run a package's Storybook directly:

- `yarn storybook:ui` - Storybook for `lido-ui` (port `5555`)
- `yarn storybook:landing` - Storybook for `lido-landing-ui` (port `5556`)
- `yarn storybook:app` - Storybook for `lido-app-ui` (port `5557`)

Or target any workspace script directly with `yarn workspace <package-name> <script>`, e.g.:

```bash
yarn workspace @lidofinance/lido-ui test
yarn workspace @lidofinance/lido-landing-ui icons:convert
```

Repo-wide scripts:

- `yarn build` - Build all packages.
- `yarn test` - Run tests across packages.
- `yarn lint` - Run eslint across packages.
- `yarn lint:css` - Run stylelint across packages.
- `yarn types` - Type-check all packages (`tsc --noEmit`).

## Publishing

Packages are automatically published to npm when you push to `main`. The publication is based on [semantic-release](https://github.com/semantic-release/semantic-release) and [@lidofinance/multi-semantic-release](https://github.com/lidofinance/multi-semantic-release).

All packages are versioned and published together — multi-semantic-release understands the internal dependency graph above (e.g. a breaking change in `lido-shared-ui` bumps the packages depending on it too). See [RELEASES.md](./RELEASES.md) for the full release process.

For correct version detection, please follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/). To release a new major version, create a commit with `!` like this - `feat!: ui v4`

## Using libraries

Add the package matching your project's design system:

```bash
yarn add @lidofinance/lido-landing-ui # or @lidofinance/lido-app-ui
```

Setup, styles import, typography and CSS variable customization differ per package (`lido-landing-ui` and `lido-ui` use `--lido-ui-*` variables, `lido-app-ui` uses `--lido-app-ui-*`), so follow the package README:

- [`lido-landing-ui`](./packages/lido-landing-ui/README.md)
- [`lido-app-ui`](./packages/lido-app-ui/README.md)
- [`lido-ui`](./packages/lido-ui/README.md) (deprecated)

## Theming

Theme providers live in `lido-shared-ui` (`src/theme-css`) and are re-exported by `lido-landing-ui` and `lido-app-ui`.

### Theme Initialization

By default, the theme will be set to the value obtained after calling the `themeScriptValueString` method and will be the same as all other Lido products. This ensures consistent theming across the Lido ecosystem.

### When to Use Different Theme Providers

- **For products with theme switching**: You must use `CookieThemeProvider` and `ThemeToggler` components
- **For products without theme switching**: You must use `ThemeProvider` with your chosen theme. Or `CookieThemeProvider` with hardcoded `overrideThemeName` and `initialThemeName`


The `CookieThemeProvider` determines the theme based on the following priority:
1. Override theme (if provided)
2. URL query parameter
3. Cookie value
4. Initial theme (if provided)
5. System preference (light/dark mode)
6. Default theme

## Adding Icons

Drop the SVG under the package's `src/icons/svg/` and commit. The pre-commit hook runs that package's `icons:convert` and stages the generated files. To run it manually: `yarn workspace <package-name> icons:convert`.

- `lido-ui`: flat `svg/*.svg`, converted to PascalCase components in `src/icons/index.tsx`.
- `lido-landing-ui`: category folders `base/`, `defi/`, `general/`, `lido/`, `logo/`, `strategies/`, `token/`. `logo/` icons get a `Logo` suffix (e.g. `AaveLogo`).
- `lido-app-ui`: category folders `base/`, `chains/`, `protocols/`, `token/`, `wallets/`. `base/` icons get an `Icon` prefix (`IconArrowUp`), `token/` icons a `Token` prefix (`TokenAave`).
