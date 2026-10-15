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

export type TagDataTestId = {
  root?: string
  icon?: string
  closeButton?: string
}

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: TagVariant
  icon?: ReactNode
  onClose?: () => void
  dataTestId?: TagDataTestId
}

export const Tag = ({
  variant = 'default',
  icon,
  onClose,
  className,
  children,
  dataTestId,
  ...rest
}: TagProps) => (
  <span
    className={cn(styles.tag, styles[variant], className)}
    data-testid={dataTestId?.root}
    {...rest}
  >
    {icon != null ? (
      <span
        className={styles.icon}
        aria-hidden='true'
        data-testid={dataTestId?.icon}
      >
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
        data-testid={dataTestId?.closeButton}
      >
        <IconCross aria-hidden='true' />
      </button>
    ) : null}
  </span>
)
