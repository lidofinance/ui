import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export type IdenticonProps = LidoComponentProps<
  'div',
  {
    address: string
    diameter?: number
    paperStyles?: React.CSSProperties
    svgStyles?: React.CSSProperties
  }
>

export type IdenticonBadgeProps = {
  symbols?: number
} & IdenticonProps
