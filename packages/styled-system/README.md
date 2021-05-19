# Styled System HOC

React HOC based on [Styled System](https://styled-system.com/) for Lido Finance projects.
Part of [Lido UI Components](https://github.com/lidofinance/ui/#readme)

Styled System lets you quickly build custom UI components with constraint-based style props based on scales defined in your theme.

## Install

```bash
yarn add @lidofinance/styled-system
```

## Usage

```ts
import { withStyledSystem } from '@lidofinance/styled-system'

const WrappedComponent = withStyledSystem(SomeComponent)
```

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)
