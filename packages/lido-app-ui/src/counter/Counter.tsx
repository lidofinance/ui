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

export type CounterDataTestId = {
  root?: string
}

export type CounterProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: CounterVariant
  dataTestId?: CounterDataTestId
}

export const Counter = ({
  variant = 'default',
  className,
  children,
  dataTestId,
  ...rest
}: CounterProps) => (
  <span
    className={cn(styles.counter, styles[variant], className)}
    data-testid={dataTestId?.root}
    {...rest}
  >
    {children}
  </span>
)
