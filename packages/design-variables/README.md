# Design System Tokens Viewer

A Storybook component that displays all design tokens from the design system including CSS variables, breakpoints, and typography mixins.

## Features
- **CSS Variables**: From colors, typography, and variables files
- **Breakpoints**: Custom media queries from breakpoints.css
- **Typography Mixins**: All @define-mixin declarations
- **Search & Filter**: Find tokens by name and value
- **Theme Support**: Values update with light/dark theme switching
- **Color Previews**: Visual previews for color variables

### Regenerate Tokens

When you modify design tokens in CSS files, run:

```bash
yarn css-variables:generate
```

This automatically updates all token types and is run during the build process.
