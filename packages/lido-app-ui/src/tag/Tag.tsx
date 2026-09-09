import type { HTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import { IconCross } from '../icons'
import styles from './Tag.module.css'

export type TagVariant =
  | 'default'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'active'
  | 'action'

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: TagVariant
  icon?: ReactNode
  onClose?: () => void
}

export const Tag = ({
  variant = 'default',
  icon,
  onClose,
  className,
  children,
  ...rest
}: TagProps) => (
  <span className={cn(styles.tag, styles[variant], className)} {...rest}>
    {icon != null ? (
      <span className={styles.icon} aria-hidden='true'>
        {icon}
      </span>
    ) : null}
    {children}
    {onClose ? (
      <button
        type='button'
        className={styles.closeButton}
        aria-label='Remove'
        onClick={onClose}
      >
        <IconCross aria-hidden='true' />
      </button>
    ) : null}
  </span>
)
