import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { IconInfo } from '../icons'
import { Tooltip } from '../tooltip'
import styles from './Input.module.css'

export type InputSize = 'default' | 'small'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: InputSize
  icon?: ReactNode
  rightDecorator?: ReactNode
  label?: ReactNode
  tooltip?: ReactNode
  description?: ReactNode
  error?: ReactNode | boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'default',
      icon,
      rightDecorator,
      label,
      tooltip,
      description,
      error,
      disabled,
      className,
      id,
      ...rest
    },
    ref,
  ) => {
    const fallbackId = useId()
    const inputId = id ?? fallbackId
    const errorId = `${inputId}-error`

    const hasError = Boolean(error)
    const errorMessage = typeof error === 'boolean' ? null : error
    const showErrorMessage = errorMessage != null

    return (
      <div className={cn(styles.field, className)}>
        {label != null ? (
          <span className={styles.labelRow}>
            <label className={styles.label} htmlFor={inputId}>
              {label}
            </label>
            {tooltip != null ? (
              <Tooltip content={tooltip}>
                <IconInfo className={styles.tooltipIcon} aria-hidden='true' />
              </Tooltip>
            ) : null}
          </span>
        ) : null}
        <label
          className={cn(styles.root, styles[size], {
            [styles.error]: hasError,
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
            id={inputId}
            className={styles.input}
            disabled={disabled}
            aria-invalid={hasError || undefined}
            aria-describedby={showErrorMessage ? errorId : undefined}
            {...rest}
          />
          {rightDecorator ? (
            <span className={styles.decorator}>{rightDecorator}</span>
          ) : null}
        </label>
        {showErrorMessage ? (
          <p id={errorId} className={styles.errorText} role='alert'>
            {errorMessage}
          </p>
        ) : null}
        {description != null ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
    )
  },
)

Input.displayName = 'Input'
