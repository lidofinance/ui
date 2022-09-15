import React, { ForwardedRef, forwardRef } from 'react'
import {
  InputWrapperStyle,
  InputContentStyle,
  TextareaStyle,
  InputMessageStyle,
} from './InputStyles'
import { TextareaLabelStyle } from './LabelStyles'
import { TextareaProps } from './types'

function Textarea(props: TextareaProps, ref?: ForwardedRef<HTMLInputElement>) {
  const {
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

  const { id, disabled = false } = props
  const wrapperProps = { className, style }

  const hasLabel = !!label && variant === 'default'

  const hasError = !!error
  const hasErrorMessage = hasError && typeof error !== 'boolean'
  const hasWarning = !hasError && !!warning // `error` overrides `warning`
  const hasWarningMessage = hasWarning && typeof warning !== 'boolean'
  const hasSuccess = !!success && !error
  const hasSuccessMessage = hasSuccess && typeof success !== 'boolean'

  return (
    <InputWrapperStyle
      $error={hasError}
      $warning={hasWarning}
      $active={active}
      $disabled={disabled}
      $fullwidth={fullwidth}
      $color={color}
      htmlFor={id}
      ref={wrapperRef}
      {...wrapperProps}
    >
      <InputContentStyle $variant={variant}>
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
}

export default forwardRef(Textarea)
