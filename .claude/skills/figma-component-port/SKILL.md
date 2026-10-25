---
name: figma-component-port
description: Port or align a component (or an icon set) from the "Interface Design System" Figma file into a package of this monorepo (lido-app-ui, lido-landing-ui, lido-ui). Use when the user gives a figma.com/design/... link and asks to build, add, align, "проверь по фигме", or fix a component/icon to match the design. Encodes the exact workflow, token-matching rules, icon-pipeline mechanics, and screenshot-verification steps worked out across this project's Figma-port sessions.
---

# Porting a component from Figma into this monorepo

This is a runbook, not a generic Figma tutorial. It captures what actually
worked (and what silently broke) porting Tag, SegmentedControl /
SegmentedControlCard, the icon system, and auditing Button / IconButton /
MessageBox / Tooltip / Accordion against Figma in `packages/lido-app-ui`.
The same approach applies to `lido-landing-ui` and `lido-ui` — swap the
package name and its `--<package>-*` token prefix.

Figma file used throughout: `Interface Design System`
(`fileKey=1SFw8VIyvedXmg9s4vCinh` in past sessions — always take the
fileKey from the URL the user pastes, don't hardcode it).

When porting or aligning a component, record its node on the story meta as
`parameters: { design: { type: 'figma', url: '<pasted URL>' } }` and read that
URL back on later alignment passes instead of asking again.

## 0. Load the Figma skill first

Before any `get_design_context` call, load the `figma-design-to-code`
skill's guidance (`Skill` tool if listed, otherwise
`ReadMcpResourceTool` on `skill://figma/figma-design-to-code/SKILL.md`).
Pass `skillNames: "resource:figma-design-to-code"` on every
`get_design_context` call. This is enforced by the tool description, not
optional.

## 1. Understand the target before writing code

1. `get_metadata` on the URL's `node-id` first. If it's a whole section
   (e.g. "Tags", "Icons", "Logos"), this gives you every variant/symbol
   name and id in one call — read it before drilling into individual
   nodes. If the section is huge (color primitives, full style guide),
   `get_metadata` truncates and you'll only see the first sub-tree; don't
   assume the rest doesn't exist — ask the user for a more specific link
   instead of guessing node ids blind.
2. Identify the **exact variant/prop matrix** from the symbol names
   (e.g. `Type=default, State=hover`, `icon/chevron-down`,
   `wallet/Metamask`). This is your component's prop enum — match it
   1:1, don't invent extra variants or drop ones that exist.
3. Check **`lido-landing-ui`** for an equivalent or structurally similar
   component before designing anything from scratch, even when the
   target package is `lido-app-ui` or `lido-ui` — it's the reference
   implementation for this project. If it already has the component (or
   the same category of primitive), read its `.tsx`/`.module.css` for
   the shape/behavior pattern (prop names, forwardRef usage, how
   variants are structured) and adapt that into the target package's own
   conventions and token prefix — don't copy its CSS verbatim, since
   token names differ per package (`--lido-app-ui-*` vs
   `--lido-landing-ui-*`/`--lido-ui-*`).
4. Grep the target package for an existing component that's structurally
   similar (a badge/pill for a new pill component, a card for a new
   card). Copy its file layout and conventions exactly:
   - `Component.tsx` (forwardRef if the design shows a focus/hover ring
     or the primitive is meant to be composed — check sibling
     components for the pattern, e.g. `Segment.tsx` uses
     `forwardRef<HTMLButtonElement, ...>`).
   - `Component.module.css` (BEM-ish flat classes, no nesting beyond one
     level, `--local-*` custom properties for per-variant color swaps —
     see `Tag.module.css`, `Badge.module.css`).
   - `Component.stories.tsx` using the existing `.storybook/components`
     helpers (`StorySection`, `StoryContainer`, `PageSurface`,
     `DarkSurface`) — don't hand-roll layout.
     ReactNode slot props (`children`, ...) need no `control: false`: the
     global enhancer handles them. Icon-named slots (`icon`, `iconLeft`, ...)
     get an automatic icon select (pass `<IconX />` or `'IconX'` in args);
     `dataTestId` is hidden globally. For other switches, use
     `options` + `mapping` (see CLAUDE.md "Storybook conventions").
   - `index.ts` barrel (named export + type export).
   - Add the export line to `src/index.ts` **alphabetically** — check
     neighbors, this repo keeps that list sorted and CI-clean diffs
     depend on it.
   - Add one line to `src/smoke.test.tsx`'s `cases` array (mounts the
     component once) in the same alphabetical spot.

## 2. Fetch the design

For a single component/frame:

