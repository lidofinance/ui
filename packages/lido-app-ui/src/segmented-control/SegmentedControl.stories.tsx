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
  title: 'Navigation/SegmentedControl',
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

const Controlled = ({
  filled,
  controlItems = items,
}: {
  filled?: boolean
  controlItems?: SegmentItem[]
}) => {
  const [value, setValue] = useState('supply')

  return (
    <SegmentedControl
      items={controlItems}
      value={value}
      onChange={setValue}
      filled={filled}
    />
  )
}

export const Basic: Story = {
  render: () => <Controlled />,
  parameters: {
    docs: {
      description: {
        story: 'Click through the segments to watch the pill slide.',
      },
    },
  },
}

export const Variants: Story = {
  render: () => (
    <StoryContainer>
      <StorySection title='outlined'>
        <Controlled />
      </StorySection>
      <StorySection title='filled'>
        <Controlled filled />
      </StorySection>
      <StorySection title='with disabled item'>
        <Controlled
          controlItems={[
            ...items,
            { value: 'repay', label: 'Repay', disabled: true },
          ]}
        />
      </StorySection>
    </StoryContainer>
  ),
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
