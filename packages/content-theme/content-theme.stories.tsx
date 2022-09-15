import { Story, Meta } from '@storybook/react'
import { Block } from '@lidofinance/block'

import { ContentTheme } from './content-theme'

export default {
  title: 'Theme/Content Theme',
} as Meta

export const Basic: Story = () => (
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
