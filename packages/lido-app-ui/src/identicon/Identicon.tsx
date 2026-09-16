import { forwardRef } from 'react'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

import cn from 'classnames'

import styles from './Identicon.module.css'

export type IdenticonProps = {
  address?: string
  size?: number
  className?: string
}

export const Identicon = forwardRef<HTMLSpanElement, IdenticonProps>(
  ({ address, size = 40, className }, ref) => (
    <span
      ref={ref}
      className={cn(styles.root, !address && styles.empty, className)}
      style={{ width: size, height: size }}
      aria-hidden='true'
    >
      {address ? (
        <Jazzicon diameter={size} seed={jsNumberForAddress(address)} />
      ) : null}
    </span>
  ),
)

Identicon.displayName = 'Identicon'
