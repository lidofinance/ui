import { LidoComponentProps } from '@lidofinance/utils'

export type AddressProps = LidoComponentProps<
  'div',
  {
    address: string
    symbols?: number
  }
>
