import { ForwardedRef, forwardRef } from 'react'
import { TableProps } from './types'
import { TableStyle } from './styles'

export const Table = forwardRef(
  (props: TableProps, ref?: ForwardedRef<HTMLTableElement>) => {
    return <TableStyle ref={ref} {...props} />
  },
)
Table.displayName = 'Table'
