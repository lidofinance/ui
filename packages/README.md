# Lido UI Components

This repository contains a collection of React components for the Lido UI Design System.

## dataTestId Standards

### General Principles

All components in the library should support the `dataTestId` attribute, which is used to identify elements in automated tests (e2e, integration, etc.).

### Implementation

1. **Type Structure**

For each component, a separate `[ComponentName]DataTestId` type should be declared:

```typescript
export type ButtonDataTestId = {
  root?: string
  icon?: string
  content?: string
  // other component elements
}
```

2. **Required and Optional Fields**

- The `root` field should be present in every type and applied to the root element of the component
- All fields should be optional (`?`)
- Each interactive sub-element of a component should have the ability to receive its own `data-testid`

3. **Field Naming**

- `root` - the root element of the component
- For repeating elements, use meaningful names that reflect the purpose of the element (e.g., `icon`, `content`, `input`, etc.)

4. **Usage**

Example of using dataTestId in a component:

```tsx
<div className={styles.container} data-testid={dataTestId?.root}>
  <span className={styles.icon} data-testid={dataTestId?.icon}>
    {icon}
  </span>
  <span className={styles.content} data-testid={dataTestId?.content}>
    {children}
  </span>
</div>
```

5. **Complex Components**

For complex components that may include other components, pass the appropriate `dataTestId` fields to the nested components:

```tsx
<Button 
  dataTestId={{
    root: dataTestId?.buttonRoot,
    icon: dataTestId?.buttonIcon
  }}
>
  {children}
</Button>
```

### Example Usage in Tests

```tsx
// Example usage in a component
<Button
  dataTestId={{
    root: "submit-button",
    icon: "submit-button-icon",
    content: "submit-button-content"
  }}
>
  Submit
</Button>

// Example usage in a Playwright test
await expect(page.locator('[data-testid="submit-button"]')).toBeVisible();
await expect(page.locator('[data-testid="submit-button-icon"]')).toBeVisible();
```

### Naming Recommendations for Tests

- Use unique and meaningful names
- Follow the format `[component]-[purpose]-[element]`
- Use kebab-case for word separation

# Lido UI Fonts

The library contains fonts used in Lido UI.

## Available fonts

- FiraCode-VariableFont_wght.woff2
- IBMPlexSerif-Medium.woff2
- Manrope-VariableFont_wght.woff2


## Usage with Next.js


```js
import { manrope, ibmPlexSerif, firacode } from '@lidofinance/lido-ui/fonts';

export default function App({ Component, pageProps }) {
  return (
    <div className={`${manrope.className} ${firacode.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
``` 