import { LidoComponentProps } from '@lidofinance/utils'

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
  default,
  active,
}

export type PaginationItemVariants = keyof typeof PaginationItemVariant

export type PaginationItemProps = LidoComponentProps<
  'button',
  {
    variant?: PaginationItemVariants
    icon: React.ReactNode
  }
>
