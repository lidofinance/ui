import { ForwardedRef, forwardRef } from 'react'
import { TrProps } from './types'

import { TrStyle } from './styles'

function Tr(props: TrProps, ref?: ForwardedRef<HTMLTableRowElement>) {
  const { highlight, ...rest } = props

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
