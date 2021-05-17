# Lido UI Components

> React components for Lido Finance projects.

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)

## Usage

- `yarn dev` - Start Storybook locally to start developing components.
- `yarn build` - Build all components.
- `yarn build:package package_name` - Build `package_name` component.
- `yarn test` - Run tests across components.

## Updating Packages

After modifications to a package, in its folder run:

`yarn version [patch, minor, major]`

That's it. All other packages relying on this package will automatically be updated.

## Linking

To include a local version of modified lido in your project, run `yarn link` in `packages/lido` and run `yarn link lido` in project you want to use it in. Make sure to run `yarn unlink lido` after it's no longer needed.
