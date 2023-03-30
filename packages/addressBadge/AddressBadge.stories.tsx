import { Story, Meta } from '@storybook/react'
import { AddressBadgeProps } from './types'
import AddressBadge from './AddressBadge'

export default {
  component: AddressBadge,
  title: 'Wallet/AddressBadge',
  args: {
    address: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
    symbolsMobile: 3,
    symbolsDesktop: 6,
  },
  argTypes: {
    symbolsMobile: {
      control: { type: 'range', min: 3, max: 21, step: 1 },
    },
    symbolsDesktop: {
      control: { type: 'range', min: 3, max: 21, step: 1 },
    },
  },
} as Meta

export const Basic: Story<AddressBadgeProps> = (props) => (
  <AddressBadge {...props} />
)
