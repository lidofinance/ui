import '../../packages/theme'
import { createGlobalStyle } from 'styled-components'
import { CookieThemeProvider } from '../../packages/theme'
import { Decorator } from '@storybook/react'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0 !important;
    display: flex;
  }

  html, body, #root {
    min-height: 100vh;
  }
`

export const WithThemeProvider: Decorator<any> = (
  Story,
  { args }
): JSX.Element => {
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
