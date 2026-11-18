import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { ContainerWidths } from '../../.storybook/components'
import { Button } from '../button'
import { Counter } from '../counter'
import { Tabs, getTabPanelProps, type TabItem } from '.'
import { getTabPanelId } from './tabIds'

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

export const RightToLeft: Story = {
  render: () => {
    const [value, setValue] = useState('overview')
    return (
      <div dir='rtl' style={{ direction: 'rtl' }}>
        <Tabs items={items} value={value} onChange={setValue} />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Focus a tab and press the arrow keys: in right-to-left layouts ArrowLeft moves to the next tab and ArrowRight to the previous one.',
      },
    },
  },
}

export const ChangingLabelWidth: Story = {
  render: () => {
    const [value, setValue] = useState('strikes')
    const [count, setCount] = useState(9)
    const tabs: TabItem[] = [
      { value: 'overview', label: 'Overview' },
      {
        value: 'strikes',
        label: (
          <>
            Strikes <Counter>{count}</Counter>
          </>
        ),
      },
      { value: 'rewards', label: 'Rewards' },
    ]
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Tabs items={tabs} value={value} onChange={setValue} />
        <div style={{ display: 'flex', gap: 8 }}>
          <Button
            variant='outline'
            size='small'
            onClick={() => setCount((c) => c * 10 + 1)}
          >
            Grow counter
          </Button>
          <Button variant='outline' size='small' onClick={() => setCount(9)}>
            Reset
          </Button>
        </div>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'With "Strikes" selected, grow the counter: the selection indicator follows the tab as it widens.',
      },
    },
  },
}

export const LinkedPanels: Story = {
  render: () => {
    const id = 'staking-tabs'
    const [value, setValue] = useState('overview')
    const linked = items.map((i) => ({
      ...i,
      panelId: getTabPanelId(id, i.value),
    }))
    return (
      <>
        <Tabs id={id} items={linked} value={value} onChange={setValue} />
        {linked.map((i) => (
          <div
            key={i.value}
            {...getTabPanelProps(id, i.value)}
            hidden={i.value !== value}
            style={{ padding: 16 }}
          >
            {i.label} content
          </div>
        ))}
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Give Tabs an id, set panelId on items and spread getTabPanelProps on each panel: tabs get aria-controls, panels get role=tabpanel and are labelled by their tab. Keep panels mounted (hidden) so aria-controls never points at a missing element.',
      },
    },
  },
}
