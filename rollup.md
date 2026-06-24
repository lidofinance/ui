# Why rollup and not tsdown

## Short answer

We have CSS modules and a non-published `@lidofinance/lido-shared` — tsdown can't handle both properly.

## Details

### 1. CSS modules — the main reason

`rollup-plugin-postcss` processes CSS modules directly in the build tree:
- runs the full PostCSS pipeline (mixins, nested, autoprefixer)
- scopes class names
- extracts everything into `dist/index.css` in a single pass

tsdown has no proper support for PostCSS modules. With `unbundle: true`, CSS class scoping stops working. We had to add a separate `bundle-css.mjs` script that simply concatenates CSS files alphabetically — no postcss processing, no guaranteed order.

### 2. `@lidofinance/lido-shared` is not published

`shared` is an internal package that only exists in the monorepo and is not published to npm. `lido-ui-landing` and `lido-ui-widget` must inline its contents into their `dist`.

tsdown requires `noExternal: ['@lidofinance/lido-shared']` for this, but it only works for the JS part. CSS files from shared are not processed by postcss and lose their scoped class names.

Rollup, with shared excluded from `external`, inlines it properly: JS is processed by babel, CSS by the postcss plugin. Everything in one pass, no workarounds.

### 3. Babel transforms for SVG

We use `babel-plugin-react-inline-svg-unique-id` — it makes SVG ids unique when multiple copies of an icon are mounted. tsdown uses esbuild/oxc, Babel plugins don't run there. Icons with duplicate ids break in Safari.

### 4. `preserveModules`

Rollup with `preserveModules: true` outputs one file per source file — required for tree-shaking. tsdown has `unbundle: true`, but it doesn't work with our CSS modules (see point 1).

### 5. Type generation

tsdown generates `.d.mts`/`.d.cts` via its own mechanism, which doesn't handle re-exports from shared correctly. Rollup uses `tsc --project tsconfig.production.json` — the standard compiler, full IDE compatibility.

## When tsdown is a good fit

[reef-knot](https://github.com/lidofinance/reef-knot) uses tsdown with `unbundle: true` and it works fine. The reason: they use **styled-components**, no CSS files at all, and no non-published internal packages with CSS. Styles are generated at runtime — no PostCSS pipeline needed.

We have CSS modules + shared without npm — tsdown is not a fit for that.

## Summary

tsdown is great for TS utilities and CSS-in-JS libraries without static styles. For a React library with CSS modules, Babel transforms, and a non-published internal package — rollup.
