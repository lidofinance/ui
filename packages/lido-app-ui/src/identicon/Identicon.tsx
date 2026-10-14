import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

import cn from 'classnames'

import styles from './Identicon.module.css'

export type IdenticonDataTestId = {
  root?: string
}

export type IdenticonProps = ComponentPropsWithoutRef<'span'> & {
  address?: string
  size?: number
  dataTestId?: IdenticonDataTestId
}

export const Identicon = forwardRef<HTMLSpanElement, IdenticonProps>(
  ({ address, size = 40, className, style, dataTestId, ...rest }, ref) => (
    <span
      ref={ref}
      className={cn(styles.root, !address && styles.empty, className)}
      style={{ width: size, height: size, ...style }}
      aria-hidden='true'
      data-testid={dataTestId?.root}
      {...rest}
    >
      {address ? (
        <Jazzicon diameter={size} seed={jsNumberForAddress(address)} />
      ) : null}
    </span>
  ),
)

Identicon.displayName = 'Identicon'
