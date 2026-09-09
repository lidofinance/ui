import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { IconShield } from '../icons'
import { SegmentCard } from '.'

const meta: Meta<typeof SegmentCard> = {
  title: 'Navigation/SegmentCard',
  component: SegmentCard,
  tags: ['autodocs'],
  args: {
    icon: <IconShield />,
    title: 'Eject',
    tag: 'Emergency',
    description:
      'Only keys that have been active for at least 256 epochs can be ejected using triggerable withdrawals',
    active: false,
  },
  argTypes: {
    active: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The primitive behind `SegmentedControlCard`. Reach for it only when you are building a custom card-based segmented layout.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const States: Story = {
  render: () => (
    <StorySection
      style={{
        gap: 4,
        padding: 4,
        alignItems: 'flex-start',
        borderRadius: 20,
        border: '1px solid var(--lido-app-ui-color-border-default)',
        background: 'var(--lido-app-ui-color-background-default)',
        width: 'fit-content',
      }}
    >
      <SegmentCard
        icon={<IconShield />}
        title='Eject'
        tag='Emergency'
        description='Only keys that have been active for at least 256 epochs can be ejected using triggerable withdrawals'
      />
      <SegmentCard
        icon={<IconShield />}
        title='Eject'
        tag='Emergency'
        description='Only keys that have been active for at least 256 epochs can be ejected using triggerable withdrawals'
        active
      />
      <SegmentCard
        icon={<IconShield />}
        title='Eject'
        tag='Emergency'
        description='Only keys that have been active for at least 256 epochs can be ejected using triggerable withdrawals'
        disabled
      />
    </StorySection>
  ),
  parameters: { controls: { disable: true } },
}
