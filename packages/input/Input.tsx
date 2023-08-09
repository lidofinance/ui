import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'
import { CommonProps, InputTypes } from './types'
import styles from './Input.module.css'
import cn from 'classnames'

export type InputProps = ComponentPropsWithoutRef<'input'> &
  CommonProps & {
    type?: InputTypes
    leftDecorator?: ReactNode
    rightDecorator?: ReactNode
  }

export const Input = forwardRef(
  (
    {
      id,
      disabled = false,
      label,
      error,
      warning,
      success,
      active = false,
      fullwidth = false,
      placeholder = ' ',
      leftDecorator,
      rightDecorator,
      className,
      style,
      variant = 'default',
      color = 'default',
      wrapperRef,
      children,
      ...rest
    }: InputProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    const hasLabel = !!label && variant === 'default'

    const hasError = !!error
    const hasErrorMessage = hasError && typeof error !== 'boolean'
    const hasWarning = !hasError && !!warning // `error` overrides `warning`
    const hasWarningMessage = hasWarning && typeof warning !== 'boolean'
    const hasSuccess = !!success && !error
    const hasSuccessMessage = hasSuccess && typeof success !== 'boolean'

    const hasLeftDecorator = !!leftDecorator
    const hasRightDecorator = !!rightDecorator

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
          {hasLeftDecorator && (
            <span className={cn(styles.decorator, styles.left)}>
              {leftDecorator}
            </span>
          )}

          <div className={styles.controlWrapper}>
            <input
              className={cn(styles.input, {
                [styles.labeled]: hasLabel,
                [styles.colorDefault]: color === 'default',
                [styles.colorAccent]: color === 'accent',
              })}
              disabled={disabled}
              placeholder={placeholder}
              aria-invalid={hasError}
              type='text'
              ref={ref}
              {...rest}
            />
            {hasLabel && (
              <span
                className={cn(styles.label, {
                  [styles.colorDefault]: color === 'default',
                  [styles.colorAccent]: color === 'accent',
                })}
              >
                {label}
              </span>
            )}
          </div>

          {hasRightDecorator && (
            <span className={cn(styles.decorator, styles.right)}>
              {rightDecorator}
            </span>
          )}
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
Input.displayName = 'Input'
