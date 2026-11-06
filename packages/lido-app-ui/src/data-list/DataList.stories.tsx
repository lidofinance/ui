import type { Meta, StoryObj } from '@storybook/react'
import { DataList, DataListRow } from '.'

import { ContainerWidths } from '../../.storybook/components'
import { TokenSteth } from '../icons'

const meta: Meta<typeof DataList> = {
  title: 'Content & Data/DataList',
  component: DataList,
  args: {
    divided: true,
  },
  argTypes: {
    divided: { control: { type: 'boolean' } },
  },
  parameters: {
    layout: 'padded',
    controls: { exclude: ['className'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <DataList {...args}>
      <DataListRow label='Exchange rate' value='1 stETH = 1 ETH' />
      <DataListRow label='Max transaction cost' value='$2.41' />
      <DataListRow
        label='Reward fee'
        value='10%'
        info='Taken from staking rewards.'
      />
    </DataList>
  ),
  parameters: { controls: { disable: true } },
}

export const RowVariants: Story = {
  render: () => (
    <div style={{ maxWidth: 460 }}>
      <DataList>
        <DataListRow label='Plain value' value='1,204,882' />
        <DataListRow
          label='With leading icon'
          icon={<TokenSteth width={20} height={20} />}
          value='12.4218 stETH'
        />
        <DataListRow
          label='With tooltip'
          value='3.24%'
          info='Net of the 10% protocol fee.'
        />
        <DataListRow
          label='Faint tooltip'
          value='69.8%'
          info='Share of supplied liquidity currently borrowed.'
          infoFaint
        />
        <DataListRow label='Change' value={{ from: '2.10%', to: '3.24%' }} />
        <DataListRow
          label='Removal fee'
          icon={<TokenSteth width={16} height={16} />}
          value='0.2 stETH'
          info='Charged when removing this validator.'
          description='Will be deducted from your bond balance'
          descriptionInfo='Bond balance is topped up automatically.'
        />
      </DataList>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Everything a row can hold. Pass `value={{ from, to }}` for the arrow format, `infoFaint` when the tooltip trigger should sit back visually, and `description` (with an optional `descriptionInfo` tooltip) for a muted explanatory line under the row.',
      },
    },
  },
}

export const Divided: Story = {
  render: () => (
    <div style={{ maxWidth: 460 }}>
      <DataList divided>
        <DataListRow label='Exchange rate' value='1 stETH = 1 ETH' />
        <DataListRow label='Max transaction cost' value='$2.41' />
        <DataListRow
          label='Reward fee'
          value='10%'
          info='Taken from staking rewards.'
        />
      </DataList>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Pass `divided` to draw a hairline between rows.',
      },
    },
  },
}

export const NarrowContainers: Story = {
  render: () => (
    <ContainerWidths>
      <DataList divided>
        <DataListRow
          label='Reward address'
          value='0x1234567890abcdef1234567890abcdef12345678'
        />
        <DataListRow
          label='Estimated monthly rewards'
          value='1,234.5678 stETH'
        />
      </DataList>
    </ContainerWidths>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'The value wraps below the label at narrow widths.',
      },
    },
  },
}
