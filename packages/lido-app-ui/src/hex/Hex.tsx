import { forwardRef, type ComponentPropsWithoutRef } from 'react'

import cn from 'classnames'

import styles from './Hex.module.css'
import { trimHex } from './trimHex'

// Title defaults to the full value only when trimmed; an empty title opts out.
export type HexProps = Omit<ComponentPropsWithoutRef<'span'>, 'children'> & {
  value: string
  symbols?: number
}

export const Hex = forwardRef<HTMLSpanElement, HexProps>(
  ({ value, symbols = 4, title, className, ...rest }, ref) => {
    const text = trimHex(value, symbols)
    const trimmed = text !== value

    return (
      <span
        ref={ref}
        title={(title ?? (trimmed ? value : undefined)) || undefined}
        className={cn(trimmed ? styles.root : styles.full, className)}
        {...rest}
      >
        {trimmed ? (
          <>
            <span aria-hidden='true' className={styles.overlay}>
              {value}
            </span>
            <span className={styles.text}>{text}</span>
          </>
        ) : (
          text
        )}
      </span>
    )
  },
)

Hex.displayName = 'Hex'
