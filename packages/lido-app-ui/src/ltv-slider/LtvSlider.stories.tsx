import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { LtvSlider, type LtvSliderProps } from '.'

const MAX = 85

const meta: Meta<typeof LtvSlider> = {
  title: 'Controls/LtvSlider',
  component: LtvSlider,
  tags: ['autodocs'],
  args: {
    value: 30,
    max: MAX,
  },
  argTypes: {
    value: { description: 'Current LTV', control: { type: 'number' } },
    max: {
      description: 'Upper bound of the usable track',
      control: { type: 'number' },
    },
    zones: {
      description:
        'Upper cut of each risk band; defaults to thirds of `max`. Real thresholds are a product decision.',
    },
    onChange: { description: 'Omit to render the slider read-only' },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Loan-to-value picker with conservative / moderate / aggressive bands and a liquidation zone at the end. The thumb never enters the liquidation band — it is there to show how much headroom is left.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const Frame = (props: LtvSliderProps) => (
  <div style={{ maxWidth: 520 }}>
    <LtvSlider {...props} />
  </div>
)

export const Interactive: Story = {
  render: function Render({ value = 30, max = MAX, ...rest }) {
    const [current, setCurrent] = useState(value)

    return (
      <Frame
        {...rest}
        value={current}
        max={max}
        onChange={setCurrent}
        valueText={`${current.toFixed(2)}%`}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'The component is controlled — it holds no value of its own. Drag the thumb, use the arrow keys, or click a zone label to jump to the middle of that band.',
      },
    },
  },
}

export const ReadOnly: Story = {
  args: { value: 62 },
  render: ({ value = 62, max = MAX, ...rest }) => (
    <Frame {...rest} value={value} max={max} />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Drop `onChange` and the slider becomes a gauge: the labels stop being buttons and the thumb leaves the tab order.',
      },
    },
  },
}

export const Zones: Story = {
  render: () => (
    <StoryContainer gap={40} style={{ maxWidth: 520 }}>
      <LtvSlider value={12} max={MAX} label='Conservative' />
      <LtvSlider value={40} max={MAX} label='Moderate' />
      <LtvSlider value={78} max={MAX} label='Aggressive' />
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The track colour and the highlighted label follow the band the value lands in.',
      },
    },
  },
}

export const CustomZones: Story = {
  args: {
    value: 45,
    zones: { conservative: 40, moderate: 65, aggressive: MAX },
  },
  render: ({ value = 45, max = MAX, ...rest }) => (
    <Frame {...rest} value={value} max={max} />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Pass `zones` to move the cuts. Each key is the upper bound of that band.',
      },
    },
  },
}
