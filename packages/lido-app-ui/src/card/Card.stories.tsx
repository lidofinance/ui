import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Input } from '../input'
import { Tag } from '../tag'
import { Card } from '.'

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    size: 'big',
  },
  argTypes: {
    size: {
      options: ['big', 'small'],
      control: { type: 'select' },
    },
    interactive: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A plain surface container — padding, radius, and background only. `size="big"` is a white 32px-padded box with a 32px gap between children; `size="small"` is a 16px-padded box with a 16px gap that starts on the default (grey) background and, when `interactive`, lightens to surface on hover.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Big: Story = {
  render: (args) => (
    <Card {...args}>
      <strong>Choose a token to claim</strong>
      <Input placeholder='Placeholder' />
      <Button>Button</Button>
    </Card>
  ),
}

export const Small: Story = {
  args: { size: 'small' },
  render: (args) => (
    <Card {...args}>
      <strong>CSM Sentinel</strong>
      <Tag variant='info'>Notification tool</Tag>
    </Card>
  ),
}

export const Interactive: Story = {
  args: { size: 'small', interactive: true },
  render: (args) => <Card {...args}>Hover me</Card>,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'When the card itself is clickable, `interactive` lightens the background on hover.',
      },
    },
  },
}
