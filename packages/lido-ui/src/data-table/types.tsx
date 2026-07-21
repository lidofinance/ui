import { ReactNode } from 'react'
import { LidoComponentProps } from '../utils/index.js'
export type { Theme } from '../theme/index.js'

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
