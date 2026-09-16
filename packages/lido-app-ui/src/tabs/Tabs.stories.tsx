import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Tabs, type TabItem } from '.'

const items: TabItem[] = [
  { value: 'overview', label: 'Overview' },
  { value: 'strikes', label: 'Strikes' },
  { value: 'rewards', label: 'Rewards' },
  { value: 'history', label: 'History', disabled: true },
]

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    items,
    value: 'overview',
  },
  argTypes: {
    items: { description: 'Value, label and an optional `disabled` flag' },
    value: { description: 'Active tab value — the component is controlled' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A row of text tabs with an underline on the active item; hover only darkens the text.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('overview')
    return <Tabs items={items} value={value} onChange={setValue} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Click through the tabs — the last one is disabled.',
      },
    },
  },
}
