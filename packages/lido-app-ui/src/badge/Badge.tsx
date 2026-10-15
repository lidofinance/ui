import cn from 'classnames'
import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Badge.module.css'

export type BadgeDataTestId = {
  root?: string
  icon?: string
}

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** Optional glyph before the label. Omitted entirely when not passed. */
  icon?: ReactNode
  dataTestId?: BadgeDataTestId
}

export const Badge = ({
  icon,
  className,
  children,
  dataTestId,
  ...rest
}: BadgeProps) => (
  <span
    className={cn(styles.badge, className)}
    data-testid={dataTestId?.root}
    {...rest}
  >
    {icon && (
      <span
        className={styles.icon}
        aria-hidden='true'
        data-testid={dataTestId?.icon}
      >
        {icon}
      </span>
    )}
    {children}
  </span>
)
