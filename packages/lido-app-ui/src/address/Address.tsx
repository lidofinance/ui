import { forwardRef, type ComponentPropsWithoutRef } from 'react'

import cn from 'classnames'

import { Copy } from '../copy'
import { Hex } from '../hex'
import { Identicon } from '../identicon'
import { Tooltip } from '../tooltip'
import styles from './Address.module.css'

export type AddressProps = ComponentPropsWithoutRef<'span'> & {
  address: string
  symbols?: number
  identicon?: number
  tooltip?: boolean
  copy?: boolean
}

export const Address = forwardRef<HTMLSpanElement, AddressProps>(
  (
    {
      address,
      symbols,
      identicon,
      tooltip = false,
      copy = false,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const hex = (
      <Hex value={address} symbols={symbols} title={tooltip ? '' : undefined} />
    )

    return (
      <span ref={ref} className={cn(styles.root, className)} {...rest}>
        {identicon != null ? (
          <Identicon
            address={address}
            size={identicon}
            className={cn(
              styles.identicon,
              identicon >= 28 && styles.identiconLarge,
            )}
          />
        ) : null}
        {tooltip ? <Tooltip content={address}>{hex}</Tooltip> : hex}
        {copy ? <Copy text={address} /> : null}
        {children}
      </span>
    )
  },
)

Address.displayName = 'Address'
