import type { Decorator } from '@storybook/react'
import { CookieThemeProvider, ThemeName } from '@lidofinance/lido-shared-ui'
import { ThemeToggleButton } from './ThemeToggleButton'

// Drives the theme from the toolbar's `themeOverride` global (see
// preview.tsx) instead of pinning to light, so stories can be checked in
// both themes without leaving Storybook. Also renders a toggle button on
// the story itself, same as lido-landing-ui's decorator, for a one-click
// flip without touching the toolbar.
export const WithThemeProvider: Decorator = (
  Story,
  { globals, parameters },
) => {
  const themeOverride = globals.themeOverride as
    | ThemeName
    | 'follow cookie and system'
    | undefined
  console.log(parameters.storyBackground)
  const background = parameters.storyBackground ?? 'var(--stotybook-background)'

  return (
    <CookieThemeProvider
      overrideThemeName={
        themeOverride === 'follow cookie and system' ? undefined : themeOverride
      }
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '16px 16px 0',
          boxSizing: 'border-box',
          background: background,
        }}
      >
        <ThemeToggleButton />
      </div>

      <div
        style={{
          fontFamily: 'var(--lido-app-ui-font-family)',
          color: 'var(--lido-app-ui-color-text-default)',
          background: background,
          padding: 20,
          boxSizing: 'border-box',
        }}
      >
        <Story />
      </div>
    </CookieThemeProvider>
  )
}
