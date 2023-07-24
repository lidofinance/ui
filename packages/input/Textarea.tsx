import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import { CommonProps } from './types'
import styles from './Input.module.css'
import cn from 'classnames'

export type TextareaProps = ComponentPropsWithoutRef<'textarea'> & CommonProps

export const Textarea = forwardRef(
  (props: TextareaProps, ref?: ForwardedRef<HTMLTextAreaElement>) => {
    const {
      id,
      disabled = false,
      label,
      error,
      warning,
      success,
      active = false,
      fullwidth = false,
      placeholder = ' ',
      className,
      style,
      variant = 'default',
      color = 'default',
      wrapperRef,
      children,
      ...rest
    } = props
    const hasLabel = !!label && variant === 'default'

    const hasError = !!error
    const hasErrorMessage = hasError && typeof error !== 'boolean'
    const hasWarning = !hasError && !!warning // `error` overrides `warning`
    const hasWarningMessage = hasWarning && typeof warning !== 'boolean'
    const hasSuccess = !!success && !error
    const hasSuccessMessage = hasSuccess && typeof success !== 'boolean'

    return (
      <label
        className={cn(styles.wrapper, className, {
          [styles.disabled]: disabled,
          [styles.fullwidth]: fullwidth,
        })}
        style={style}
        htmlFor={id}
        ref={wrapperRef}
      >
        <span
          className={cn(styles.content, {
            [styles.colorAccent]: color === 'accent',
            [styles.colorDefault]: color === 'default',
            [styles.variantSmall]: variant === 'small',
            [styles.variantDefault]: variant === 'default',
            [styles.error]: hasError,
            [styles.warning]: hasWarning,
            [styles.active]: active,
            [styles.disabled]: disabled,
          })}
        >
          <div className={styles.controlWrapper}>
            <textarea
              className={cn(styles.input, styles.textarea, {
                [styles.labeled]: hasLabel,
                [styles.colorDefault]: color === 'default',
                [styles.colorAccent]: color === 'accent',
              })}
              disabled={disabled}
              placeholder={placeholder}
              aria-invalid={hasError}
              ref={ref}
              {...rest}
            />

            {hasLabel && (
              <span
                className={cn(styles.label, styles.textareaLabel, {
                  [styles.colorDefault]: color === 'default',
                  [styles.colorAccent]: color === 'accent',
                })}
              >
                {label}
              </span>
            )}
          </div>
        </span>

        {hasErrorMessage && (
          <span className={cn(styles.message, styles.error, styles.bordered)}>
            {error}
          </span>
        )}
        {hasWarningMessage && (
          <span className={cn(styles.message, styles.warning, styles.bordered)}>
            {warning}
          </span>
        )}
        {hasSuccessMessage && (
          <span className={cn(styles.message, styles.success, styles.bordered)}>
            {success}
          </span>
        )}
      </label>
    )
  },
)
Textarea.displayName = 'Textarea'
