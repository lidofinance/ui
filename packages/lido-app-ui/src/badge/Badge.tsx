import cn from 'classnames'
import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Badge.module.css'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** Optional glyph before the label. Omitted entirely when not passed. */
  icon?: ReactNode
}

export const Badge = ({ icon, className, children, ...rest }: BadgeProps) => (
  <span className={cn(styles.badge, className)} {...rest}>
    {icon && (
      <span className={styles.icon} aria-hidden='true'>
        {icon}
      </span>
    )}
    {children}
  </span>
)
