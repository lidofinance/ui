import { ForwardedRef, forwardRef } from 'react'
import {
  InputWrapperStyle,
  InputContentStyle,
  TextareaStyle,
  InputMessageStyle,
  InputControlWrapperStyle,
} from './InputStyles'
import { TextareaLabelStyle } from './LabelStyles'
import { TextareaProps } from './types'

export const Textarea = forwardRef(
  (
    {
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
      id,
      disabled = false,
      wrapperRef,
      children,
      ...rest
    }: TextareaProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    const hasLabel = !!label && variant === 'default'

    const hasError = !!error
    const hasErrorMessage = hasError && typeof error !== 'boolean'
    const hasWarning = !hasError && !!warning // `error` overrides `warning`
    const hasWarningMessage = hasWarning && typeof warning !== 'boolean'
    const hasSuccess = !!success && !error
    const hasSuccessMessage = hasSuccess && typeof success !== 'boolean'

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
          <InputControlWrapperStyle>
            <TextareaStyle
              $labeled={hasLabel}
              $color={color}
              placeholder={placeholder}
              aria-invalid={hasError}
              ref={ref}
              {...rest}
            />
            {hasLabel && (
              <TextareaLabelStyle $color={color}>{label}</TextareaLabelStyle>
            )}
          </InputControlWrapperStyle>
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
Textarea.displayName = 'Textarea'
