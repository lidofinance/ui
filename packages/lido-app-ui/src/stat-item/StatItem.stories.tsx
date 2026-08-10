import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { TokenSteth } from '../icons'
import { StatItem } from '.'

const meta: Meta<typeof StatItem> = {
  title: 'Data display/StatItem',
  component: StatItem,
  tags: ['autodocs'],
  args: {
    label: 'Total supplied',
    value: '1,204,882',
  },
  argTypes: {
    label: { description: 'Caption above the number' },
    value: { description: 'The number itself' },
    icon: { description: 'Optional token glyph next to the value' },
    subValue: { description: 'Small line under the value' },
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
