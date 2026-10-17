# Contributing to `@lidofinance/lido-shared-ui`

Rules for adding code here. See the repo root [`CLAUDE.md`](../../CLAUDE.md)
for monorepo-wide conventions (package manager, commits, checks).

## What belongs here

`lido-shared-ui` is the foundation `lido-landing-ui` and `lido-app-ui` both
build on — it has no internal dependencies of its own. Only put something
here if:

- it's a hook, util, type, or theme primitive genuinely **shared** between
  `lido-landing-ui` and `lido-app-ui` (not something only one of them needs),
  or
- it's shared theme/cookie logic (`theme-css`) that both packages' theme
  providers rely on.

Don't put presentational, product-specific components here. `TestEnvBanner` is
the one existing exception (a cross-product dev banner) — it's not a pattern
to copy for anything app- or landing-specific.

Because `lido-landing-ui` and `lido-app-ui` both depend on this package, a
change here affects both — check what imports the thing you're changing
before changing its behavior or signature.

## Folder layout

One folder per feature under `src/`, each with its own `index.ts` barrel:

```
src/my-util/
  my-util.ts
  __tests__/
    my-util.test.ts
  index.ts
```

Add the new folder's barrel to `src/index.ts` (`export * from './my-util'`).

## Hooks and utils

- One concern per file; named exports, not `default` (the one exception today
  is `modalRoot`, kept as a default export for backwards compatibility — don't
  add new default exports).
- No CSS token namespace lives in utils/hooks — don't invent
  `--lido-shared-ui-*` variables. CSS custom properties are the consuming
  package's concern (`--lido-app-ui-*` / `--lido-landing-ui-*`); shared code
  should stay presentation-agnostic.
- Guard any code that touches browser globals (`window`, `location`,
  `document`) so it degrades sanely under SSR/during tests — see
  `getTopLevelDomain` for the pattern (branch on `typeof window === 'undefined'`
  rather than wrapping every call site).

## Tests

Co-locate tests in a `__tests__/` folder next to the code, as `*.test.ts`
(Vitest). Favor testing through the public behavior (inputs/outputs) over
internals. When a util depends on a browser global, save/restore it in
`beforeEach`/`afterEach` rather than leaking mutated global state across tests.

## Before opening a PR

Run these scoped to what you touched:

```bash
yarn workspace @lidofinance/lido-shared-ui lint
yarn workspace @lidofinance/lido-shared-ui types
yarn workspace @lidofinance/lido-shared-ui test
```

Since `lido-landing-ui` and `lido-app-ui` both build on this package, also
build and check the consumer(s) of whatever you changed:

```bash
yarn workspace @lidofinance/lido-shared-ui build
yarn workspace @lidofinance/lido-app-ui types
yarn workspace @lidofinance/lido-landing-ui types
```
