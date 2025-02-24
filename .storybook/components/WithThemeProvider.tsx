import { Decorator } from '@storybook/react'
import { ThemeName } from '../../packages/theme-css/constants'
import { CookieThemeProvider } from '../../packages/theme-css/cookie-theme-provider'
import { ThemeToggler } from '../../packages'

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
        }}
      >
        <ThemeToggler />
      </div>

      <div
        style={{
          minHeight: '100vh',
          color: 'var(--lido-color-text)',
          padding: '1em',
          background: 'var(--lido-color-background)',
        }}
      >
        <Story />
      </div>
    </CookieThemeProvider>
  )
}
