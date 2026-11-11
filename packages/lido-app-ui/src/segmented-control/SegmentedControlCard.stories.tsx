import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { ContainerWidths } from '../../.storybook/components'
import { Counter } from '../counter'
import { IconShield } from '../icons'
import { Tag } from '../tag'
import { VisuallyHidden } from '../visually-hidden'
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
  title: 'Navigation/SegmentedControlCard',
  component: SegmentedControlCard,
  args: {
    items,
    value: 'eject',
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

export const NarrowContainers: Story = {
  render: function Render() {
    const [value, setValue] = useState('eject')
    return (
      <ContainerWidths>
        <SegmentedControlCard items={items} value={value} onChange={setValue} />
      </ContainerWidths>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Cards stack once the container cannot give each at least 212px.',
      },
    },
  },
}

export const WithNodeTags: Story = {
  render: function Render() {
    const [value, setValue] = useState('eject')
    return (
      <SegmentedControlCard
        items={[
          {
            ...items[0],
            tag: (
              <Counter variant='error'>
                3<VisuallyHidden> pending requests</VisuallyHidden>
              </Counter>
            ),
          },
          { ...items[1], tag: <Tag variant='success'>Voluntary</Tag> },
          { ...items[2], tag: 'Optional' },
        ]}
        value={value}
        onChange={setValue}
      />
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Strings and numbers get a neutral Tag; elements such as a `Counter` or a coloured `Tag` render as-is, without a second pill around them. Wrap an element in `<Tag variant="neutral">` to keep the pill.',
      },
    },
  },
}

export const CustomStackAt: Story = {
  args: { stackAt: 480 },
  render: function Render(args) {
    const [value, setValue] = useState('eject')
    return (
      <ContainerWidths>
        <SegmentedControlCard
          items={items}
          stackAt={args.stackAt}
          value={value}
          onChange={setValue}
        />
      </ContainerWidths>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'With `stackAt={480}` the cards stack as soon as the control is narrower than 480px, instead of the default 212px per card.',
      },
    },
  },
}
