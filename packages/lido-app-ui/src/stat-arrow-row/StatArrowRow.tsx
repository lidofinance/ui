import type { ReactNode } from 'react'

import { IconArrowRight } from '../icons'
import cn from 'classnames'

import styles from './StatArrowRow.module.css'

export type StatArrowRowStat = {
  label: ReactNode
  value: ReactNode
  icon?: ReactNode
}

export type StatArrowRowVariant = 'onDark' | 'onLight'

export type StatArrowRowProps = {
  stats: StatArrowRowStat[]
  onArrowClick?: () => void
  arrowLabel?: string
  mobileButton?: ReactNode
  variant?: StatArrowRowVariant
  className?: string
}

export const StatArrowRow = ({
  stats,
  onArrowClick,
  arrowLabel = 'View product',
  mobileButton,
  variant = 'onDark',
  className,
}: StatArrowRowProps) => (
  <div
    className={cn(
      styles.wrap,
      variant === 'onLight' && styles.onLight,
      className,
    )}
  >
    <div className={styles.row}>
      <div className={styles.stats}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.stat}>
            <div className={styles.label}>{stat.label}</div>
            <div className={styles.valueRow}>
              <span className={styles.value}>{stat.value}</span>
              {stat.icon != null ? (
                <span className={styles.icon} aria-hidden='true'>
                  {stat.icon}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <button
        type='button'
        className={styles.arrow}
        onClick={onArrowClick}
        aria-label={arrowLabel}
      >
        <IconArrowRight className={styles.arrowIcon} />
      </button>
    </div>
    {mobileButton != null ? (
      <div className={styles.mobileButton}>{mobileButton}</div>
    ) : null}
  </div>
)
