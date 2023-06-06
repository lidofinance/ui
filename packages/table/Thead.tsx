import { ForwardedRef, forwardRef } from 'react'
import { TheadStyle, TheadStyleProps } from './styles'

export type TheadProps = Omit<TheadStyleProps, '$sticky'> & {
  sticky?: boolean
}

function Thead(
  { sticky = false, ...rest }: TheadProps,
  ref?: ForwardedRef<HTMLTableSectionElement>
) {
  return <TheadStyle {...rest} ref={ref} $sticky={sticky} />
}

export default forwardRef(Thead)
