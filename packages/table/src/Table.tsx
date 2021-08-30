import { ForwardedRef, forwardRef } from 'react'
import { TableProps } from './types'

import { TableStyle } from './styles'

function Table(props: TableProps, ref?: ForwardedRef<HTMLTableElement>) {
  return <TableStyle ref={ref} {...props} />
}

export default forwardRef(Table)
