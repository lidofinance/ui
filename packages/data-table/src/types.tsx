import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export type DataTableProps = LidoComponentProps<'div'>

export type DataTableRowProps = LidoComponentProps<
  'div',
  {
    title: React.ReactNode
    help?: React.ReactNode
    loading?: boolean
    highlight?: boolean
  }
>
