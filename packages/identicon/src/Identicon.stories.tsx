import { Story, Meta } from '@storybook/react'
import { IdenticonProps, IdenticonBadgeProps } from './types'
import Identicon from './Identicon'
import IdenticonBadge from './IdenticonBadge'
import styled from 'styled-components'

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
} as Meta

export const Basic: Story<IdenticonProps> = (props) => <Identicon {...props} />

const BadgeWrapper = styled.div`
  padding: 6px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.foreground};
  display: inline-flex;
`

export const Badge: Story<IdenticonBadgeProps> = (props) => (
  <BadgeWrapper>
    <IdenticonBadge {...props} />
  </BadgeWrapper>
)

Badge.args = {
  symbols: 3,
}

Badge.argTypes = {
  symbols: {
    control: { type: 'range', min: 0, max: 21, step: 1 },
  },
}
