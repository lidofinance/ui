import type { Meta, StoryObj } from '@storybook/react'

import { TokenSteth } from '../icons'
import { DataList, DetailRow } from '.'

const meta: Meta<typeof DataList> = {
  title: 'Data display/DataList',
  component: DataList,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Label-on-the-left, value-on-the-right list for transaction details. `DataList` is the spacing wrapper; every row is a `DetailRow`, which handles the optional info tooltip, a leading icon and the from → to change format.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <div style={{ maxWidth: 460 }}>
      <DataList>
        <DetailRow label='Exchange rate' value='1 stETH = 1 ETH' />
        <DetailRow label='Max transaction cost' value='$2.41' />
        <DetailRow
          label='Reward fee'
          value='10%'
          info='Taken from staking rewards.'
        />
      </DataList>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

export const RowVariants: Story = {
  render: () => (
    <div style={{ maxWidth: 460 }}>
      <DataList>
        <DetailRow label='Plain value' value='1,204,882' />
        <DetailRow
          label='With leading icon'
          icon={<TokenSteth width={20} height={20} />}
          value='12.4218 stETH'
        />
        <DetailRow
          label='With tooltip'
          value='3.24%'
          info='Net of the 10% protocol fee.'
        />
        <DetailRow
          label='Faint tooltip'
          value='69.8%'
          info='Share of supplied liquidity currently borrowed.'
          infoFaint
        />
        <DetailRow label='Change' value={{ from: '2.10%', to: '3.24%' }} />
      </DataList>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Everything a row can hold. Pass `value={{ from, to }}` for the arrow format, and `infoFaint` when the tooltip trigger should sit back visually.',
      },
    },
  },
}
