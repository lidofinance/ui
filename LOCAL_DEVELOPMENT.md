# Local Development (linking into another project)

## Workflow

```bash
npm i -g yalc   # one-time
```

In **this repo** (`lido-ui`), build and push to the local yalc store — pick the script matching which package you're testing:

```bash
yarn yalc:app       # builds lido-shared-ui + lido-app-ui, pushes both
yarn yalc:landing    # builds lido-shared-ui + lido-landing-ui, pushes both
```

In the **consumer** project, one-time setup:

```bash
yalc add @lidofinance/lido-shared-ui
yalc add @lidofinance/lido-app-ui   # or @lidofinance/lido-landing-ui
yarn install
```

add to `.gitignore`
```gitignore
.yalc
yalc.lock
```

`yalc add` rewrites those two `package.json` entries to `file:.yalc/...` and creates a `.yalc/` directory plus a `yalc.lock` file in the consumer. Add both to the consumer's `.gitignore` so this local-only linking state doesn't get committed:


After changes are implemented in *this repo*, run  `yarn yalc:app`/`yarn yalc:landing` and then `yarn install` in the consumer to pick up the changes.

To unlink yalc updates in your repo: `yalc remove @lidofinance/lido-app-ui @lidofinance/lido-shared-ui @lidofinance/lido-landing-ui`, then `yarn install`.

## Docker builds in the consumer

Since `.yalc` is gitignored, it only exists on disk where you ran `yalc add` —
a Docker build's context picks it up from there (`.dockerignore` only matters
if it explicitly excludes `.yalc`, which it normally doesn't). But a
`Dockerfile` that does `COPY package.json yarn.lock ./` + `RUN yarn install`
*before* a later `COPY . .` will fail `yarn install`: the `file:.yalc/...`
dependency isn't in the build context yet at that point. Copy `.yalc` in
before the install step, as an optional copy so CI builds (where `.yalc`
never existed) don't break:

```dockerfile
COPY package.json yarn.lock .yarnrc.yml ./
# .yalc* (not .yalc) makes this an optional copy — BuildKit skips it with no
# match instead of failing when .yalc is absent (the normal CI case).
COPY .yalc* ./.yalc
RUN yarn install --immutable
```
