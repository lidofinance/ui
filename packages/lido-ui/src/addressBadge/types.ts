import { IdenticonBadgeProps } from '../identicon/index.js'

export type AddressBadgeProps = Omit<
  IdenticonBadgeProps,
  'address' | 'symbol' | 'as' | 'forwardedAs'
> & {
  address?: string
  symbolsMobile?: number
  symbolsDesktop?: number
}
