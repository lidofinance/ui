# Lido UI Components v4

> React components (v4) for Lido Finance projects. (Released February 2026)

Check out our Storybook at [https://ui.lido.fi/v4](https://ui.lido.fi/v4)

For release a new version of the library you need to create a commit with `!` like this - `feat!: ui v4`

> **Note:** `@lidofinance/lido-ui` (this package) is deprecated and no longer the primary library. It is being slowly replaced by `@lidofinance/lido-landing-ui` or `@lidofinance/lido-app-ui`, depending on the design requirements of the consuming project. Avoid adding new components here — see [Monorepo Structure](#monorepo-structure) below for which package to use instead.

## Breaking Changes

`useBreakpoint` has been deleted, because getting styles in js is a legacy of styled-components, but the library has switched to module-css. This can be created locally in your project.

## Getting Started

1. Simply add `lido-ui` to your dependencies:

```bash
yarn add @lidofinance/lido-ui
```

2. Import Lido theme provider and wrap your components in `_app.js`:

```js
import { ThemeProvider } from '@lidofinance/lido-ui'

function App({ Component }) {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}
```

3. Import styles into your `_app.js` file:
```tsx
import '@lidofinance/lido-ui/index.css';
```

4. CSS variables are initially embedded in the `index.css` file. To use typography styles across your application, you have two options:

   1. **Include the CSS file**:  
      If you want to use ready-made classes with styles, you need to import an additional CSS file.  
      Insert the following line at the top of your `_app.js` file to import the typography styles:
      ```tsx
      import '@lidofinance/lido-ui/styles/typography.css';
      ```

   2. **Use PostCSS mixins**:  
      If you prefer to use PostCSS mixins for typography, you need to configure PostCSS in your project. Add the `postcss-mixins` plugin to your PostCSS configuration and include the typography mixins provided by the library.  
      Example `postcss.config.js` configuration:
      ```js
      module.exports = {
        plugins: [
          ...
          [
            "postcss-mixins",
            {
               mixinsDir: path.resolve('./node_modules/@lidofinance/lido-ui/dist/styles'),
            },
         ],
        ],
      };
      ```  
      Once configured, you can use the typography mixins directly in your CSS files. For example:
      ```css
      @mixin font-h2;
      ```

## Usage

Simply import any components and use in your project:

```js
import { Button } from '@lidofinance/lido-ui'
```

## Monorepo Structure

This repository is a [Yarn workspaces](https://yarnpkg.com/features/workspaces) monorepo orchestrated with [Turborepo](https://turbo.build/repo). It contains four publishable packages under `packages/`:

| Package | npm name | Description | Storybook port |
| --- | --- | --- | --- |
| [`packages/lido-ui`](./packages/lido-ui) | `@lidofinance/lido-ui` | **Deprecated / legacy.** The original component library (buttons, inputs, modals, data tables, icons, theme, etc). No longer the primary library — being phased out in favor of `lido-landing-ui` / `lido-app-ui`. Avoid adding new components here. | `5555` |
| [`packages/lido-landing-ui`](./packages/lido-landing-ui) | `@lidofinance/lido-landing-ui` | Components tailored for Lido's landing / marketing pages (banners, cards, tags, tooltips, typography, etc). One of the two current replacements for `lido-ui`. | `5556` |
| [`packages/lido-app-ui`](./packages/lido-app-ui) | `@lidofinance/lido-app-ui` | Components for Lido app/widget products. Currently small and growing. The other current replacement for `lido-ui`. | `5557` |
| [`packages/lido-shared-ui`](./packages/lido-shared-ui) | `@lidofinance/lido-shared-ui` | Shared hooks, utils, theme CSS and types consumed by the other packages. Not published with its own Storybook. | — |

`lido-ui` is being slowly replaced by `lido-landing-ui` or `lido-app-ui`, depending on the design requirements of the consuming project — pick whichever matches the target project's design system for new work instead of adding to `lido-ui`.

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

### Working on a single package

Run a package's Storybook directly:

- `yarn storybook:ui` - Storybook for `lido-ui` (port `5555`)
- `yarn storybook:landing` - Storybook for `lido-landing-ui` (port `5556`)
- `yarn storybook:widget` - Storybook for `lido-app-ui` (port `5557`)

Or target any workspace script directly with `yarn workspace <package-name> <script>`, e.g.:

```bash
yarn workspace @lidofinance/lido-ui test
yarn workspace @lidofinance/lido-landing-ui icons:convert
```

### Versioning & publishing

All four packages are versioned and published together via [multi-semantic-release](https://github.com/dhoulb/multi-semantic-release), which understands the internal dependency graph above (e.g. a breaking change in `lido-shared-ui` bumps the packages depending on it too). See [RELEASES.md](./RELEASES.md) for the full release process.

## Developing

- `yarn dev` - Start Storybook locally to start developing components.
- `yarn build` - Build all components.
- `yarn test` - Run tests across components.
- `yarn lint` - Run eslint across components.

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

4. Run the storybook:

```yarn dev
```

## Publishing

Packages are automatically published to npm when you push to master. The publication is based on [semantic-release](https://github.com/semantic-release/semantic-release) and [@lidofinance/multi-semantic-release](https://github.com/lidofinance/multi-semantic-release).

For correct version detection, please follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/).

## Customizing CSS Variables

Lido UI provides a comprehensive set of CSS variables that can be overridden to match your application's design system. This allows you to maintain the functionality of Lido UI components while adapting their appearance to your brand.

### Override Method

To customize the CSS variables, create a CSS file in your project with new definitions:

```css
:root {
  /* Override typography */
  --lido-ui-font-family: "Your-Custom-Font", sans-serif;
  --lido-ui-font-size-body: 16px;
  --lido-ui-line-height-body: 24px;

  /* Override colors */
  --lido-ui-color-text-primary: #your-primary-color;
}
```

Import this file after the Lido UI styles in your application:

```tsx
import '@lidofinance/lido-ui/index.css';
import './your-custom-variables.css'; // Import your overrides after Lido UI styles
```

### Customizable Categories

Lido UI provides several categories of CSS variables that can be customized:

1. **Typography**
   - Font family: `--lido-ui-font-family`
   - Font sizes: `--lido-ui-font-size-*` (h1, h2, h3, h4, subheader, control, body, description)
   - Font weights: `--lido-ui-font-weight-*` (bold, medium, regular, light, extra-light)
   - Line heights: `--lido-ui-line-height-*` (h1, h2, h3, h4, subheader, control, body, description)

2. **Colors**
   - Theme colors: `--lido-ui-color-*` (background, foreground, primary, text, etc.)

3. **Border Radiuses**
   - `--lido-ui-border-radius-*` (4, 40, 50, 60, 70)

4. **Theme-Specific Variables**
   - Light/dark mode visibility: `--lido-ui-light-mode-visibility`, `--lido-ui-dark-mode-visibility`
   - Display properties: `--lido-ui-light-display`, `--lido-ui-dark-display`

### Media Queries

Some variables like font sizes and line heights have responsive variants defined in media queries. You can also override these for specific breakpoints:

```css
@media (--lido-ui-breakpoint-md-down) {
  :root {
    --lido-ui-font-size-h1: 48px;
    --lido-ui-line-height-h1: 52px;
  }
}
```

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

1. Add the SVG file to one of the category folders in `packages/icons/svg/`:
   - `base/` - Basic UI icons (arrows, close, info, etc.)
   - `defi/` - DeFi-related icons (protocols, networks, wallets)
   - `general/` - General purpose icons (social media, docs, etc.)
   - `lido/` - Lido-specific icons (projects, teams)
   - `logo/` - Brand logos
   - `strategies/` - Strategy-related icons
   - `token/` - Token/cryptocurrency icons

2. Commit changes. The conversion will run automatically and the result will be added to the current commit

Or - run the conversion script manually - `yarn icons:convert`

**Note**: Icon names are automatically converted to PascalCase. Icons in different categories get specific suffixes:
- `logo/` → `IconNameLogo`
- `defi/networks/arbitrum` → `Arbitrum.tsx`
