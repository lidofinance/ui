import React, { ForwardedRef, forwardRef } from 'react'
import { InputMessageStyle } from './InputStyles'
import { InputGroupStyle, InputGroupContentStyle } from './InputGroupStyles'
import { InputGroupProps } from './types'

function InputGroup(
  props: InputGroupProps,
  ref?: ForwardedRef<HTMLSpanElement>
) {
  const { fullwidth = false, error, success, children, ...rest } = props

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
