import type { HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Counter.module.css'

export type CounterVariant =
  | 'default'
  | 'neutral'
  | 'error'
  | 'warning'
  | 'action'
  | 'active'

export type CounterProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: CounterVariant
}

export const Counter = ({
  variant = 'default',
  className,
  children,
  ...rest
}: CounterProps) => (
  <span className={cn(styles.counter, styles[variant], className)} {...rest}>
    {children}
  </span>
)