```
get_design_context(nodeId, fileKey, clientFrameworks="react",
  clientLanguages="typescript,css", skillNames="resource:figma-design-to-code")
get_variable_defs(nodeId, fileKey)   # exact hex per Figma variable name
```

`get_design_context` returns React+Tailwind reference code — never paste
it verbatim. Read it for: the class/state logic, the exact spacing/radius
values, and which Figma variable backs each color.

## 3. Map Figma colors to existing tokens — don't hardcode hex

1. Open the target package's `styles/tokens.css`.
2. For every hex value `get_variable_defs` gave you, grep `tokens.css`
   for that **exact hex** (light AND dark block). Nine times out of ten
   it already exists as a semantic token (`--lido-app-ui-color-tint-*`,
   `--lido-app-ui-color-background-*`, `--lido-app-ui-color-text-*`) —
   use that token, not the literal color. This is what makes the
   component theme-aware for free.
3. **The token's name must match the Figma variable's name, not just
   its hex** — hex-only matching picks the wrong token whenever two
   tokens share a value. This has caused real bugs: `Background/Elements/
   default-active` and `-surface` are both `#fff` in light mode (so a
   hex grep matches either), but they diverge in dark — the wrong one
   shipped a token pick that looked identical in light and broke in
   dark. Same failure shape with `Icons/secondary` vs `-tertiary`: don't
   grab whichever token happens to render close enough, map the Figma
   name segment-by-segment onto the token name (`Background/Elements/
   default-active` → `--<prefix>-color-background-default-active`,
   `Icons/secondary` → `--<prefix>-color-icons-secondary`). If the
   name-matched token's hex *doesn't* agree with `get_variable_defs`,
   that's the real signal to stop and double check which Figma variable
   you're actually looking at — not a reason to fall back to whichever
   token's hex happens to match.
4. If a color truly doesn't exist yet, that's a signal to double check
   you're reading the right Figma variable (dark-mode variants often
   reuse a different palette step) before adding anything new.
5. Same rule for radius (`--lido-app-ui-border-radius-*`) and spacing —
   check `tokens.css`'s Radii section before writing a raw px value.
6. **Typography exception**: when Figma's exact `size/line-height`
   combo has no matching token (e.g. "body-2" 14px/24px), don't force a
   mismatched token — hardcode the literal px values, following the
   precedent already in the codebase (`Button.module.css`'s `.big`/
   `.small` classes hardcode `font-size`/`line-height` directly instead
   of reaching for `--font-size-label`). Keep using tokens for
   `font-weight`, `letter-spacing`, and `font-family` on the same rule.

## 4. Composite / masked Figma nodes — the recurring trap

`get_design_context`'s per-node `<img>` src is usually a single flattened
asset — download it directly, done. But two shapes recur that need extra
handling:

- **Background shape + inset foreground** (e.g. a wallet logo = colored
  circle behind a smaller glyph): the JSX shows a wrapper `<div
  className="bg-[#hex] rounded-[10000px] ...">` with a nested `<div
  className="absolute inset-[T%_R%_B%_L%]">` holding the real image.
  Fetch the inner image separately, then hand-build the final SVG:
  `<svg 24x24><circle r="12" fill="#hex"/><g
  transform="translate(x y)">...inner paths...</g></svg>`, computing
  `x`/`y` from the inset percentages × 24 (they're usually exact enough
  that no scaling is needed, only translation — verify the inner
  image's own width/height matches `24 - left% - right%` etc before
  assuming translate-only).
