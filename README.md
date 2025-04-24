# Lido UI Components v4

> React components (v4) for Lido Finance projects. (Released February 2025)

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)

For release a new version of the library you need to create a commit with `!` like this - `feat!: ui v4`

## Breaking Changes

`useBreakpoint` has been deleted, because getting styles in js is a legacy of styled-components, but the library has switched to module-css. This can be created locally in your project.

## Getting Started

1. Simply add `lido-ui` to your dependencies:

```bash
yarn add @lidofinance/lido-ui
```

2. Import Lido theme provider and wrap your components in `_app.js`:

```js
import { ThemeProvider } from '@lidofinance/lido-ui'

function App({ Component }) {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}
```

3. Import styles into your `_app.js` file:
```tsx
import '@lidofinance/lido-ui/index.css';
```

4. CSS variables are initially embedded in the `index.css` file. To use typography styles across your application, you have two options:

   1. **Include the CSS file**:  
      If you want to use ready-made classes with styles, you need to import an additional CSS file.  
      Insert the following line at the top of your `_app.js` file to import the typography styles:
      ```tsx
      import '@lidofinance/lido-ui/styles/typography.css';
      ```

   2. **Use PostCSS mixins**:  
      If you prefer to use PostCSS mixins for typography, you need to configure PostCSS in your project. Add the `postcss-mixins` plugin to your PostCSS configuration and include the typography mixins provided by the library.  
      Example `postcss.config.js` configuration:
      ```js
      module.exports = {
        plugins: [
          ...
          [
            "postcss-mixins",
            {
               mixinsDir: path.resolve('./node_modules/@lidofinance/lido-ui/dist/styles'),
            },
         ],
        ],
      };
      ```  
      Once configured, you can use the typography mixins directly in your CSS files. For example:
      ```css
      @mixin typography-heading;
      ```

## Usage

Simply import any components and use in your project:

```js
import { Button } from '@lidofinance/lido-ui'
```

## Developing

- `yarn dev` - Start Storybook locally to start developing components.
- `yarn build` - Build all components.
- `yarn test` - Run tests across components.
- `yarn lint` - Run eslint across components.

### Initial setup

1. Install the required node version
```
nvm use
```

2. To get started, install the dependencies:

```
yarn install
```

3. Build the packages:

```
yarn build
```

4. Run the storybook:

```yarn dev
```

## Publishing

Packages are automatically published to npm when you push to master. The publication is based on [semantic-release](https://github.com/semantic-release/semantic-release) and [@qiwi/multi-semantic-release](https://github.com/qiwi/multi-semantic-release).

For correct version detection, please follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/).

## Customizing CSS Variables

Lido UI provides a comprehensive set of CSS variables that can be overridden to match your application's design system. This allows you to maintain the functionality of Lido UI components while adapting their appearance to your brand.

### Override Method

To customize the CSS variables, create a CSS file in your project with new definitions:

```css
:root {
  /* Override typography */
  --lido-ui-font-family: "Your-Custom-Font", sans-serif;
  --lido-ui-font-size-body: 16px;
  --lido-ui-line-height-body: 24px;
  
  /* Override colors */
  --lido-ui-color-accent-ocean-static: #your-primary-color;
  --lido-ui-color-background: #your-background-color;
}
```

Import this file after the Lido UI styles in your application:

```tsx
import '@lidofinance/lido-ui/index.css';
import './your-custom-variables.css'; // Import your overrides after Lido UI styles
```

### Customizable Categories

Lido UI provides several categories of CSS variables that can be customized:

1. **Typography**
   - Font family: `--lido-ui-font-family`
   - Font sizes: `--lido-ui-font-size-*` (h1, h2, h3, h4, subheader, control, body, description)
   - Font weights: `--lido-ui-font-weight-*` (bold, medium, regular, light, extra-light)
   - Line heights: `--lido-ui-line-height-*` (h1, h2, h3, h4, subheader, control, body, description)

2. **Colors**
   - Theme colors: `--lido-ui-color-*` (background, foreground, primary, text, etc.)
   - Accent colors: `--lido-ui-color-accent-*` (ocean-static, berry-static, leaf-static, etc.)
   - Border colors: `--lido-ui-color-borders-*` (fog, mist, etc.)

3. **Border Radiuses**
   - `--lido-ui-border-radius-*` (4, 40, 50, 60, 70)

4. **Theme-Specific Variables**
   - Light/dark mode visibility: `--lido-ui-light-mode-visibility`, `--lido-ui-dark-mode-visibility`
   - Display properties: `--lido-ui-light-display`, `--lido-ui-dark-display`

### Media Queries

Some variables like font sizes and line heights have responsive variants defined in media queries. You can also override these for specific breakpoints:

```css
@media (width <= 899px) {
  :root {
    --lido-ui-font-size-h1: 48px;
    --lido-ui-line-height-h1: 52px;
  }
}
```
