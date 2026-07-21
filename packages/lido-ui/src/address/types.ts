import { LidoComponentProps } from '../utils/index.js'

export type AddressProps = LidoComponentProps<
  'div',
  {
    address: string
    symbols?: number
  }
>
