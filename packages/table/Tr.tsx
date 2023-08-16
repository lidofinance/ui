import { ForwardedRef, forwardRef } from 'react'
import { TrProps } from './types'
import { TrStyle } from './styles'

function Tr(
  { highlight, ...rest }: TrProps,
  ref?: ForwardedRef<HTMLTableRowElement>,
) {
  return (
    <TrStyle
      $highlight={highlight}
      $interactive={!!rest.onClick}
      ref={ref}
      {...rest}
    />
  )
}

export default forwardRef(Tr)
