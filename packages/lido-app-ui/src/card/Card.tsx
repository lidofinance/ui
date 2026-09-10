import type { HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Card.module.css'

export type CardSize = 'big' | 'small'

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  size?: CardSize
  /** Swaps in the hover background — use for a card that's itself a link/button. */
  interactive?: boolean
}

export const Card = ({
  size = 'big',
  interactive = false,
  className,
  children,
  ...rest
}: CardProps) => (
  <div
    className={cn(
      styles.card,
      styles[size],
      { [styles.interactive]: interactive },
      className,
    )}
    {...rest}
  >
    {children}
  </div>
)
