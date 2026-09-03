import type { Meta, StoryObj } from '@storybook/react'

import { StatItem } from '../stat-item'
import { StatsRow } from '.'

const items = [
  { label: 'Total supplied', value: '1,204,882' },
  { label: 'Total borrowed', value: '842,110' },
  { label: 'Net APY', value: '3.24%' },
  { label: 'Utilisation', value: '69.8%' },
]

const meta: Meta<typeof StatsRow> = {
  title: 'Data display/StatsRow',
  component: StatsRow,
  tags: ['autodocs'],
  args: { items },
  argTypes: {
    items: { description: 'Shortcut for a row of `StatItem`s' },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'The market-stats strip. Four across above 900px, 2×2 below — switch the viewport in the toolbar to see the reflow. Pass `items` for the common case, or children when a cell needs something custom.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithChildren: Story = {
  render: () => (
    <StatsRow>
      {items.map((item) => (
        <StatItem key={item.label} {...item} />
      ))}
    </StatsRow>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Same result through children — reach for this when a cell needs a tooltip, a link or anything else `items` cannot express.',
      },
    },
  },
}
