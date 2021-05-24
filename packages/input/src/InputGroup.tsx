import { ForwardedRef, forwardRef } from 'react'
import { InputGroupStyle } from './InputGroupStyles'
import { InputGroupProps } from './types'

function InputGroup(
  props: InputGroupProps,
  ref?: ForwardedRef<HTMLSpanElement>
) {
  const { fullwidth = false, ...rest } = props

  return <InputGroupStyle $fullwidth={fullwidth} {...rest} ref={ref} />
}

export default forwardRef(InputGroup)
