import React, { ReactElement } from 'react'
import { Decorator } from '@storybook/react'
import {
  ThemeName,
  CookieThemeProvider,
  ThemeToggler,
} from '@lidofinance/lido-shared-ui'

const WithThemeProvider: Decorator = (Story, { globals }): ReactElement => {
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

export default {
  tags: ['autodocs'],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  initialGlobals: {
    themeOverride: 'light',
  },
  // a global rather than an arg: as an argType it was spread into every
  // component, showing up in the DOM and in the generated code snippets
  globalTypes: {
    themeOverride: {
      description: 'Theme',
      toolbar: {
        title: 'Theme',
        items: ['dark', 'light', 'follow cookie and system'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [WithThemeProvider],
}
