import { forwardRef, type ComponentPropsWithoutRef } from 'react'

import cn from 'classnames'

import { Copy, type CopyProps } from '../copy'
import { Hex } from '../hex'
import { Identicon } from '../identicon'
import { Tooltip } from '../tooltip'
import styles from './Address.module.css'

export type AddressProps = Omit<ComponentPropsWithoutRef<'span'>, 'onCopy'> & {
  address: string
  symbols?: number
  identicon?: number
  tooltip?: boolean
  copy?: boolean
  /** Called after the address is copied; needs `copy`. */
  onCopy?: () => void
  /** Accessible names; defaults are English. */
  labels?: CopyProps['labels']
}

/** Trimmed hex with optional identicon, full-value tooltip, copy button and trailing slot; font is inherited. */
export const Address = forwardRef<HTMLSpanElement, AddressProps>(
  (
    {
      address,
      symbols,
      identicon,
      tooltip = false,
      copy = false,
      onCopy,
      labels,
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
        {tooltip ? (
          <Tooltip content={address} tabIndex={0}>
            {hex}
          </Tooltip>
        ) : (
          hex
        )}
        {copy ? <Copy text={address} onCopy={onCopy} labels={labels} /> : null}
        {children}
      </span>
    )
  },
)

Address.displayName = 'Address'
