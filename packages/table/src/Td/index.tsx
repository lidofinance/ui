import { ForwardedRef, forwardRef } from 'react'
import { TdProps } from '../types'

import { TdStyle } from './styles'

function Td(props: TdProps, ref?: ForwardedRef<HTMLTableDataCellElement>) {
  const { align = 'left', textColor = 'secondary', ...rest } = props

  return <TdStyle $align={align} $textColor={textColor} ref={ref} {...rest} />
}

export default forwardRef(Td)
