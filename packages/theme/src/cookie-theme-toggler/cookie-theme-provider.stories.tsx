import { Story, Meta } from '@storybook/react'

import { Block } from '../../../block'
import { Checkbox } from '../../../checkbox'
import { Input } from '../../../input'
import { Text } from '../../../text'

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
        <Text>Some text</Text>
        <br />
        <Checkbox label='Some checkbox' />
        <br />
        <Input label='Some input' />
      </Block>
    </CookieThemeProvider>
  </>
)
