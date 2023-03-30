import { LidoComponentProps } from '@lidofinance/utils'

export type AddressBadgeProps = LidoComponentProps<
  'div',
  {
    address?: string
    symbolsMobile?: number
    symbolsDesktop?: number
  }
>
