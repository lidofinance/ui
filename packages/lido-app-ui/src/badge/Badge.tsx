import type { HTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import { IconShield } from '../icons'
import styles from './Badge.module.css'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** Defaults to a shield glyph, matching the Figma primitive. */
  icon?: ReactNode
}

export const Badge = ({ icon, className, children, ...rest }: BadgeProps) => (
  <span className={cn(styles.badge, className)} {...rest}>
    <span className={styles.icon} aria-hidden='true'>
      {icon ?? <IconShield />}
    </span>
    {children}
  </span>
)
