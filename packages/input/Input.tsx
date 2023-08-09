import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'
import { CommonProps, InputTypes } from './types'
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
        className={cn('input-wrapper', className, {
          ['input-wrapper-disabled']: disabled,
          ['input-wrapper-fullwidth']: fullwidth,
        })}
        style={style}
        htmlFor={id}
        ref={wrapperRef}
      >
        <span
          className={cn('input-content', {
            ['input-content-color-accent']: color === 'accent',
            ['input-content-color-default']: color === 'default',
            ['input-content-variant-small']: variant === 'small',
            ['input-content-variant-default']: variant === 'default',
            ['input-content-error']: hasError,
            ['input-content-warning']: hasWarning,
            ['input-content-active']: active,
            ['input-content-disabled']: disabled,
          })}
        >
          {hasLeftDecorator && (
            <span className={cn('input-decorator', 'input-decorator-left')}>
              {leftDecorator}
            </span>
          )}

          <div className={'input-control-wrapper'}>
            <input
              className={cn('input', {
                ['input-labeled']: hasLabel,
                ['input-color-default']: color === 'default',
                ['input-color-accent']: color === 'accent',
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
                className={cn('input-label', {
                  ['input-label-default']: color === 'default',
                  ['input-label-accent']: color === 'accent',
                })}
              >
                {label}
              </span>
            )}
          </div>

          {hasRightDecorator && (
            <span className={cn('input-decorator', 'input-decorator-right')}>
              {rightDecorator}
            </span>
          )}
        </span>

        {hasErrorMessage && (
          <span className={cn('input-message', 'input-message-error', 'input-message-bordered')}>
            {error}
          </span>
        )}
        {hasWarningMessage && (
          <span className={cn('input-message', 'input-message-warning', 'input-message-bordered')}>
            {warning}
          </span>
        )}
        {hasSuccessMessage && (
          <span className={cn('input-message', 'input-message-success', 'input-message-bordered')}>
            {success}
          </span>
        )}
      </label>
    )
  },
)
Input.displayName = 'Input'
