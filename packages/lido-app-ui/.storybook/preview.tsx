import React from 'react'
import { Decorator } from '@storybook/react'
import { LightThemeProvider } from '@lidofinance/lido-shared-ui'

import '../styles/global.css'
import './styles/storybook.css'

// Storybook's preview surface is pinned to light rather than driven by a
// toggler, for consistent docs/screenshots.
const WithSurface: Decorator = (Story): JSX.Element => (
  <LightThemeProvider>
    <div
      style={{
        fontFamily: 'var(--lido-app-ui-font-family)',
        color: 'var(--lido-app-ui-color-text-default)',
        background: 'var(--lido-app-ui-color-background-page)',
        padding: 16,
        boxSizing: 'border-box',
      }}
    >
      <Story />
    </div>
  </LightThemeProvider>
)

export default {
  tags: ['autodocs'],
  parameters: {
    controls: { hideNoControlsWarning: true },
    viewport: {
      viewports: {
        px1440: {
          name: '1440px — desktop',
          styles: { width: '1440px', height: '900px' },
        },
        px900: {
          name: '900px — md boundary',
          styles: { width: '900px', height: '900px' },
        },
        px899: {
          name: '899px — md-down',
          styles: { width: '899px', height: '900px' },
        },
        px599: {
          name: '599px — sm-down',
          styles: { width: '599px', height: '800px' },
        },
        px375: {
          name: '375px — mobile',
          styles: { width: '375px', height: '800px' },
        },
      },
    },
  },
  decorators: [WithSurface],
}
