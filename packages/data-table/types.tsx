import { LidoComponentProps } from '@lidofinance/utils'
import { ReactNode } from 'react'
export type { Theme } from '@lidofinance/theme'

export type DataTableProps = LidoComponentProps<'div'>

export type DataTableRowProps = LidoComponentProps<
  'div',
  {
    title: ReactNode
    help?: ReactNode
    loading?: boolean
    highlight?: boolean
  }
>
