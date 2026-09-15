import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { SegmentedControl, type SegmentItem } from '.'

const items: SegmentItem[] = [
  { value: 'supply', label: 'Supply' },
  { value: 'withdraw', label: 'Withdraw' },
  { value: 'borrow', label: 'Borrow' },
]

const meta: Meta<typeof SegmentedControl> = {
  title: 'Controls/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  args: {
    items,
    value: 'supply',
    filled: false,
  },
  argTypes: {
    items: { description: 'Value, label and an optional `disabled` flag' },
    value: {
      description: 'Active segment value — the component is controlled',
    },
    filled: {
      description: 'Grey track instead of the outlined one',
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Segmented control for switching between Supply / Withdraw / Borrow. The white pill is measured from the active segment, so it follows labels of any length.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: function Render() {
    const [value, setValue] = useState('supply')
    return <SegmentedControl items={items} value={value} onChange={setValue} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Click through the segments to watch the pill slide.',
      },
    },
  },
}

const itemsWithDisabled: SegmentItem[] = [
  ...items,
  { value: 'repay', label: 'Repay', disabled: true },
]

export const Variants: Story = {
  render: function Render() {
    const [outlinedValue, setOutlinedValue] = useState('supply')
    const [filledValue, setFilledValue] = useState('supply')
    const [disabledValue, setDisabledValue] = useState('supply')

    return (
      <StoryContainer>
        <StorySection title='outlined'>
          <SegmentedControl
            items={items}
            value={outlinedValue}
            onChange={setOutlinedValue}
          />
        </StorySection>
        <StorySection title='filled'>
          <SegmentedControl
            items={items}
            value={filledValue}
            onChange={setFilledValue}
            filled
          />
        </StorySection>
        <StorySection title='with disabled item'>
          <SegmentedControl
            items={itemsWithDisabled}
            value={disabledValue}
            onChange={setDisabledValue}
          />
        </StorySection>
      </StoryContainer>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Both tracks, plus a bar with an unavailable segment. A disabled item stays visible but cannot take focus.',
      },
    },
  },
}
