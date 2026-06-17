import { Decorator } from '@storybook/react'
import { ThemeName } from '../../src/theme/constants.js'
import { CookieThemeProvider } from '../../src/theme/cookie-theme-provider.js'
import { ThemeToggler } from '../../src/index.js'

export const WithThemeProvider: Decorator<{
  themeOverride?: ThemeName | 'follow cookie and system'
}> = (Story, { args }): JSX.Element => {
  return (
    <CookieThemeProvider
      overrideThemeName={
        args.themeOverride === 'follow cookie and system'
          ? undefined
          : args.themeOverride
      }
    >
      <div
        style={{
          minWidth: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '1em 1em 0 1em',
          boxSizing: 'border-box',
          background: 'var(--lido-ui-color-text-inverted, #fff)',
        }}
      >
        <ThemeToggler />
      </div>

      <div
        style={{
          minHeight: '10vh',
          color: 'var(--lido-ui-color-text-primary, #000)',
          padding: '1em',
          boxSizing: 'border-box',
          background: 'var(--lido-ui-color-text-inverted, #fff)',
        }}
      >
        <Story />
      </div>
    </CookieThemeProvider>
  )
}
