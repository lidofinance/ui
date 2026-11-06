import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { ContainerWidths } from '../../.storybook/components'
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
  args: {
    items,
    value: 'overview',
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

const manyItems: TabItem[] = [
  'Overview',
  'Strikes',
  'Rewards',
  'Performance',
  'Withdrawals',
  'Notifications',
  'History',
].map((label) => ({ value: label.toLowerCase(), label }))

export const NarrowContainers: Story = {
  render: () => {
    const [value, setValue] = useState('withdrawals')
    return (
      <ContainerWidths>
        <Tabs items={manyItems} value={value} onChange={setValue} />
      </ContainerWidths>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Tabs scroll with an edge fade when they do not fit.',
      },
    },
  },
}
