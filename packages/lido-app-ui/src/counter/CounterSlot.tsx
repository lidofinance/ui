import type { ReactNode } from 'react'

import styles from './CounterSlot.module.css'

type CounterSlotProps = {
  children?: ReactNode
  dataTestId?: string
}

export const CounterSlot = ({ children, dataTestId }: CounterSlotProps) =>
  children == null || children === false ? null : (
    <span className={styles.slot} aria-hidden='true' data-testid={dataTestId}>
      {children}
    </span>
  )
