import type { Meta, StoryObj } from '@storybook/react'

import { TokenEth } from '../icons'
import { StatsRow } from '.'

const meta: Meta<typeof StatsRow> = {
  title: 'Content & Data/StatsRow',
  component: StatsRow,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    items: [
      { label: 'Total supplied', value: '1,204,882' },
      {
        label: 'Available liquidity',
        info: 'Funds currently available to borrow.',
        value: '20.9K',
        icon: <TokenEth width={24} height={24} />,
        subValue: '$271.88',
      },
      { label: 'Net APY', value: '3.24%', subValue: '+0.12% last 24h' },
      { label: 'Operators', value: '312' },
    ],
  },
  argTypes: { items: { control: false } },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const TwoColumns: Story = {
  globals: { viewport: { value: 'md-down', isRotated: false } },
  parameters: {
    docs: {
      description: {
        story:
          'Two columns at 900px and below. Breakpoints follow the viewport.',
      },
    },
  },
}

export const OneColumn: Story = {
  globals: { viewport: { value: 'px375', isRotated: false } },
  parameters: {
    docs: {
      description: {
        story: 'One column at 400px and below.',
      },
    },
  },
}
