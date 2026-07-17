# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository overview

Yarn workspaces monorepo (managed with [Turborepo](https://turbo.build/repo)) providing React component libraries for Lido Finance products, published to npm. Package manager is Yarn 4.9 (via Corepack) with PnP disabled; Node `>=20 <25` (see `.nvmrc`).

### Packages (`packages/*`)

| Package | npm name | Purpose | Internal deps | Storybook port |
| --- | --- | --- | --- | --- |
| `lido-ui` | `@lidofinance/lido-ui` | **Deprecated/legacy** component library (buttons, inputs, modals, data tables, icons, theming, etc). Being slowly replaced — see note below. | none | 5555 |
| `lido-landing-ui` | `@lidofinance/lido-landing-ui` | Components for landing/marketing pages (banners, cards, tags, tooltips, typography). One of the two replacements for `lido-ui`. | `lido-shared-ui` | 5556 |
| `lido-app-ui` | `@lidofinance/lido-app-ui` | Components for Lido app/widget products. Small, still growing. The other replacement for `lido-ui`. | `lido-shared-ui` | 5557 |
| `lido-shared-ui` | `@lidofinance/lido-shared-ui` | Shared hooks, utils, theme CSS and types consumed by the other packages. No Storybook of its own. | none | — |

> **`lido-ui` is deprecated.** It's no longer the primary library and is being slowly replaced by `lido-landing-ui` or `lido-app-ui`, depending on the design requirements of the consuming project. Don't add new components to `lido-ui`; when asked to add or migrate a component, pick `lido-landing-ui` or `lido-app-ui` based on which design system the target project uses (ask if unclear).

Each package has the same internal layout: `src/` (source), `dist/` (build output, `cjs` + `esm`, not committed), `rollup.config.mjs`, `tsconfig.json` / `tsconfig.production.json`, `vitest.config.ts`. Component folders under `src/` typically contain `Component.tsx`, `Component.stories.tsx`, `Component.test.tsx`, `types.tsx`, and an `index.ts` barrel.

Because `lido-landing-ui` and `lido-app-ui` depend on `lido-shared-ui`, always build `lido-shared-ui` first when working across packages (Turbo's `^build` dependency handles this automatically for `yarn build`).

## Commands

Run from the repo root unless noted. All root scripts fan out through Turborepo across every package.

```bash
nvm use                # match required Node version
yarn install           # install deps (immutable in CI: yarn install --immutable)

yarn build             # turbo run build — builds all packages (respects internal dep order)
yarn test              # turbo run test — vitest across all packages
yarn lint              # turbo run lint — eslint across all packages
yarn types             # turbo run types — tsc --noEmit across all packages
yarn build-storybook   # turbo run build-storybook

yarn storybook:ui       # Storybook for lido-ui, port 5555
yarn storybook:landing  # Storybook for lido-landing-ui, port 5556
yarn storybook:widget   # Storybook for lido-app-ui, port 5557
```

Target a single package with `yarn workspace <name> <script>`, e.g.:

```bash
yarn workspace @lidofinance/lido-ui test
yarn workspace @lidofinance/lido-ui test src/button/Button.test.tsx   # single test file (vitest)
yarn workspace @lidofinance/lido-landing-ui lint
yarn workspace @lidofinance/lido-ui types
```

Icon and CSS-variable generation (in `lido-ui` and `lido-landing-ui`):

```bash
yarn workspace @lidofinance/lido-ui icons:convert
yarn workspace @lidofinance/lido-ui css-variables:generate
```

To add a new icon: drop the SVG into the relevant category folder under `packages/lido-ui/src/icons/svg/` (`base/`, `defi/`, `general/`, `lido/`, `logo/`, `strategies/`, `token/`) and commit — a pre-commit conversion step regenerates the icon components automatically (or run `icons:convert` manually). Names convert to PascalCase; category folders add suffixes (e.g. `logo/` → `IconNameLogo`).

Tests run on Vitest with `jsdom` + `@vitejs/plugin-react`. Linting is ESLint (`eslint:recommended`, TS, React, jsx-a11y, Prettier, Storybook plugin) plus Stylelint (`stylelint-config-standard`) for CSS — `yarn lint:css` per package.

## Architecture notes

- **Build tool per package**: Rollup (`rollup.config.mjs`) compiles `src/index.ts` to `dist/cjs` and `dist/esm` (via `@rollup/plugin-babel`), then `tsc --project tsconfig.production.json` generates declaration files. Styles are extracted to a single `index.css` per package via `rollup-plugin-postcss` (CSS Modules enabled except for `styles/global.css`).
- **Theming**: CSS custom properties (`--lido-ui-*`) drive typography, colors, border radii, and light/dark visibility; consumers override them in their own CSS after importing `@lidofinance/lido-ui/index.css`. Two theme providers exist: `ThemeProvider` (static theme) and `CookieThemeProvider` (theme resolved from override → URL query → cookie → initial value → system preference → default), paired with `ThemeToggler` when a product supports switching themes. Shared theme logic (cookie handling, constants, theme provider primitives) lives in `lido-shared-ui/src/theme-css`.
- **Typography** can be consumed either as a plain CSS import (`styles/typography.css`) or as PostCSS mixins via the `postcss-mixins` plugin pointed at `dist/styles`.
- **Cross-package dependency direction**: `lido-shared-ui` is the only package with no internal dependencies; both `lido-landing-ui` and `lido-app-ui` build on top of it. `lido-ui` is independent of the others and not built on the shared foundation (consistent with it being legacy/deprecated). Keep this direction in mind when moving code between packages — shared primitives belong in `lido-shared-ui`, not the other way around.
- **Releases**: all packages are versioned and published together by [multi-semantic-release](https://github.com/dhoulb/multi-semantic-release) (wraps `semantic-release`, using the Conventional Commits preset), which understands the dependency graph above — e.g. a breaking change in `lido-shared-ui` bumps the packages depending on it too. Publishing is triggered by CI on pushes to `main` (production channel) and `release-alpha` (alpha channel, prerelease id `alpha`). Use `!` in a commit type (e.g. `feat!: ...`) to trigger a new major version. Full detail, known issues, and CI wiring are in `RELEASES.md`.
- **CI** (`.github/workflows/test.yml`): security/docker/actions linters from `lidofinance/linters`, then dependency install, `yarn lint`, `yarn test`, and a `yarn build` smoke check, all gated behind a shared `cache-deps` job (node_modules keyed on `yarn.lock`, Turbo cache keyed on commit SHA).
