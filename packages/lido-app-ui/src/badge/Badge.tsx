import type { HTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import styles from './Badge.module.css'

export type BadgeVariant = 'success' | 'warning' | 'error'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant: BadgeVariant
  icon?: ReactNode
}

export const Badge = ({
  variant,
  icon,
  className,
  children,
  ...rest
}: BadgeProps) => (
  <span className={cn(styles.badge, styles[variant], className)} {...rest}>
    {icon != null ? (
      <span className={styles.icon} aria-hidden='true'>
        {icon}
      </span>
    ) : null}
    {children}
  </span>
)
