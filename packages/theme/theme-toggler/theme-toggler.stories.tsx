import { StoryFn, Meta } from '@storybook/react'
import { Block } from '../../block'
import { ContentTheme } from '../content-theme'
import { Text } from '../../text'
import { ThemeToggler } from '.'

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
