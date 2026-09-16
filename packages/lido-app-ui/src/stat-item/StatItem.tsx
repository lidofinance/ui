import type { HTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import { IconInfo } from '../icons'
import { Tooltip } from '../tooltip'

import styles from './StatItem.module.css'

export type StatItemAlign = 'left' | 'center'

export type StatItemProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  label: ReactNode
  value: ReactNode
  titleIcon?: ReactNode
  info?: ReactNode
  icon?: ReactNode
  subValue?: ReactNode
  description?: ReactNode
  align?: StatItemAlign
}

export const StatItem = ({
  label,
  value,
  titleIcon,
  info,
  icon,
  subValue,
  description,
  align = 'center',
  className,
  ...rest
}: StatItemProps) => (
  <div className={cn(styles.item, styles[align], className)} {...rest}>
    <div className={styles.title}>
      {titleIcon ? (
        <span className={styles.titleIcon} aria-hidden='true'>
          {titleIcon}
        </span>
      ) : null}
      <div className={styles.label}>{label}</div>
      {info ? (
        <Tooltip content={info} className={styles.info}>
          <IconInfo className={styles.infoIcon} />
        </Tooltip>
      ) : null}
    </div>
    <div className={styles.valueRow}>
      <div className={styles.value}>{value}</div>
      {icon != null ? (
        <span className={styles.icon} aria-hidden='true'>
          {icon}
        </span>
      ) : null}
      {align === 'left' && subValue != null ? (
        <div className={styles.subValue}>{subValue}</div>
      ) : null}
    </div>
    {align === 'center' && subValue != null ? (
      <div className={styles.subValue}>{subValue}</div>
    ) : null}
    {description != null ? (
      <div className={styles.description}>{description}</div>
    ) : null}
  </div>
)
