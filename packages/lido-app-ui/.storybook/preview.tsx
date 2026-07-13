import React from 'react'
import { Decorator } from '@storybook/react'
import {
  ThemeName,
  CookieThemeProvider,
  ThemeToggler,
} from '@lidofinance/lido-shared-ui'

const WithThemeProvider: Decorator<{
  themeOverride?: ThemeName | 'follow cookie and system'
}> = (Story, { args }): JSX.Element => {
  return (
    <CookieThemeProvider
      overrideThemeName={
        args.themeOverride === 'follow cookie and system'
          ? undefined
          : (args.themeOverride as ThemeName | undefined)
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
  argTypes: {
    themeOverride: {
      control: 'inline-radio',
      options: ['dark', 'light', 'follow cookie and system'],
    },
  },
  decorators: [WithThemeProvider],
}
