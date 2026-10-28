import type { HTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import { InfoTooltip } from '../info-tooltip'

import styles from './StatItem.module.css'

export type StatItemAlign = 'left' | 'center'

export type StatItemDataTestId = {
  root?: string
  label?: string
  icon?: string
  value?: string
  subValue?: string
  description?: string
}

export type StatItemProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  label: ReactNode
  value: ReactNode
  titleIcon?: ReactNode
  info?: ReactNode
  icon?: ReactNode
  subValue?: ReactNode
  description?: ReactNode
  align?: StatItemAlign
  dataTestId?: StatItemDataTestId
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
  dataTestId,
  ...rest
}: StatItemProps) => (
  <div
    className={cn(styles.item, styles[align], className)}
    data-testid={dataTestId?.root}
    {...rest}
  >
    <div className={styles.title}>
      {titleIcon ? (
        <span className={styles.titleIcon} aria-hidden='true'>
          {titleIcon}
        </span>
      ) : null}
      <div className={styles.label} data-testid={dataTestId?.label}>
        {label}
      </div>
      {info ? <InfoTooltip content={info} /> : null}
    </div>
    <div className={styles.valueRow}>
      <div className={styles.value} data-testid={dataTestId?.value}>
        {value}
      </div>
      {icon != null ? (
        <span
          className={styles.icon}
          aria-hidden='true'
          data-testid={dataTestId?.icon}
        >
          {icon}
        </span>
      ) : null}
      {align === 'left' && subValue != null ? (
        <div className={styles.subValue} data-testid={dataTestId?.subValue}>
          {subValue}
        </div>
      ) : null}
    </div>
    {align === 'center' && subValue != null ? (
      <div className={styles.subValue} data-testid={dataTestId?.subValue}>
        {subValue}
      </div>
    ) : null}
    {description != null ? (
      <div className={styles.description} data-testid={dataTestId?.description}>
        {description}
      </div>
    ) : null}
  </div>
)
