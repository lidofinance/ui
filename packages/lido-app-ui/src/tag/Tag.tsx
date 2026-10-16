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

export type TagIconPosition = 'left' | 'right'

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: TagVariant
  active?: boolean
  icon?: ReactNode
  iconPosition?: TagIconPosition
  onClose?: () => void
  dataTestId?: TagDataTestId
}

export const Tag = ({
  variant = 'default',
  active = false,
  icon,
  iconPosition = 'left',
  onClose,
  className,
  children,
  dataTestId,
  ...rest
}: TagProps) => {
  const iconElement =
    icon != null ? (
      <span
        className={styles.icon}
        aria-hidden='true'
        data-testid={dataTestId?.icon}
      >
        {icon}
      </span>
    ) : null

  return (
    <span
      className={cn(
        styles.tag,
        styles[variant],
        active && styles.isActive,
        className,
      )}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {iconPosition === 'left' ? iconElement : null}
      {children}
      {iconPosition === 'right' ? iconElement : null}
      {onClose ? (
        <button
          type='button'
          className={styles.closeButton}
          aria-label='Remove'
          onClick={onClose}
          data-testid={dataTestId?.closeButton}
        >
          <IconCross aria-hidden='true' className={styles.crossIcon} />
        </button>
      ) : null}
    </span>
  )
}
