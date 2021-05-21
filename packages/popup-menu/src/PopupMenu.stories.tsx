import { Story, Meta } from '@storybook/react'
import { PopupMenuProps, PopupMenuSize } from './types'
import { Eth, Steth, Solana } from '@lidofinance/icons'
import PopupMenu from './PopupMenu'
import PopupMenuItem from './PopupMenuItem'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: PopupMenu,
  title: 'Dialogs/PopupMenu',
} as Meta

export const Basic: Story<PopupMenuProps> = (props) => (
  <PopupMenu {...props}>
    <PopupMenuItem>Ethereum (ETH)</PopupMenuItem>
    <PopupMenuItem>Lido (STETH)</PopupMenuItem>
    <PopupMenuItem>Solana (SOL)</PopupMenuItem>
  </PopupMenu>
)

Basic.args = {
  size: 'medium',
}

Basic.argTypes = {
  size: {
    options: getOptions(PopupMenuSize),
    control: 'inline-radio',
  },
}

export const Icons: Story<PopupMenuProps> = (props) => (
  <PopupMenu {...props}>
    <PopupMenuItem leftDecorator={<Eth />}>Ethereum (ETH)</PopupMenuItem>
    <PopupMenuItem leftDecorator={<Steth />}>Lido (STETH)</PopupMenuItem>
    <PopupMenuItem disabled leftDecorator={<Solana />}>
      Solana (SOL)
    </PopupMenuItem>
  </PopupMenu>
)
