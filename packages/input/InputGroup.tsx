import { ForwardedRef, forwardRef } from 'react'
import { InputMessageStyle } from './InputStyles'
import { InputGroupStyle, InputGroupContentStyle } from './InputGroupStyles'
import { InputGroupProps } from './types'

function InputGroup(
  { fullwidth = false, error, success, children, ...rest }: InputGroupProps,
  ref?: ForwardedRef<HTMLSpanElement>,
) {
  const hasError = !!error
  const hasSuccess = !!success && !error

  return (
    <InputGroupStyle $fullwidth={fullwidth} {...rest} ref={ref}>
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
