import { StoryFn, Meta } from '@storybook/react'
import { Block } from '../block/index.js'
import { ContentTheme } from './index.js'

export default {
  title: 'Theme/Content Theme',
} as Meta

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
