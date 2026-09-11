import type { ButtonHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import { IconLoaderCircle } from '../icons'
import styles from './Button.module.css'

export type ButtonVariant =
  | 'primary'
  | 'outline'
  | 'subtle'
  | 'ghost'
  | 'danger'

export type ButtonSize = 'big' | 'small'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const Button = ({
  className,
  children,
  type = 'button',
  variant = 'primary',
  size = 'big',
  loading = false,
  disabled = false,
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) => (
  <button
    type={type}
    disabled={disabled || loading}
    aria-busy={loading || undefined}
    className={cn(
      styles.button,
      styles[variant],
      styles[size],
      loading && styles.loading,
      className,
    )}
    {...rest}
  >
    {loading ? (
      <IconLoaderCircle className={styles.spinner} aria-hidden='true' />
    ) : (
      iconLeft != null && (
        <span className={styles.icon} aria-hidden='true'>
          {iconLeft}
        </span>
      )
    )}
    <span className={styles.content}>{children}</span>
    {!loading && iconRight != null ? (
      <span className={styles.icon} aria-hidden='true'>
        {iconRight}
      </span>
    ) : null}
  </button>
)
