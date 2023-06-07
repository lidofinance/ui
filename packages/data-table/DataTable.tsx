import { ForwardedRef, ReactNode, forwardRef } from 'react'
import { InlineLoader } from '@lidofinance/loaders'
import { Tooltip } from '@lidofinance/tooltip'
import {
  DataTableStyle,
  DataTableRowStyle,
  DataTableTitleStyle,
  DataTableValueStyle,
  DataTableQuestionStyle,
  DataTableStyleProps,
  DataTableRowStyleProps,
} from './DataTableStyles'

export type DataTableProps = DataTableStyleProps

function DataTable(props: DataTableProps, ref?: ForwardedRef<HTMLDivElement>) {
  return <DataTableStyle ref={ref} {...props} />
}

export default forwardRef(DataTable)

export type DataTableRowProps = DataTableRowStyleProps & {
  title: ReactNode
  help?: ReactNode
  loading?: boolean
  highlight?: boolean
}

export const DataTableRow = forwardRef(function DataTableRow(
  {
    title,
    loading = false,
    highlight = false,
    help,
    children,
    ...rest
  }: DataTableRowProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
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
