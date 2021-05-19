# Utils

Utils for Lido Finance projects.
Part of [Lido UI Components](https://github.com/lidofinance/ui/#readme)

## Install

```bash
yarn add @lidofinance/utils
```

## Usage

```ts
import { LidoComponentProps } from '@lidofinance/utils'

export type ButtonProps = LidoComponentProps<
  'button',
  {
    size?: 'md' | 'lg'
    variant?: 'filled' | 'outlined'
  }
>
```

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)
