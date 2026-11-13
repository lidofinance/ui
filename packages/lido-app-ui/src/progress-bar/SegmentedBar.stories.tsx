import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { SegmentedBar } from './SegmentedBar'

const meta = {
  title: 'Content & Data/SegmentedBar',
  component: SegmentedBar,
  tags: ['autodocs'],
  args: { steps: 5, value: 2.5, 'aria-label': 'Lock weight' },
  argTypes: {
    width: {
      control: 'text',
      description: 'number = px, or a CSS length string, e.g. "50%"',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Row of pills with a partial fill on the current step. Fills its container by default; pills share the width evenly.',
      },
    },
  },
} satisfies Meta<typeof SegmentedBar>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <SegmentedBar {...args} />
    </div>
  ),
}

export const FixedWidth: Story = {
  args: { width: '120px' },
  parameters: {
    docs: {
      description: { story: '`width` takes px (number) or any CSS length.' },
    },
  },
}

export const ManySteps: Story = {
  args: { steps: 40, value: 28, 'aria-label': 'Keys uploaded' },
  render: (args) => (
    <div style={{ width: 240 }}>
      <SegmentedBar {...args} />
    </div>
  ),
}

export const Full: Story = {
  args: { value: 5 },
  render: (args) => (
    <div style={{ width: 320 }}>
      <SegmentedBar {...args} />
    </div>
  ),
}

export const Empty: Story = {
  args: { value: 0 },
  render: (args) => (
    <div style={{ width: 320 }}>
      <SegmentedBar {...args} />
    </div>
  ),
}

export const Animated: Story = {
  render: () => {
    const [value, setValue] = useState(1.5)
    return (
      <div style={{ width: 320, display: 'grid', gap: 16 }}>
        <SegmentedBar steps={5} value={value} aria-label='Steps' />
        <Button
          size='small'
          variant='outline'
          onClick={() => setValue((v) => (v >= 5 ? 0 : Math.floor(v) + 1))}
        >
          Next step
        </Button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Pills fill smoothly when `value` changes.',
      },
    },
    controls: { disable: true },
  },
}
