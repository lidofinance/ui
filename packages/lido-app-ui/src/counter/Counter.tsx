import { forwardRef, type HTMLAttributes } from 'react'

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

/** 20px pill for notification/unread counts; grows horizontally for multi-digit values. */
export const Counter = forwardRef<HTMLSpanElement, CounterProps>(
  ({ variant = 'default', className, children, dataTestId, ...rest }, ref) => (
    <span
      ref={ref}
      className={cn(styles.counter, styles[variant], className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {children}
    </span>
  ),
)

Counter.displayName = 'Counter'
