import { Story, Meta } from '@storybook/react'

import { Block } from '../styles'

import { CookieThemeProvider } from './cookie-theme-provider'
import { ThemeToggler } from './cookie-theme-toggler'

export default {
  title: 'Theme/Cookie Theme Provider',
} as Meta

export const Providers: Story = () => (
  <>
    <CookieThemeProvider>
      Use button to toggle theme{' '}
      <span role='img' aria-label='right'>
        👉
      </span>{' '}
      <ThemeToggler />
      <br />
      <br />
      <Block>
        The block depended by theme cookie
      </Block>
    </CookieThemeProvider>
  </>
)
