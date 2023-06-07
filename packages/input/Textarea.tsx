import { ForwardedRef, HTMLProps, forwardRef } from 'react'
import {
  InputWrapperStyle,
  InputContentStyle,
  TextareaStyle,
  InputMessageStyle,
  TextareaStyleProps,
} from './InputStyles'
import { TextareaLabelStyle } from './LabelStyles'
import { CommonProps } from './types'

export type TextareaProps = Omit<TextareaStyleProps, '$labeled' | '$color'> &
  CommonProps &
  Pick<HTMLProps<HTMLTextAreaElement>, 'rows' | 'cols' | 'wrap'>

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
          {...rest}
          $labeled={hasLabel}
          $color={color}
          placeholder={placeholder}
          aria-invalid={hasError}
          ref={ref}
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
