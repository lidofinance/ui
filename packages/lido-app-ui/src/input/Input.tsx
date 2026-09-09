import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import styles from './Input.module.css'

export type InputSize = 'default' | 'small'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: InputSize
  icon?: ReactNode
  rightDecorator?: ReactNode
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'default',
      icon,
      rightDecorator,
      error = false,
      disabled,
      className,
      ...rest
    },
    ref,
  ) => (
    <label
      className={cn(styles.root, styles[size], className, {
        [styles.error]: error,
        [styles.disabled]: disabled,
      })}
    >
      {icon ? (
        <span className={styles.icon} aria-hidden='true'>
          {icon}
        </span>
      ) : null}
      <input
        ref={ref}
        className={styles.input}
        disabled={disabled}
        aria-invalid={error || undefined}
        {...rest}
      />
      {rightDecorator ? (
        <span className={styles.decorator}>{rightDecorator}</span>
      ) : null}
    </label>
  ),
)

Input.displayName = 'Input'
