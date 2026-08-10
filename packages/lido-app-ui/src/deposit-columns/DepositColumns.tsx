import type { ReactNode } from 'react'

import cn from 'classnames'

import styles from './DepositColumns.module.css'

export type DepositColumn = {
  label: ReactNode
  info?: ReactNode
  value: ReactNode
  sub?: ReactNode
  action?: ReactNode
}

export type DepositColumnsVariant = 'onDark' | 'onLight'

export type DepositColumnsProps = {
  columns: DepositColumn[]
  variant?: DepositColumnsVariant
  className?: string
}

export const DepositColumns = ({
  columns,
  variant = 'onDark',
  className,
}: DepositColumnsProps) => (
  <div className={cn(styles.row, styles[variant], className)}>
    {columns.map((column, index) => (
      <div key={index} className={styles.column}>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.labelRow}>
              <span className={styles.label}>{column.label}</span>
              {column.info != null ? (
                <span className={styles.info}>{column.info}</span>
              ) : null}
            </div>
            <div className={styles.valueRow}>
              <span className={styles.value}>{column.value}</span>
              {column.sub != null ? (
                <span className={styles.sub}>{column.sub}</span>
              ) : null}
            </div>
          </div>
        </div>
        {column.action != null ? (
          <div className={styles.action}>{column.action}</div>
        ) : null}
      </div>
    ))}
  </div>
)
