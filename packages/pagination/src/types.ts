import { LidoComponentProps } from '@lidofinance/utils/dist/esm'

export type SiblingsCount = 0 | 1

export type PaginationProps = LidoComponentProps<
  'div',
  {
    pagesCount: number
    siblingCount?: SiblingsCount
    onItemClick?: () => void
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
