import cn from 'classnames'
import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Badge.module.css'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** Defaults to a shield glyph, matching the Figma primitive. */
  icon?: ReactNode
}

export const Badge = ({ icon, className, children, ...rest }: BadgeProps) => (
  <span className={cn(styles.badge, className)} {...rest}>
    <span className={styles.icon} aria-hidden='true'>
      {icon}
    </span>
    {children}
  </span>
)
