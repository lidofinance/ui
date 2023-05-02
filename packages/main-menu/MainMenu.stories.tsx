import { Story, Meta } from '@storybook/react'
import { Stake, Wrap, Wallet } from '@lidofinance/icons'
import MainMenu from './MainMenu'
import MainMenuItem from './MainMenuItem'

export default {
  component: MainMenu,
  title: 'Layout/MainMenu',
  args: {
    active: 'stake',
  },
  argTypes: {
    active: {
      name: 'Active link',
      control: 'select',
      options: ['stake', 'wrap', 'wallet'],
    },
  },
} as Meta

export const Basic: Story<{ active: 'stake' | 'wrap' | 'wallet' }> = ({
  active,
}) => (
  <MainMenu>
    <MainMenuItem active={active === 'stake'} icon={<Stake />}>
      Stake
    </MainMenuItem>
    <MainMenuItem active={active === 'wrap'} icon={<Wrap />}>
      Wrap
    </MainMenuItem>
    <MainMenuItem active={active === 'wallet'} icon={<Wallet />}>
      Wallet
    </MainMenuItem>
  </MainMenu>
)
