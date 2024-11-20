import type { Meta, StoryObj } from '@storybook/react'
import { InfoIcon } from '.'

const meta = {
  title: 'Layout/InfoIcon',
  component: InfoIcon,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'big',
    color: 'black',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InfoIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
