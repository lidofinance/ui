import React, { ForwardedRef, forwardRef } from 'react'
import { InlineLoader } from '@lidofinance/loaders'
import { Tooltip } from '@lidofinance/tooltip'
import {
  DataTableStyle,
  DataTableRowStyle,
  DataTableTitleStyle,
  DataTableValueStyle,
  DataTableQuestionStyle,
} from './DataTableStyles'
import { DataTableProps, DataTableRowProps } from './types'

function DataTable(props: DataTableProps, ref?: ForwardedRef<HTMLDivElement>) {
  return <DataTableStyle ref={ref} {...props} />
}

export default forwardRef(DataTable)

export const DataTableRow = forwardRef(function DataTableRow(
  props: DataTableRowProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const {
    title,
    loading = false,
    highlight = false,
    help,
    children,
    ...rest
  } = props
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
})
