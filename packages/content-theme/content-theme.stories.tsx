import { Story, Meta } from '@storybook/react'
import { Text } from '@lidofinance/text'
import { Block } from '@lidofinance/block'

import { ContentTheme } from './content-theme'

export default {
  title: 'Theme/Content Theme',
} as Meta

export const Basic: Story = () => (
  <>
    <ContentTheme
      darkContent={
        <Block>
          <Text>You see only dark content!</Text>
        </Block>
      }
      lightContent={
        <Block>
          <Text>You see only light content!</Text>
        </Block>
      }
    />
  </>
)
