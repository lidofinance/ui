import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import { trimAddress } from './trimAddress'
import styles from './Address.module.css'
import cn from 'classnames'

export type AddressProps = ComponentPropsWithoutRef<'div'> & {
  address: string
  symbols?: number
}

export const Address = forwardRef(
  (
    { symbols = 3, address, className, ...rest }: AddressProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className={cn(styles.address, className)} {...rest} ref={ref}>
        <span className={styles.full}>{address}</span>
        <span className={styles.trimmed}>{trimAddress(address, symbols)}</span>
      </div>
    )
  },
)
Address.displayName = 'Address'
