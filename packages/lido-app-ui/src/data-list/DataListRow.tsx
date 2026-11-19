import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import cn from 'classnames'
import { InfoTooltip } from '../info-tooltip'
import { hasContent } from '../utils/hasContent'

import styles from './DataList.module.css'

export type DataListRowValue = ReactNode | { from: ReactNode; to: ReactNode }

/** @deprecated Use `DataListRowValue`. */
export type DetailRowValue = DataListRowValue

export type DataListRowDataTestId = {
  root?: string
  label?: string
  value?: string
  icon?: string
  description?: string
  info?: string
  infoContent?: string
  descriptionInfo?: string
  descriptionInfoContent?: string
}

export type DataListRowProps = ComponentPropsWithoutRef<'div'> & {
  label: ReactNode
  value: DataListRowValue
  icon?: ReactNode
  info?: ReactNode
  infoFaint?: boolean
  description?: ReactNode
  descriptionInfo?: ReactNode
  dataTestId?: DataListRowDataTestId
}

/** @deprecated Use `DataListRowProps`. */
export type DetailRowProps = DataListRowProps

const isChangeValue = (
  value: DataListRowValue,
): value is { from: ReactNode; to: ReactNode } =>
  typeof value === 'object' &&
  value !== null &&
  'from' in value &&
  'to' in value

/** Label and value row with an optional info tooltip, leading icon and from → to change format. */
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
}: DataListRowProps) => (
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
            dataTestId={{
              root: dataTestId?.info,
              content: dataTestId?.infoContent,
            }}
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
    {hasContent(description) ? (
      <span className={styles.descriptionRow}>
        <span
          className={styles.description}
          data-testid={dataTestId?.description}
        >
          {description}
        </span>
        {descriptionInfo ? (
          <InfoTooltip
            content={descriptionInfo}
            tone='tertiary'
            dataTestId={{
              root: dataTestId?.descriptionInfo,
              content: dataTestId?.descriptionInfoContent,
            }}
          />
        ) : null}
      </span>
    ) : null}
  </div>
)
