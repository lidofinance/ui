import type { HTMLAttributes } from 'react'

import cn from 'classnames'

import { Counter } from '../counter'
import type { CounterVariant } from '../counter'
import styles from './WithCounter.module.css'

export type WithCounterProps = HTMLAttributes<HTMLSpanElement> & {
  count?: number | string | null
  variant?: CounterVariant
}

/** Pins a Counter to the top-right corner of its children; the counter is aria-hidden, so put the count into the wrapped control's aria-label. */
export const WithCounter = ({
  count,
  variant = 'action',
  className,
  children,
  ...rest
}: WithCounterProps) => (
  <span className={cn(styles.root, className)} {...rest}>
    {children}
    {count != null ? (
      <Counter variant={variant} className={styles.counter} aria-hidden='true'>
        {count}
      </Counter>
    ) : null}
  </span>
)
