import { Decorator } from '@storybook/react'
import { ReactElement } from 'react'
import {
  ThemeName,
  CookieThemeProvider,
  ThemeToggler,
} from '@lidofinance/lido-shared-ui'

export const WithThemeProvider: Decorator = (
  Story,
  { globals },
): ReactElement => {
  const themeOverride = globals.themeOverride as
    | ThemeName
    | 'follow cookie and system'
    | undefined

  return (
    <CookieThemeProvider
      overrideThemeName={
        themeOverride === 'follow cookie and system' ? undefined : themeOverride
      }
    >
      <div
        style={{
          minWidth: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '1em 1em 0 1em',
          boxSizing: 'border-box',
          background: 'var(--lido-ui-color-text-inverted)',
        }}
      >
        <ThemeToggler />
      </div>

      <div
        style={{
          minHeight: '10vh',
          color: 'var(--lido-ui-color-text-primary)',
          padding: '1em',
          boxSizing: 'border-box',
          background: 'var(--lido-ui-color-text-inverted)',
        }}
      >
        <Story />
      </div>
    </CookieThemeProvider>
  )
}
