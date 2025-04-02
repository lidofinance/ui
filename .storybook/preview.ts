import { WithThemeProvider } from './components/WithThemeProvider.js'

import './styles/storybook.css'
import '../styles/global.css'
import { Decorator } from '@storybook/react'

const defaultViewports = {
  px1500: {
    name: '1500px',
    styles: {
      width: '1500px',
      height: '500px',
    },
  },
  px900: {
    name: '900px',
    styles: {
      width: '900px',
      height: '800px',
    },
  },
  px600: {
    name: '600px',
    styles: {
      width: '600px',
      height: '800px',
    },
  },
  px500: {
    name: '500px',
    styles: {
      width: '500px',
      height: '800px',
    },
  },
}

export const parameters = {
  controls: { hideNoControlsWarning: true },
  viewport: {
    viewports: {
      ...defaultViewports,
    },
  },
}
export const args = {
  themeOverride: 'light',
}
export const argTypes = {
  themeOverride: {
    control: 'inline-radio',
    options: ['dark', 'light', 'follow cookie and system'],
  },
}

export const decorators: Decorator[] = [WithThemeProvider]
