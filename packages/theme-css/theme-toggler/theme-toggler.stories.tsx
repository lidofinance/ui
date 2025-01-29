import { StoryFn, Meta } from '@storybook/react'
import { Block } from '../block'
import { ContentTheme } from '../content-theme'
import { ThemeToggler } from './'

export default {
  title: 'Theme/Toggler',
  args: {
    themeOverride: 'follow cookie and system',
  },
} satisfies Meta

export const Basic: StoryFn = () => (
  <>
    Use button to toggle theme{' '}
    <span role='img' aria-label='right'>
      👉
    </span>{' '}
    <ThemeToggler /> and reload page!
    <br />
    <br />
    <p>The block depended by theme cookie</p>
    <Block>Lorem ipsum dolor sit amet...</Block>
    <br />
    <br />
    <p>Example of using ContentTheme component</p>
    <ContentTheme
      darkContent={<Block>You see only dark content!</Block>}
      lightContent={<Block>You see only light content!</Block>}
    />
  </>
)
