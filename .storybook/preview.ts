import { WithThemeProvider } from './components/WithThemeProvider.js'

import './styles/storybook.css'
import '../styles/global.css'
import { Decorator } from '@storybook/react'

export const parameters = {
  controls: { hideNoControlsWarning: true },
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
