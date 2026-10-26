import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import cn from 'classnames'
import { InfoTooltip } from '../info-tooltip'

import styles from './DataList.module.css'

export type DetailRowValue = ReactNode | { from: ReactNode; to: ReactNode }

export type DataListRowDataTestId = {
  root?: string
  label?: string
  value?: string
  icon?: string
  description?: string
}

export type DetailRowProps = ComponentPropsWithoutRef<'div'> & {
  label: ReactNode
  value: DetailRowValue
  icon?: ReactNode
  info?: ReactNode
  infoFaint?: boolean
  description?: ReactNode
  descriptionInfo?: ReactNode
  dataTestId?: DataListRowDataTestId
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
  dataTestId,
  ...rest
}: DetailRowProps) => (
  <div
    className={cn(styles.row, className)}
    data-testid={dataTestId?.root}
    {...rest}
  >
    <span className={styles.mainRow}>
      <span className={styles.labelGroup}>
        {icon ? (
          <span className={styles.leadingIcon} data-testid={dataTestId?.icon}>
            {icon}
          </span>
        ) : null}
        <span className={styles.label} data-testid={dataTestId?.label}>
          {label}
        </span>
        {info ? (
          <InfoTooltip
            content={info}
            className={cn(infoFaint && styles.infoFaint)}
          />
        ) : null}
      </span>
      {isChangeValue(value) ? (
        <span className={styles.value} data-testid={dataTestId?.value}>
          <span className={styles.valueOld}>{value.from}</span>
          <span className={styles.valueArrow} aria-hidden='true'>
            →
          </span>
          <span>{value.to}</span>
        </span>
      ) : (
        <span className={styles.value} data-testid={dataTestId?.value}>
          {value}
        </span>
      )}
    </span>
    {description ? (
      <span className={styles.descriptionRow}>
        <span
          className={styles.description}
          data-testid={dataTestId?.description}
        >
          {description}
        </span>
        {descriptionInfo ? (
          <InfoTooltip content={descriptionInfo} tone='tertiary' />
        ) : null}
      </span>
    ) : null}
  </div>
)
