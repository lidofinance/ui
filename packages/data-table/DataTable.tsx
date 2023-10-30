import { ForwardedRef, forwardRef } from 'react'
import { InlineLoader } from '../loaders/index.js'
import { Tooltip } from '../tooltip/index.js'
import {
  DataTableStyle,
  DataTableRowStyle,
  DataTableTitleStyle,
  DataTableValueStyle,
  DataTableQuestionStyle,
} from './DataTableStyles.js'
import { DataTableProps, DataTableRowProps } from './types.js'

export const DataTableRow = forwardRef(
  (
    {
      title,
      loading = false,
      highlight = false,
      help,
      children,
      ...rest
    }: DataTableRowProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const hasHelper = !!help

    return (
      <DataTableRowStyle ref={ref} {...rest}>
        <DataTableTitleStyle>
          {title}
          {hasHelper && (
            <Tooltip placement='bottomLeft' title={help}>
              <DataTableQuestionStyle />
            </Tooltip>
          )}
        </DataTableTitleStyle>
        <DataTableValueStyle $highlight={highlight}>
          {loading ? <InlineLoader color='text' /> : children}
        </DataTableValueStyle>
      </DataTableRowStyle>
    )
  },
)
DataTableRow.displayName = 'DataTableRow'

export const DataTable = forwardRef(
  (props: DataTableProps, ref?: ForwardedRef<HTMLDivElement>) => {
    return <DataTableStyle ref={ref} {...props} />
  },
)
DataTable.displayName = 'DataTable'
