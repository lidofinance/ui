import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '.'

const meta = {
  title: 'Dialogs/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  args: {
    icon: {
      size: 'big',
      color: 'black',
    },
    position: 'right',
    content:
      'Under normal circumstances. The withdrawal time may take longer under special circumstances',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Content: Story = {
  args: {
    children: 'Hover me',
    position: 'right',
    content:
      'Under normal circumstances. The withdrawal time may take longer under special circumstances',
  },
}
