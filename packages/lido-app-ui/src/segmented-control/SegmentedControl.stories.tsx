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
  args: {
    items,
    value: 'supply',
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
    const [value, setValue] = useState('supply')
    const [disabledValue, setDisabledValue] = useState('supply')

    return (
      <StoryContainer>
        <StorySection title='default'>
          <SegmentedControl items={items} value={value} onChange={setValue} />
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
          'The grey track, plus a bar with an unavailable segment. A disabled item stays visible but cannot take focus.',
      },
    },
  },
}
