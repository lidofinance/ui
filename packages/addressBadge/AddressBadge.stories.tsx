import { StoryFn, Meta } from '@storybook/react'
import { AddressBadge, AddressBadgeProps } from '.'

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
} satisfies Meta

export const Basic: StoryFn<AddressBadgeProps> = (props) => (
  <AddressBadge {...props} />
)