- **`download_assets`'s `export` field can be corrupted** for
  masked/rounded-rect/component-set nodes — it sometimes returns a
  giant dark placeholder rect plus paths at huge absolute coordinates
  (like `-172,-384`) instead of a normalized 0–24 box. When this
  happens: (a) try `get_design_context` on the same node first (its
  flattened `<img>` is usually clean where `download_assets`'s `export`
  isn't), and (b) if you must use `download_assets`, the corruption is
  only in the *outer* wrapper — the inner `<g id="...">` content
  further down the SVG is usually in normal 0–24 coordinates and can be
  extracted directly into a clean file, dropping the broken background
  rect/border paths around it.
- Always `grep -o 'viewBox="[^"]*"'` every downloaded SVG afterward —
  anything not `0 0 24 24` (or the expected size) is a sign you grabbed
  the wrong layer.

## 5. Icon-set specific mechanics (SVGR pipeline)

Source: `packages/<pkg>/src/icons/svg/<category>/*.svg` → generated:
`packages/<pkg>/src/icons/components/<category>/*.tsx`, regenerated by:

```
yarn workspace @lidofinance/<pkg> icons:convert
```

- Category → name-prefix mapping lives in the `switch` in
  `src/icons/converter/index.cjs` (e.g. `case 'base': componentName =
  'Icon' + componentName`). **The prefix must come from the converter,
  not from the SVG filename** — keep source filenames matching Figma's
  bare names (`Cross.svg`, not `IconCross.svg`) so a rename of the
  convention is a one-line converter edit, not a mass file rename.
- The converter fully clears and rebuilds the whole `components/`
  directory every run — safe to add/remove/rename source SVGs freely
  and just re-run it.
- Component-name collisions across categories (e.g. `wallet/Metamask`
  vs `chain/Metamask`) are auto-resolved by prefixing the directory
  name (`WalletsMetamask`) — verify with:
  ```
  find src/icons/components -name '*.tsx' | grep -v 'index\|iconsMap' \
    | xargs -I{} basename {} .tsx | sort | uniq -d   # must be empty
  ```
- After any icon-set change: `rm -rf node_modules/.vite` before
  `yarn test` — Vitest's dep cache goes stale on large `src/icons`
  restructures and throws a misleading "Failed to resolve import" for a
  file that actually exists.
- When the user says a set is "missing icons" / doesn't match Figma,
  don't assume a sibling package's existing icon folder is the right
  source list — go back to the actual Figma node (search
  `search_design_system` or ask for the link) and use its exact symbol
  list as the authoritative set, even if that means deleting
  previously-copied icons that aren't in it.

## 6. Definition of done

Scoped to the touched package only:

```
yarn workspace @lidofinance/<pkg> types
yarn workspace @lidofinance/<pkg> lint
yarn workspace @lidofinance/<pkg> lint:css
yarn workspace @lidofinance/<pkg> test
```

Add `yarn workspace @lidofinance/<pkg> build` when the change is
structurally large (new components, icon-set restructure) — it catches
Rollup-level issues unit tests won't (e.g. unused-import warnings are
fine/pre-existing, but an actual build failure is not).

Report pre-existing warnings as pre-existing (grep for whether they
predate your diff) — don't claim a clean slate you didn't produce, and
don't "fix" unrelated warnings while in there.

## 7. Visual verification against Figma (screenshot audit)

This project has no visual-regression CI — verification is a manual,
one-off Playwright-vs-Figma-screenshot pass, not a permanent test suite
(confirm which the user wants before building infrastructure). Two
full passes of this (Accordion, then Input) both in `lido-app-ui`
landed on the same shape below — treat it as the default, not just one
option.

1. Launch the package's own Storybook, don't reuse another package's —
   but `lsof -ti:<port> -sTCP:LISTEN` first: another concurrent session
   (see §8) may already have it running against the same working tree,
   in which case reuse it (it picks up your edits via HMR) instead of
   spawning a second one on the same port:
   ```
   cd packages/<pkg> && nohup yarn dev > /tmp/storybook-<pkg>.log 2>&1 &
   timeout 60 bash -c 'until curl -sf http://localhost:<port> >/dev/null; do sleep 1; done'
   ```
   Ports: lido-ui 5555, lido-landing-ui 5556, lido-app-ui 5557. Only
   kill it at the end (`lsof -ti:<port> -sTCP:LISTEN | xargs -r kill`)
   if you started it yourself — check the process's `etime`/cwd
   (`ps -p <pid> -o pid,etime,command`, `lsof -p <pid> -a -d cwd`)
   before killing one you didn't launch.
2. If `npx playwright` isn't already resolvable as a package (check
   `npx --yes playwright --version`), write the driver script into the
   npx cache dir Node actually resolves `playwright` from — a script
   under `/tmp` fails with `ERR_MODULE_NOT_FOUND` even though the
   package is installed:
   ```
   find ~/.npm/_npx -maxdepth 3 -iname playwright   # find the cache dir
   # write your .mjs script INTO that directory, then:
   node ~/.npm/_npx/<hash>/your_script.mjs
   ```
3. Screenshot the story directly (no Storybook chrome, exact
   component bounds):
   `http://localhost:<port>/iframe.html?id=<story-id>&viewMode=story`
   — story id is `kebab(title)--kebab(exportName)`, e.g. title
   `'Data display/Tag'` export `Variants` → `data-display-tag--variants`.
4. Fetch the matching Figma frame: `get_screenshot(nodeId, fileKey,
   maxDimension=...)`, then `curl -sL -o ref.png <image_url>` — the URL
   is short-lived, download immediately, don't defer.
5. Read both PNGs and compare side by side yourself; don't just assert
   they match — actually look for background/text color per variant,
   radius, spacing, disabled/hover treatment, icon choice.
