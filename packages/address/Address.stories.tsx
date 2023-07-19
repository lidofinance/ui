import { Meta, StoryFn } from '@storybook/react'
import { Address, AddressProps } from '.'

export default {
  component: Address,
  title: 'Wallet/Address',
  args: {
    address: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
    symbols: 3,
  },
  argTypes: {
    symbols: {
      control: { type: 'range', min: 3, max: 21, step: 1 },
    },
  },
} satisfies Meta

export const Basic: StoryFn<AddressProps> = (props) => <Address {...props} />
