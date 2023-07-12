import { LidoComponentProps } from '../utils'
import React from 'react'
export type { Theme } from '../theme'

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
