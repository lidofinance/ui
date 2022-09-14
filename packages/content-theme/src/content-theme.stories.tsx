import { Story, Meta } from '@storybook/react'

import { ContentTheme } from './content-theme'

export default {
  title: 'Theme/Content Theme',
} as Meta

export const Basic: Story = () => (
  <>
    <ContentTheme
      darkContent={'You see only dark content!'}
      lightContent={'You see only light content!'}
    />
  </>
)
