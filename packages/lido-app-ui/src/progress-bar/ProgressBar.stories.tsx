import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Content & Data/ProgressBar',
  component: ProgressBar,
  args: { 'aria-label': 'Usage' },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Fills its container. Thin track showing one or more value segments against a max, with an optional limit marker and a hatched over-limit indicator.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: { value: 62, max: 100 },
  render: (args) => (
    <div style={{ width: 320 }}>
      <ProgressBar {...args} />
    </div>
  ),
}

export const Segments: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ProgressBar
        aria-label='Usage'
        max={452}
        segments={[
          { value: 263, color: 'active' },
          { value: 53, color: 'info' },
          { value: 134, color: 'neutral' },
        ]}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

export const WithLimit: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ProgressBar
        aria-label='Usage'
        max={100}
        limit={70}
        segments={[
          { value: 40, color: 'active' },
          { value: 20, color: 'info' },
        ]}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

export const OverLimit: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ProgressBar
        aria-label='Usage'
        max={100}
        limit={60}
        segments={[{ value: 85, color: 'active' }]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The portion of a segment beyond `limit` renders hatched.',
      },
    },
    controls: { disable: true },
  },
}

export const ForcedOverLimit: Story = {
  args: { value: 40, overLimit: true },
  render: (args) => (
    <div style={{ width: 320 }}>
      <ProgressBar {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '`overLimit` hatches the bar regardless of `limit`.',
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ width: 320, display: 'grid', gap: 16 }}>
      <ProgressBar aria-label='Usage' value={70} size='default' />
      <ProgressBar aria-label='Usage' value={70} size='small' />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

export const Animated: Story = {
  render: () => {
    const [value, setValue] = useState(30)
    const [limit, setLimit] = useState(60)
    return (
      <div style={{ width: 320, display: 'grid', gap: 16 }}>
        <ProgressBar aria-label='Usage' value={value} limit={limit} />
        <div style={{ display: 'flex', gap: 8 }}>
          <Button
            size='small'
            variant='outline'
            onClick={() => setValue((v) => (v >= 90 ? 10 : v + 30))}
          >
            Change value
          </Button>
          <Button
            size='small'
            variant='outline'
            onClick={() => setLimit((l) => (l === 60 ? 40 : 60))}
          >
            Change limit
          </Button>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Value, limit marker and over-limit state transition on change; nothing animates on first render.',
      },
      source: { type: 'code' },
    },
    controls: { disable: true },
  },
}
