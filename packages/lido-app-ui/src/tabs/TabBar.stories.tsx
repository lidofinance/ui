import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { TabBar, type TabItem } from '.'

const items: TabItem[] = [
  { value: 'supply', label: 'Supply' },
  { value: 'withdraw', label: 'Withdraw' },
  { value: 'borrow', label: 'Borrow' },
]

const meta: Meta<typeof TabBar> = {
  title: 'Navigation/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  args: {
    items,
    value: 'supply',
    filled: false,
  },
  argTypes: {
    items: { description: 'Value, label and an optional `disabled` flag' },
    value: { description: 'Active tab value — the component is controlled' },
    filled: {
      description: 'Grey track instead of the outlined one',
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Segmented control for switching between Supply / Withdraw / Borrow. The white pill is measured from the active tab, so it follows labels of any length.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const Controlled = ({ filled }: { filled?: boolean }) => {
  const [value, setValue] = useState('supply')

  return (
    <TabBar items={items} value={value} onChange={setValue} filled={filled} />
  )
}

export const Basic: Story = {
  render: () => <Controlled />,
  parameters: {
    docs: {
      description: {
        story: 'Click through the tabs to watch the pill slide.',
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
        <TabBar
          items={[...items, { value: 'repay', label: 'Repay', disabled: true }]}
          value='supply'
          onChange={() => undefined}
        />
      </StorySection>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Both tracks, plus a bar with an unavailable tab. A disabled item stays visible but cannot take focus.',
      },
    },
  },
}
