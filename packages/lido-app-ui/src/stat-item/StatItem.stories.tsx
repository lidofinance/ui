import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { IconShield, TokenEth, TokenSteth } from '../icons'
import { StatItem } from '.'

const meta: Meta<typeof StatItem> = {
  title: 'Content & Data/StatItem',
  component: StatItem,
  tags: ['autodocs'],
  args: {
    label: 'Total supplied',
    value: '1,204,882',
  },
  argTypes: {
    label: { description: 'Caption above the number' },
    value: { description: 'The number itself' },
    titleIcon: { description: 'Optional 24×24 glyph before the label' },
    info: {
      description:
        'Optional tooltip content, shown as an info icon after the label',
    },
    icon: { description: 'Optional token glyph next to the value' },
    subValue: {
      description:
        "Small secondary line — inline for `align='left'`, below the value for `align='center'`",
    },
    description: { description: 'Optional muted caption at the bottom' },
    align: { control: { type: 'radio' }, options: ['left', 'center'] },
  },
  parameters: {
    docs: {
      description: {
        component:
          'One label-over-value metric. Use it on its own, or hand a list to `StatsRow` to get the four-up dashboard block.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Variants: Story = {
  render: () => (
    <StorySection style={{ gap: 48, alignItems: 'flex-start' }}>
      <StatItem label='Total supplied' value='1,204,882' />
      <StatItem
        label='Collateral'
        value='12.4218'
        icon={<TokenSteth width={24} height={24} />}
      />
      <StatItem label='Net APY' value='3.24%' subValue='+0.12% last 24h' />
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Plain, with a token glyph, and with a secondary line.',
      },
    },
  },
}

export const Align: Story = {
  render: () => (
    <StorySection style={{ gap: 48, alignItems: 'flex-start' }}>
      <StatItem
        align='left'
        titleIcon={<IconShield width={24} height={24} />}
        label='Rewards balance, stETH'
        info='Rewards accrue daily and compound automatically.'
        value='0.0841'
        icon={<TokenEth width={24} height={24} />}
        subValue='$271.88'
        description='Description text'
      />
      <StatItem
        align='center'
        titleIcon={<IconShield width={24} height={24} />}
        label='Available Liquidity'
        info='Funds currently available to borrow.'
        value='20.9K'
        icon={<TokenEth width={24} height={24} />}
        subValue='$271.88'
      />
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "`align='left'` keeps `subValue` inline with the number and puts `description` on its own line below. `align='center'` (default) centers everything and drops `subValue` to its own centered line.",
      },
    },
  },
}
