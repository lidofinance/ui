import type { Meta, StoryObj } from '@storybook/react'

import { DarkSurface } from '../../.storybook/components'
import { Button } from '../button'
import { IconInfo } from '../icons'
import { SmallButton } from '../small-button'
import { DepositColumns, type DepositColumn } from '.'

const columns: DepositColumn[] = [
  {
    label: 'Collateral',
    info: <IconInfo width={16} height={16} />,
    value: '12.4218',
    sub: '$38,760.00',
    action: <SmallButton variant='back'>Manage</SmallButton>,
  },
  {
    label: 'Borrowed',
    value: '8,420.00',
    sub: '$8,420.00',
    action: <SmallButton variant='back'>Repay</SmallButton>,
  },
  {
    label: 'Health factor',
    value: '1.84',
    sub: 'Liquidation at 1.00',
  },
]

const meta: Meta<typeof DepositColumns> = {
  title: 'Data display/DepositColumns',
  component: DepositColumns,
  tags: ['autodocs'],
  args: { columns, variant: 'onDark' },
  argTypes: {
    columns: { description: 'Label, value, optional sub-line and action slot' },
    variant: {
      description: 'Picks the text colours for the navy band or a light card',
      options: ['onDark', 'onLight'],
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'The position summary at the top of the app — collateral, borrowed, health factor side by side with dividers. Three columns above 900px, stacked rows below; switch the viewport in the toolbar to see the reflow.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const OnDark: Story = {
  render: () => (
    <DarkSurface>
      <DepositColumns
        variant='onDark'
        columns={columns.map((column) => ({
          ...column,
          action: column.action ? (
            <Button variant='whiteOutline'>Manage</Button>
          ) : undefined,
        }))}
      />
    </DarkSurface>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'On the navy band the actions are `whiteOutline` buttons. The dividers between columns disappear once the layout stacks.',
      },
    },
  },
}

export const OnLight: Story = {
  args: { variant: 'onLight' },
  parameters: {
    docs: {
      description: {
        story: 'The same data on a light card, with `back` small buttons.',
      },
    },
  },
}
