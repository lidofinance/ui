import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { IconShield } from '../icons'
import { SegmentedControlCard, type SegmentCardItem } from '.'

const items: SegmentCardItem[] = [
  {
    value: 'eject',
    icon: <IconShield />,
    title: 'Eject',
    tag: 'Emergency',
    description:
      'Only keys that have been active for at least 256 epochs can be ejected using triggerable withdrawals',
  },
  {
    value: 'exit',
    icon: <IconShield />,
    title: 'Exit',
    tag: 'Voluntary',
    description:
      'Only keys that have been active for at least 256 epochs can be ejected using triggerable withdrawals',
  },
  {
    value: 'top-up',
    icon: <IconShield />,
    title: 'Top up',
    tag: 'Optional',
    description:
      'Only keys that have been active for at least 256 epochs can be ejected using triggerable withdrawals',
  },
]

const meta: Meta<typeof SegmentedControlCard> = {
  title: 'Controls/SegmentedControlCard',
  component: SegmentedControlCard,
  tags: ['autodocs'],
  args: {
    items,
    value: 'eject',
  },
  argTypes: {
    items: {
      description:
        'Value, title, and optional icon / tag / description / disabled flag',
    },
    value: {
      description: 'Active segment value — the component is controlled',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Card variant of the segmented control — each option is a self-contained card with an icon, title, tag, and description instead of a compact pill.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: function Render() {
    const [value, setValue] = useState('eject')
    return (
      <SegmentedControlCard items={items} value={value} onChange={setValue} />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Click through the cards to switch the selected option.',
      },
    },
  },
}

export const WithDisabledItem: Story = {
  render: () => {
    const [value, setValue] = useState('eject')
    return (
      <div style={{ width: '600px' }}>
        <SegmentedControlCard
          items={[...items.slice(0, 2), { ...items[2], disabled: true }]}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'A disabled card stays visible but cannot be selected or take focus.',
      },
    },
  },
}
