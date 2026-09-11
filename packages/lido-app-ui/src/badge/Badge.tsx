import cn from 'classnames'
import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Badge.module.css'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** Defaults to a shield glyph, matching the Figma primitive. */
  icon?: ReactNode
  /** Any CSS color, e.g. a `--lido-app-ui-color-icons-*` token. Defaults to success (green). */
  iconColor?: string
}

export const Badge = ({
  icon,
  iconColor,
  className,
  children,
  ...rest
}: BadgeProps) => (
  <span className={cn(styles.badge, className)} {...rest}>
    <span
      className={styles.icon}
      aria-hidden='true'
      style={iconColor ? { color: iconColor } : undefined}
    >
      {icon}
    </span>
    {children}
  </span>
)
