import { ForwardedRef, forwardRef } from 'react'
import { TableStyle, TableStyleProps } from './styles'

export type TableProps = TableStyleProps

function Table(props: TableProps, ref?: ForwardedRef<HTMLTableElement>) {
  return <TableStyle ref={ref} {...props} />
}

export default forwardRef(Table)
