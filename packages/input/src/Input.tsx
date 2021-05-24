import { ForwardedRef, forwardRef } from 'react'
import {
  InputWrapperStyle,
  InputContentStyle,
  InputStyle,
  InputLeftDecoratorStyle,
  InputRightDecoratorStyle,
  InputMessageStyle,
} from './InputStyles'
import { InputLabelStyle } from './LabelStyles'
import { InputProps } from './types'

function Input(props: InputProps, ref?: ForwardedRef<HTMLInputElement>) {
  const {
    label,
    error,
    success,
    active = false,
    fullwidth = false,
    placeholder = ' ',
    leftDecorator,
    rightDecorator,
    className,
    style,
    variant = 'default',
    wrapperRef,
    children,
    ...rest
  } = props

  const { id, disabled = false } = props
  const wrapperProps = { className, style }

  const hasLabel = !!label && variant === 'default'
  const hasError = !!error
  const hasSuccess = !!success && !error
  const hasLeftDecorator = !!leftDecorator
  const hasRightDecorator = !!rightDecorator

  return (
    <InputWrapperStyle
      $error={hasError}
      $active={active}
      $disabled={disabled}
      $fullwidth={fullwidth}
      htmlFor={id}
      ref={wrapperRef}
      {...wrapperProps}
    >
      {hasLeftDecorator && (
        <InputLeftDecoratorStyle>{leftDecorator}</InputLeftDecoratorStyle>
      )}

      <InputContentStyle $variant={variant}>
        <InputStyle
          $labeled={hasLabel}
          placeholder={placeholder}
          aria-invalid={hasError}
          type='text'
          ref={ref}
          {...rest}
        />
        {hasLabel && <InputLabelStyle>{label}</InputLabelStyle>}
      </InputContentStyle>

      {hasError && (
        <InputMessageStyle $variant='error'>{error}</InputMessageStyle>
      )}
      {hasSuccess && (
        <InputMessageStyle $variant='success'>{success}</InputMessageStyle>
      )}

      {hasRightDecorator && (
        <InputRightDecoratorStyle>{rightDecorator}</InputRightDecoratorStyle>
      )}
    </InputWrapperStyle>
  )
}

export default forwardRef(Input)
