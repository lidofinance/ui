import { StoryFn, Meta } from '@storybook/react'
import { Block } from '../../block'
import { ContentTheme } from '.'

export default {
  title: 'Theme/Content Theme',
} satisfies Meta

export const Basic: StoryFn = () => (
  <>
    <ContentTheme
      darkContent={
        <Block>You see only dark content! Light content is hidden!</Block>
      }
      lightContent={
        <Block>You see only light content! Dark content is hidden!</Block>
      }
    />
  </>
)
