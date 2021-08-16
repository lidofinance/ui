# Modal Button Components

React components for Lido Finance projects.
Part of [Lido UI Components](https://github.com/lidofinance/ui/#readme)

## Install

```bash
yarn add @lidofinance/icons
yarn add @lidofinance/modal-button
```

## Usage

```ts
import { ModalButton } from '@lidofinance/modal-button'
import { Eth } from '@lidofinance/icons'

// Common using
<ModalButton icon={<Eth />} {...props} />

// Manual size: size props of ModalButton does not affect to the icon
<ModalButton icon={<Eth width={128} height={128} />} {...props} />
```

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)
