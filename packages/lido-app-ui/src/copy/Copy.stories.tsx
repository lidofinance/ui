import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { Typography } from '../typography'
import { Copy } from '.'

const meta = {
  title: 'Buttons/Copy',
  component: Copy,
  tags: ['autodocs'],
  args: { text: '0x56f4a7b2c9d1e8f3a6b5c4d3e2f1a0b9c8d7c12e' },
  parameters: {
    docs: {
      description: {
        component:
          'Chrome-less inline icon that copies `text` to the clipboard. The copy icon cross-fades into a check for a second. The icon scales with the surrounding line height.',
      },
    },
  },
} satisfies Meta<typeof Copy>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const InText: Story = {
  render: (args) => (
    <StorySection>
      <Typography variant='body' style={{ display: 'flex', gap: 4 }}>
        Body <Copy {...args} />
      </Typography>
      <Typography variant='bodyLarge' style={{ display: 'flex', gap: 4 }}>
        Body large <Copy {...args} />
      </Typography>
    </StorySection>
  ),
  parameters: { controls: { disable: true } },
}
