import { ForwardedRef, forwardRef } from 'react'
import { useBreakpoint } from '../hooks'
import cn from 'classnames'
import styles from './AddressBadge.module.css'
import { IdenticonBadge, IdenticonBadgeProps } from '../identicon'

export type AddressBadgeProps = Omit<
  IdenticonBadgeProps,
  'address' | 'symbols'
> & {
  address?: string
  symbolsMobile?: number
  symbolsDesktop?: number
}

export const AddressBadge = forwardRef(
  (
    {
      address,
      symbolsMobile = 3,
      symbolsDesktop = 6,
      className,
      ...rest
    }: AddressBadgeProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const isMobile = useBreakpoint('md')

    return (
      <IdenticonBadge
        symbols={isMobile ? symbolsMobile : symbolsDesktop}
        address={address ?? ''}
        className={cn(styles.addressBadge, className)}
        {...rest}
        ref={ref}
      />
    )
  },
)
AddressBadge.displayName = 'AddressBadge'
