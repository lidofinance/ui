import { Decorator } from '@storybook/react'
import { createGlobalStyle } from 'styled-components'
import { CookieThemeProvider, ThemeName } from '../../packages/theme/index.js'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0 !important;
    display: flex;
  }

  html, body, #root {
    min-height: 100vh;
  }
`

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
      <GlobalStyle />
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
