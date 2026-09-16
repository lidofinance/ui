import type { ReactNode } from 'react'

import { IconInfo } from '../icons'
import cn from 'classnames'
import { Tooltip } from '../tooltip'

import styles from './DataList.module.css'

export type DetailRowValue = ReactNode | { from: ReactNode; to: ReactNode }

export type DetailRowProps = {
  label: ReactNode
  value: DetailRowValue
  icon?: ReactNode
  info?: ReactNode
  infoFaint?: boolean
  description?: ReactNode
  descriptionInfo?: ReactNode
  className?: string
}

const isChangeValue = (
  value: DetailRowValue,
): value is { from: ReactNode; to: ReactNode } =>
  typeof value === 'object' &&
  value !== null &&
  'from' in value &&
  'to' in value

export const DataListRow = ({
  label,
  value,
  icon,
  info,
  infoFaint = false,
  description,
  descriptionInfo,
  className,
}: DetailRowProps) => (
  <div className={cn(styles.row, className)}>
    <span className={styles.mainRow}>
      <span className={styles.labelGroup}>
        {icon ? <span className={styles.leadingIcon}>{icon}</span> : null}
        <span className={styles.label}>{label}</span>
        {info ? (
          <Tooltip
            content={info}
            className={cn(styles.info, infoFaint && styles.infoFaint)}
          >
            <IconInfo className={styles.infoIcon} />
          </Tooltip>
        ) : null}
      </span>
      {isChangeValue(value) ? (
        <span className={styles.value}>
          <span className={styles.valueOld}>{value.from}</span>
          <span className={styles.valueArrow} aria-hidden='true'>
            →
          </span>
          <span>{value.to}</span>
        </span>
      ) : (
        <span className={styles.value}>{value}</span>
      )}
    </span>
    {description ? (
      <span className={styles.descriptionRow}>
        <span className={styles.description}>{description}</span>
        {descriptionInfo ? (
          <Tooltip content={descriptionInfo} className={styles.info}>
            <IconInfo className={styles.descriptionIcon} />
          </Tooltip>
        ) : null}
      </span>
    ) : null}
  </div>
)
