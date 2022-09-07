import { Story, Meta } from '@storybook/react'

import { Block } from '@lidofinance/block'

import { ThemeToggler } from './cookie-theme-toggler'

export default {
  title: 'Theme/Cookie Theme Provider',
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
    <Block>The block depended by theme cookie</Block>
  </>
)
