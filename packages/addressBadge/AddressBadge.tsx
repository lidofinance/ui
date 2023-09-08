import { ForwardedRef, forwardRef } from 'react'
import { useBreakpoint } from '@lidofinance/hooks'
import { AddressBadgeStyle } from './AddressBadgeStyles'
import { AddressBadgeProps } from './types'

export const AddressBadge = forwardRef(
  (
    {
      address,
      symbolsMobile = 3,
      symbolsDesktop = 6,
      ...rest
    }: AddressBadgeProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const isMobile = useBreakpoint('md')

    return (
      <AddressBadgeStyle
        symbols={isMobile ? symbolsMobile : symbolsDesktop}
        address={address ?? ''}
        {...rest}
        ref={ref}
      />
    )
  },
)
AddressBadge.displayName = 'AddressBadge'
