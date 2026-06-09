import { StoryFn, Meta } from '@storybook/react'
import { ContentTheme } from './'
import { Block } from '../block'

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
