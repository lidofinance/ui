# Contributing to `@lidofinance/lido-app-ui`

Rules for adding or changing components in this package. See the repo root
[`CLAUDE.md`](../../CLAUDE.md) for monorepo-wide conventions (package manager,
commits, checks).

## Is this the right package?

`lido-app-ui` is for Lido **app/widget** products. If the component is for a
landing/marketing page, it belongs in `lido-landing-ui` instead. Never add new
components to `lido-ui` — it's deprecated.

## Folder layout

Each component gets its own kebab-case folder under `src/`:

```
src/my-component/
  MyComponent.tsx
  MyComponent.module.css
  MyComponent.stories.tsx
  index.ts
```

- Folder name: kebab-case (`icon-button`, `small-card`, `data-list`).
- File names: PascalCase, matching the exported component name.
- A component made of several parts (e.g. `DataList` + `DataListRow`) lives in
  one folder, one file per part, all re-exported from that folder's `index.ts`.

## Component code

- Named function export, not `default`: `export const MyComponent = (...) => ...`.
- Export the props type alongside it: `export type MyComponentProps = ...`.
  Extend the matching HTML attributes type when the root is a plain element
  (`HTMLAttributes<HTMLDivElement>`, etc.) instead of re-declaring `className`,
  `children`, and native event handlers by hand.
- Merge incoming `className` with the component's own class via `classnames`
  (`cn(styles.root, className)`) — don't overwrite it.
- Spread `...rest` onto the root element so consumers can pass through native
  attributes and event handlers.
- Use `forwardRef` when the component wraps a focusable/interactive native
  element (input, button) that consumers may need a ref to.

## Test IDs

Every component accepts a `dataTestId` prop so consumers can target internal
parts (not just the root) in e2e/UI tests without reaching for fragile
selectors:

```ts
export type MyComponentDataTestId = {
  root?: string
  icon?: string
  label?: string
}

export type MyComponentProps = ComponentPropsWithoutRef<'div'> & {
  dataTestId?: MyComponentDataTestId
}

export const MyComponent = ({ dataTestId, ...rest }: MyComponentProps) => (
  <div data-testid={dataTestId?.root} {...rest}>
    <span className={styles.icon} data-testid={dataTestId?.icon}>...</span>
    <span className={styles.label} data-testid={dataTestId?.label}>...</span>
  </div>
)
```

- One key per part worth targeting on its own (icon, label, error message,
  action button, etc.) — not every wrapper `<span>`.
- Always include `root`, even for single-element components.
- Apply `data-testid={dataTestId?.part}` before any `{...rest}` spread so an
  explicit `data-testid` passed through `rest` can still win if a consumer
  needs to override it.
- A component rendered from a list (e.g. `Tabs`, `SegmentedControl`) takes a
  `dataTestId` per item in addition to the container's own, matching the
  shape above.
- Export the `<Component>DataTestId` type from the component's `index.ts`
  alongside its props type.

## Styles

- One `Component.module.css` per component, CSS Modules (not CSS-in-JS).
- Only use `--lido-app-ui-*` CSS variables for colors, spacing tokens,
  typography, border radius, etc. — never hardcode values or reach for another
  package's token prefix (`--lido-ui-*` / `--lido-landing-ui-*`). See
  `CLAUDE.md` for why token prefixes are per-package.
- Always set `font-family: var(--lido-app-ui-font-family)` on the root.
- Modifier classes use the `property--value` pattern (`variant--secondary`,
  `shape--rounded`), composed with `cn()` in the component.

## Icons

Reuse an existing icon from `../icons` rather than inlining SVG markup. If the
icon doesn't exist yet, drop the SVG into `src/icons/svg/<category>/` and run
`yarn icons:convert` (see root `CLAUDE.md`) — don't hand-write icon components.

## Storybook

- `title` follows `'Category/ComponentName'`, grouped with sibling components
  (`'Buttons/Button'`, `'Buttons/IconButton'`).
- `tags: ['autodocs']` on every component meta.
- Give every prop with non-obvious behavior a `description` in `argTypes`.
- Split meaningfully different states into separate named stories (e.g.
  `Basic`, `WithoutIcon`) rather than one story with a control for everything;
  add a short `parameters.docs.description.story` explaining what each one
  shows.

## Barrel exports

Export both the component and its props type from the component's `index.ts`:

```ts
export { MyComponent } from './MyComponent'
export type { MyComponentProps } from './MyComponent'
```

Then add `export * from './my-component'` to `src/index.ts` (alphabetical with
its neighbors).

## Before opening a PR

Run these scoped to what you touched, not the whole monorepo:

```bash
yarn workspace @lidofinance/lido-app-ui lint
yarn workspace @lidofinance/lido-app-ui types
yarn workspace @lidofinance/lido-app-ui test
```

Check the component in Storybook (`yarn storybook:widget`, port `5557`)
before calling it done.
