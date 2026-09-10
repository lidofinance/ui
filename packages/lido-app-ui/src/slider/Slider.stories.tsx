import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { Slider } from '.'

const meta: Meta<typeof Slider> = {
  title: 'Controls/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    defaultValue: 40,
    minLabel: 'min label',
    maxLabel: 'max label',
  },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    marks: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A native `<input type="range">` with a styled 12px track and a 32px thumb. Use it controlled (`value` + `onChange`) or uncontrolled (`defaultValue`); the fill bar tracks either way.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithMarks: Story = {
  args: {
    min: 0,
    max: 14,
    step: 1,
    defaultValue: 7,
    marks: true,
  },
}

export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = useState(25)

    return (
      <Slider
        value={value}
        onChange={(event) => setValue(event.target.valueAsNumber)}
        minLabel='0'
        maxLabel='100'
      />
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Pass `value` + `onChange` to drive it from your own state.',
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <StoryContainer gap={32}>
      <Slider defaultValue={40} minLabel='min label' maxLabel='max label' />
      <Slider
        defaultValue={40}
        disabled
        minLabel='min label'
        maxLabel='max label'
      />
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Default and disabled.',
      },
    },
  },
}
