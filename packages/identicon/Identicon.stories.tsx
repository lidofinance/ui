import { StoryFn, Meta } from '@storybook/react'
import {
  Identicon,
  IdenticonProps,
  IdenticonBadge,
  IdenticonBadgeProps,
  IdenticonBadgeColor,
} from '.'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Identicon,
  title: 'Images/Identicon',
  args: {
    address: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
    diameter: 24,
  },
  argTypes: {
    diameter: {
      control: { type: 'range', min: 4, max: 64, step: 4 },
    },
  },
} satisfies Meta

export const Basic: StoryFn<IdenticonProps> = (props) => (
  <Identicon {...props} />
)

export const Badge: StoryFn<IdenticonBadgeProps> = (props) => (
  <IdenticonBadge {...props} />
)

Badge.args = {
  symbols: 3,
  color: 'background',
}

Badge.argTypes = {
  symbols: {
    control: { type: 'range', min: 0, max: 21, step: 1 },
  },
  color: {
    options: getOptions(IdenticonBadgeColor),
    control: 'inline-radio',
  },
}
