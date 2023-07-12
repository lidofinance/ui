import { LidoComponentProps } from '../utils'

export type AddressProps = LidoComponentProps<
  'div',
  {
    address: string
    symbols?: number
  }
>
