import { ForwardedRef, forwardRef } from 'react'
import { CheckboxProps } from './types'
import {
  CheckboxWrapperStyle,
  CheckboxInputStyle,
  CheckboxIconStyle,
} from './CheckboxStyles'

function Checkbox(
  props: CheckboxProps,
  inputRef?: ForwardedRef<HTMLInputElement>
) {
  const { className, style, wrapperRef, children, ...inputProps } = props
  const wrapperProps = { className, style }

  return (
    <CheckboxWrapperStyle {...wrapperProps} ref={wrapperRef}>
      <CheckboxInputStyle type='checkbox' {...inputProps} ref={inputRef} />
      <CheckboxIconStyle />
    </CheckboxWrapperStyle>
  )
}

export default forwardRef(Checkbox)
