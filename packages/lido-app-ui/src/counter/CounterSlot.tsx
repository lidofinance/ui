import type { ReactNode } from 'react'

import { Counter } from './Counter'
import styles from './CounterSlot.module.css'

type CounterSlotProps = {
  children?: ReactNode
  dataTestId?: string
}

export const CounterSlot = ({ children, dataTestId }: CounterSlotProps) => {
  if (children == null || typeof children === 'boolean' || children === '') {
    return null
  }

  const content =
    typeof children === 'number' || typeof children === 'string' ? (
      <Counter>{children}</Counter>
    ) : (
      children
    )

  return (
    <span className={styles.slot} aria-hidden='true' data-testid={dataTestId}>
      {content}
    </span>
  )
}

export const CounterLabel = ({ children }: { children?: string }) =>
  children ? <span className={styles.visuallyHidden}>{children}</span> : null
