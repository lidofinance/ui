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


## Font Family Implementation

### General Principles

Each component in the library should specify `font-family` in its root element CSS to ensure consistent typography across different applications.

### Implementation

1. **Use CSS Variables**

Always use the CSS variable `--lido-ui-font-family` for specifying the font family:

```css
.componentRoot {
  font-family: var(--lido-ui-font-family);
  /* other styles */
}
```

2. **Root Element Application**

The font-family should be applied to the root element of each component, ensuring that all text within the component inherits the correct font.

3. **Independence from Host Application**

This approach ensures that components are not dependent on the font settings of the host application where they are integrated.

4. **Customization by Host Applications**

Host applications can override the default font family by modifying the `--lido-ui-font-family` variable in their own CSS:

```css
:root {
  --lido-ui-font-family: "CustomFont", sans-serif;
}
```

The default value is defined in `typography-variables.css`:

```css
--lido-ui-font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
```

5. **Examples**

Component implementation example:

```css
/* Component.module.css */
.component {
  font-family: var(--lido-ui-font-family);
  /* other styles */
}
```