6. **Scope every Playwright selector past the Storybook chrome, or
   you'll screenshot/measure the wrong element.** A bare `button` or
   `svg` locator matches the addon panel's own controls first (an
   args-table `<button>Set string</button>`, or the dark-mode toggle's
   `<svg>` in the corner) — `.first()` silently grabs those instead of
   your component. Always scope to `#storybook-root` first, then to an
   attribute your component actually has (`button[aria-expanded]` for
   an accordion header, `span[class*="Accordion-module__chevron"]` /
   `span[class*="Input-module__icon"]` for a CSS-module class whose
   hash you don't know ahead of time — `class*=` matches the stable
   prefix). When still unsure, dump candidates first instead of
   guessing an index:
   ```js
   await page.locator('#storybook-root span').evaluateAll(els =>
     els.map(el => ({ cls: el.className, color: getComputedStyle(el).color })))
   ```
   For hover-only content, drive it: `page.locator(...).hover()` +
   `waitForTimeout(300-400)` before the screenshot.
7. **Crop tight around the element in question, not just the whole
   story.** A 10%-vs-40% border opacity or a 40%-vs-70% icon opacity is
   real and worth fixing but invisible in a full-page thumbnail —
   screenshot with a `clip` built from the element's own `boundingBox()`
   plus ~10-20px padding:
   ```js
   const box = await el.boundingBox()
   await page.screenshot({ path, clip: { x: box.x - 10, y: box.y - 10, width: box.width + 20, height: box.height + 24 } })
   ```
8. **Pair every visual claim with a `getComputedStyle` readout** —
   don't just assert two screenshots look different, print the actual
   value on both sides of the fix:
   ```js
   getComputedStyle(el).borderBottomColor   // "rgba(12, 12, 13, 0.1)" -> "...0.4)" after fix
   getComputedStyle(el).gridTemplateRows    // "24px" instead of "0px" caught a real CSS-grid bug, not a screenshot artifact
   ```
   This is what makes a "before/after" claim checkable instead of
   eyeballed, and it's cheap: read it in the same Playwright pass that
   takes the screenshot.
9. **Some mismatches only show in one theme — check both.** A wrong
   token can happen to resolve to the same value as the right one in
   light mode (e.g. `background-surface` and `background-default-active`
   are both `#fff` in light) and only diverge in dark. Don't conclude
   "matches" from a light-mode screenshot alone if the CSS reaches for
   a `-surface`/`-active`/theme-sensitive token — toggle dark mode via
   the Storybook theme button and re-shoot:
   ```js
   await page.locator('button[aria-label="Switch to dark theme"]').click()
   ```
10. **To get a true "before" screenshot when you've already edited the
    file in place** (no separate branch/worktree), stash just that file,
    shoot, then restore — the dev server's HMR follows the working tree,
    so this is the only reliable way to capture the pre-fix render after
    the fact:
    ```
    git stash push -u -- path/to/Component.module.css
    # wait ~1-2s for HMR, then screenshot
    git stash pop
    # wait ~1-2s for HMR again before the "after" screenshot
    ```
    Verify the pop restored the right thing with `git diff` before
    moving on — don't assume.
11. When `get_variable_defs` on a whole component-set node returns an
    ambiguous flat list (which variable binds to *which* visual part is
    unclear), re-call it scoped to one specific state/instance node
    (from `get_metadata`'s symbol ids) — a single-state node's variable
    list is small enough that each entry maps to an obvious element.
12. **Publish the before/after as an Artifact**, not just inline chat
    images — this is the deliverable the user actually reviews. Shape
    that's worked twice now: an eyebrow/title header naming the node
    and audit scope, a findings grid (one card per mismatch, plain
    statement of what Figma has vs. what the code had), per-finding
    before/after screenshot pairs (cropped per point 7, computed-style
    readout under each side per point 8), the downloaded Figma reference
    screenshot plus a token-mapping table (Figma variable → hex → repo
    token → what it's used for, marking which rows were already correct
    vs corrected), and a verification checklist echoing §6's commands
    with their actual output. Pass the screenshots as the Artifact
    tool's `files` (root them at the scratch screenshot directory) —
    don't inline them as base64 padding out the HTML.
13. Always kill the dev server when done — but see point 1: only if you
    started it.

## 8. This repo runs multiple concurrent sessions — check before you clobber

Other Claude sessions may be editing the same package at the same time.
Before a large rename or regeneration:

- `git status` first — if you find unexpected staged/new files that
  match what you were about to build, **don't silently overwrite**.
  Read what's there, compare it to what the user actually asked for in
  *this* conversation, and surface the conflict (what exists vs. what
  was asked) before picking a direction.
- After finishing, `git add -A <touched paths>` to fold any stray
  add-then-delete (`AD`) index entries left by a regenerate-in-place
  step into a clean status — don't leave the working tree in a
  confusing half-staged state.
- Never commit unless explicitly asked, even when everything is green.
