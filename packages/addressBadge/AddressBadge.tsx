import { ForwardedRef, forwardRef } from 'react'
import { useBreakpoint } from '@lidofinance/hooks'
import { AddressBadgeStyle } from './AddressBadgeStyles'
import { AddressBadgeProps } from './types'

function AddressBadge(
  { address, symbolsMobile = 3, symbolsDesktop = 6 }: AddressBadgeProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const isMobile = useBreakpoint('md')

  return (
    <AddressBadgeStyle
      symbols={isMobile ? symbolsMobile : symbolsDesktop}
      address={address ?? ''}
      ref={ref}
    />
  )
}

export default forwardRef(AddressBadge)
