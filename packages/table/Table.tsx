import { ForwardedRef, forwardRef } from 'react'
import { TableProps } from './types.js'
import { TableStyle } from './styles.js'

export const Table = forwardRef(
  (props: TableProps, ref?: ForwardedRef<HTMLTableElement>) => {
    return <TableStyle ref={ref} {...props} />
  },
)
Table.displayName = 'Table'
