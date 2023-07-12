import { LidoComponentProps } from '../utils'
import React from 'react'

export type SiblingsCount = 0 | 1

export type onItemClick = (index: number, e?: React.MouseEvent) => void

export type PaginationProps = LidoComponentProps<
  'div',
  {
    pagesCount: number
    activePage?: number
    onItemClick: onItemClick
    siblingCount?: SiblingsCount
  }
>

export enum PaginationItemVariant {
  default = 'default',
  active = 'active',
}

export type PaginationItemProps = LidoComponentProps<
  'button',
  {
    variant?: PaginationItemVariant
    icon: React.ReactNode
  }
>
