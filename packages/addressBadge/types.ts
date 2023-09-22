import { IdenticonBadgeProps } from '../identicon'

export type AddressBadgeProps = Omit<
  IdenticonBadgeProps,
  'address' | 'symbol' | 'as' | 'forwardedAs'
> & {
  address?: string
  symbolsMobile?: number
  symbolsDesktop?: number
}
