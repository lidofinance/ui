import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { PositionCard, PositionCardStatus, type PositionCardProps } from '.'

const meta: Meta<typeof PositionCard> = {
  title: 'Content & Data/PositionCard',
  component: PositionCard,
  args: {
    variant: 'has-position',
    label: 'Staked position',
    value: '1 ETH',
    secondaryValue: '$42,779.90',
    aside: '2.3% APR',
    onClick: () => {},
  },
  argTypes: {
    variant: {
      options: ['disconnected', 'no-position', 'has-position'],
      control: { type: 'select' },
    },
    expanded: { control: { type: 'boolean' } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 432 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/Interface-Design-System?node-id=6402-17359',
    },
    docs: {
      description: {
        component:
          'Balance card at the top of a widget. `variant` follows the wallet state: a one-line pitch while disconnected, a muted "No position", then the staked balance. The main area is a link with `href`, a button with `onClick`, otherwise static; with pending claims the card is expandable and `footer` takes their `PositionCardStatus` rows.',
      },
    },
  },
}

export default meta
// A union of props breaks `StoryObj<typeof meta>` (args collapse to never).
type Story = StoryObj<PositionCardProps>

export const Basic: Story = {}

export const WalletStates: Story = {
  render: () => (
    <StorySection row={false}>
      <PositionCard
        variant='disconnected'
        value='Stake with 2.3% APR'
        secondaryValue='daily rewards, stay liquid'
        onClick={() => {}}
      />
      <PositionCard
        variant='no-position'
        label='Staked position'
        value='No position'
        aside='2.3% APR'
        onClick={() => {}}
      />
      <PositionCard
        variant='has-position'
        label='Staked position'
        value='1 ETH'
        secondaryValue='$42,779.90'
        aside='2.3% APR'
        onClick={() => {}}
      />
    </StorySection>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Disconnected, connected without a position, and with a position. Hover and press to see the interactive states.',
      },
    },
  },
}

export const PendingClaims: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(true)
    return (
      <PositionCard
        label='Staked position'
        value='1 ETH'
        secondaryValue='$42,779.90'
        aside='2.3% APR'
        expanded={expanded}
        onClick={() => setExpanded((open) => !open)}
        footer={
          <>
            <PositionCardStatus action='Claim' onClick={() => {}}>
              14.2142 ETH deposit ready.
            </PositionCardStatus>
            <PositionCardStatus action='Claim' href='https://stake.lido.fi'>
              14.2142 ETH withdrawal ready.
            </PositionCardStatus>
          </>
        }
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'A card with pending claims is expandable: `expanded` adds a chevron after the label, `aria-expanded`/`aria-controls` on the button and shows the `PositionCardStatus` rows in `footer`, hiding them while false. Each row is its own link or button; the card keeps the pressed shade while expanded.',
      },
    },
  },
}

export const LongValues: Story = {
  args: {
    value: '123,456,789.123456 stETH',
    secondaryValue: '$1,234,567,890.12',
  },
  parameters: {
    docs: {
      description: {
        story: 'Long values truncate; the aside keeps its width.',
      },
    },
  },
}
