# Icon Components

React components for Lido Finance projects.
Part of [Lido UI Components](https://github.com/lidofinance/ui/#readme)

## Install

```bash
yarn add @lidofinance/icons
```

## Usage

```ts
import { ArrowBottom } from '@lidofinance/icons'
import { Lock } from '@lidofinance/icons'
```

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)

## Icons

The list of icons is available at [https://ui.lido.fi/?path=/story/images-icons--list](https://ui.lido.fi/?path=/story/images-icons--list)

## Adding a new icon

1. Place the `.svg` file to the `src/svg` folder.
2. Run `convert` script from the root repository folder: `yarn workspace @lidofinance/icons run convert` or from current folder: `yarn convert`

That's it. The new component should appear in the `src/index.tsx` file.
