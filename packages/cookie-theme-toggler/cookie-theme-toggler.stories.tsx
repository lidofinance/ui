import { Story, Meta } from '@storybook/react'

import { Block } from '../block'
import { ContentTheme } from '../content-theme'
import { Text } from '../text'

import { ThemeToggler } from './cookie-theme-toggler'

export default {
  title: 'Theme/Cookie Theme Provider',
  args: {
    themeOverride: 'follow cookie and system',
  },
} as Meta

export const Providers: Story = () => (
  <>
    Use button to toggle theme{' '}
    <span role='img' aria-label='right'>
      👉
    </span>{' '}
    <ThemeToggler /> and reload page!
    <br />
    <br />
    <Text>The block depended by theme cookie</Text>
    <Block>Lorem ipsum dolor sit amet...</Block>
    <br />
    <br />
    <Text>Example of using ContentTheme component</Text>
    <ContentTheme
      darkContent={<Block>You see only dark content!</Block>}
      lightContent={<Block>You see only light content!</Block>}
    />
  </>
)
