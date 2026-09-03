import type { HTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import styles from './StatItem.module.css'

export type StatItemProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  label: ReactNode
  value: ReactNode
  icon?: ReactNode
  subValue?: ReactNode
}

export const StatItem = ({
  label,
  value,
  icon,
  subValue,
  className,
  ...rest
}: StatItemProps) => (
  <div className={cn(styles.item, className)} {...rest}>
    <div className={styles.label}>{label}</div>
    <div className={styles.valueRow}>
      <div className={styles.value}>{value}</div>
      {icon != null ? (
        <span className={styles.icon} aria-hidden='true'>
          {icon}
        </span>
      ) : null}
    </div>
    {subValue != null ? (
      <div className={styles.subValue}>{subValue}</div>
    ) : null}
  </div>
)
