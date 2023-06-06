import { ForwardedRef, forwardRef } from 'react'
import { useBreakpoint } from '@lidofinance/hooks'
import { AddressBadgeStyle, AddressBadgeStyleProps } from './AddressBadgeStyles'

export type AddressBadgeProps = Omit<AddressBadgeStyleProps, 'address' | 'symbol'> & {
  address?: string
  symbolsMobile?: number
  symbolsDesktop?: number
}

function AddressBadge(
  {
    address,
    symbolsMobile = 3,
    symbolsDesktop = 6,
    ...rest
  }: AddressBadgeProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const isMobile = useBreakpoint('md')

  return (
    <AddressBadgeStyle
      symbols={isMobile ? symbolsMobile : symbolsDesktop}
      address={address ?? ''}
      ref={ref}
      {...rest}
    />
  )
}

export default forwardRef(AddressBadge)
