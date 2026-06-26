import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonVariant = 'filled' | 'outlined' | 'ghost'
export type ButtonColor = 'primary' | 'secondary' | 'warning'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize
  variant?: ButtonVariant
  color?: ButtonColor
  fullwidth?: boolean
  loading?: boolean
  children?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'md',
      variant = 'filled',
      color = 'primary',
      fullwidth = false,
      loading = false,
      disabled,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          styles.button,
          styles[size],
          styles[variant],
          styles[color],
          { [styles.fullwidth]: fullwidth, [styles.loading]: loading },
          className,
        )}
        {...rest}
      >
        <span className={cn(styles.content, { [styles.hidden]: loading })}>
          {children}
        </span>
        {loading && <span className={styles.loader} />}
      </button>
    )
  },
)

Button.displayName = 'Button'
