import { ForwardedRef, forwardRef } from 'react'
import {
  InputWrapperStyle,
  InputContentStyle,
  InputControlWrapperStyle,
  InputStyle,
  InputLeftDecoratorStyle,
  InputRightDecoratorStyle,
  InputMessageStyle,
} from './InputStyles.js'
import { InputLabelStyle } from './LabelStyles.js'
import { InputProps } from './types.js'

export const Input = forwardRef(
  (
    {
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
      id,
      disabled = false,
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
      <InputWrapperStyle
        className={className}
        style={style}
        $disabled={disabled}
        $fullwidth={fullwidth}
        htmlFor={id}
        ref={wrapperRef}
      >
        <InputContentStyle
          $color={color}
          $variant={variant}
          $error={hasError}
          $warning={hasWarning}
          $active={active}
          $disabled={disabled}
        >
          {hasLeftDecorator && (
            <InputLeftDecoratorStyle>{leftDecorator}</InputLeftDecoratorStyle>
          )}

          <InputControlWrapperStyle>
            <InputStyle
              $labeled={hasLabel}
              $color={color}
              placeholder={placeholder}
              aria-invalid={hasError}
              type='text'
              ref={ref}
              id={id}
              disabled={disabled}
              {...rest}
            />
            {hasLabel && (
              <InputLabelStyle $color={color}>{label}</InputLabelStyle>
            )}
          </InputControlWrapperStyle>

          {hasRightDecorator && (
            <InputRightDecoratorStyle>
              {rightDecorator}
            </InputRightDecoratorStyle>
          )}
        </InputContentStyle>

        {hasErrorMessage && (
          <InputMessageStyle $variant='error' $bordered>
            {error}
          </InputMessageStyle>
        )}
        {hasWarningMessage && (
          <InputMessageStyle $variant='warning' $bordered>
            {warning}
          </InputMessageStyle>
        )}
        {hasSuccessMessage && (
          <InputMessageStyle $variant='success' $bordered>
            {success}
          </InputMessageStyle>
        )}
      </InputWrapperStyle>
    )
  },
)
Input.displayName = 'Input'
