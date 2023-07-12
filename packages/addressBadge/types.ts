import { LidoComponentProps } from '../utils'

export type AddressBadgeProps = LidoComponentProps<
  'div',
  {
    address?: string
    symbolsMobile?: number
    symbolsDesktop?: number
  }
>
