# Lido UI Components

> React components for Lido Finance projects.

Check out our storybook at [https://ui.lido.fi](https://ui.lido.fi) (not available yet)

## Usage

- `yarn dev` - Start Storybook locally to start developing components.
- `yarn build` - Build all components.
- `yarn test` - Run tests across components.

## Linking

To include a local version of modified lido in your project, run `yarn link` in `packages/lido` and run `yarn link lido` in project you want to use it in. Make sure to run `yarn unlink lido` after it's no longer needed.
