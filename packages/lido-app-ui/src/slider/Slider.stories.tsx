import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '.'

import { StoryContainer } from '../../.storybook/components'

const meta: Meta<typeof Slider> = {
  title: 'Inputs & Controls/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    defaultValue: 40,
    minLabel: 'min label',
    maxLabel: 'max label',
    marks: true,
    step: 5,
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

export const Basic: Story = {
  args: {
    marks: false,
  },
}

export const WithMarks: Story = {
  args: {
    min: 0,
    max: 14,
    step: 1,
    defaultValue: 7,
    marks: true,
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
