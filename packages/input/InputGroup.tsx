import { ForwardedRef, ReactNode, forwardRef } from 'react'
import { InputMessageStyle } from './InputStyles'
import {
  InputGroupStyle,
  InputGroupContentStyle,
  InputGroupStyleProps,
} from './InputGroupStyles'

export type InputGroupProps = Omit<InputGroupStyleProps, '$fullwidth'> & {
  fullwidth?: boolean
  error?: ReactNode
  success?: ReactNode
}

function InputGroup(
  { fullwidth = false, error, success, children, ...rest }: InputGroupProps,
  ref?: ForwardedRef<HTMLSpanElement>
) {
  const hasError = !!error
  const hasSuccess = !!success && !error

  return (
    <InputGroupStyle {...rest} $fullwidth={fullwidth} ref={ref}>
      <InputGroupContentStyle>{children}</InputGroupContentStyle>
      {hasError && (
        <InputMessageStyle $variant='error'>{error}</InputMessageStyle>
      )}
      {hasSuccess && (
        <InputMessageStyle $variant='success'>{success}</InputMessageStyle>
      )}
    </InputGroupStyle>
  )
}

export default forwardRef(InputGroup)
