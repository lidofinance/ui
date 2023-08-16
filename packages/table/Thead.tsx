import { ForwardedRef, forwardRef } from 'react'
import { TheadProps } from './types'
import { TheadStyle } from './styles'

function Thead(
  { sticky = false, ...rest }: TheadProps,
  ref?: ForwardedRef<HTMLTableSectionElement>,
) {
  return <TheadStyle ref={ref} $sticky={sticky} {...rest} />
}

export default forwardRef(Thead)
