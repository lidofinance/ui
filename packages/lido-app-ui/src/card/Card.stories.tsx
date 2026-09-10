import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
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
          'A plain surface container — padding, radius, and background only. `size="big"` is a white 32px-padded box; `size="small"` is a 16px-padded box that starts on the default (grey) background and, when `interactive`, lightens to surface on hover.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Big: Story = {
  render: (args) => (
    <Card {...args} style={{ width: 480 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}
      >
        <div
          style={{ display: 'flex', justifyContent: 'space-between', gap: 20 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <strong>Choose a token to claim</strong>
            <span style={{ opacity: 0.5, fontSize: 14 }}>
              Splitter addresses receive stETH. Choose the token for your
              Rewards Address.
            </span>
          </div>
        </div>
        <Input placeholder='Placeholder' />
        <Button>Button</Button>
      </div>
    </Card>
  ),
}

export const Small: Story = {
  args: { size: 'small' },
  render: (args) => (
    <Card {...args} style={{ width: 248 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div
          style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}
        >
          <strong style={{ fontSize: 14 }}>CSM Sentinel</strong>
        </div>
        <span style={{ opacity: 0.4, fontSize: 12 }}>
          Provides your CSM Node Operator events to the telegram chats
        </span>
      </div>
      <Tag variant='info'>Notification tool</Tag>
    </Card>
  ),
}

export const InteractiveSmall: Story = {
  args: { size: 'small', interactive: true },
  render: (args) => (
    <Card {...args} style={{ width: 248 }}>
      <strong style={{ fontSize: 14 }}>Hover me</strong>
    </Card>
  ),
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

export const Sizes: Story = {
  render: () => (
    <StoryContainer gap={16}>
      <Card size='big' style={{ width: 320 }}>
        Big card
      </Card>
      <Card size='small' style={{ width: 320 }}>
        Small card
      </Card>
    </StoryContainer>
  ),
  parameters: { controls: { disable: true } },
}
