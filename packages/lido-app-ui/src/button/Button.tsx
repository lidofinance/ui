import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { CounterSlot } from '../counter/CounterSlot'
import { IconLoaderCircle } from '../icons'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'outline' | 'subtle' | 'ghost' | 'error'

export type ButtonSize = 'big' | 'small'

export type ButtonDataTestId = {
  root?: string
  iconLeft?: string
  iconRight?: string
  content?: string
  counter?: string
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  /** Corner slot, aria-hidden: put the count into `aria-label`. */
  counter?: ReactNode
  dataTestId?: ButtonDataTestId
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      type = 'button',
      variant = 'primary',
      size = 'big',
      loading = false,
      disabled = false,
      iconLeft,
      iconRight,
      counter,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        loading && !disabled && styles.loading,
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
      <CounterSlot dataTestId={dataTestId?.counter}>{counter}</CounterSlot>
    </button>
  ),
)

Button.displayName = 'Button'
