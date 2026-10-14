import type { ButtonHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import { IconLoaderCircle } from '../icons'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'outline' | 'subtle' | 'ghost' | 'error'

export type ButtonSize = 'big' | 'small'

export type ButtonDataTestId = {
  root?: string
  iconLeft?: string
  iconRight?: string
  content?: string
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  dataTestId?: ButtonDataTestId
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
  dataTestId,
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
    data-testid={dataTestId?.root}
    {...rest}
  >
    {loading ? (
      <IconLoaderCircle className={styles.spinner} aria-hidden='true' />
    ) : (
      iconLeft != null && (
        <span
          className={styles.icon}
          aria-hidden='true'
          data-testid={dataTestId?.iconLeft}
        >
          {iconLeft}
        </span>
      )
    )}
    <span className={styles.content} data-testid={dataTestId?.content}>
      {children}
    </span>
    {!loading && iconRight != null ? (
      <span
        className={styles.icon}
        aria-hidden='true'
        data-testid={dataTestId?.iconRight}
      >
        {iconRight}
      </span>
    ) : null}
  </button>
)
