import { LidoComponentProps } from '@lidofinance/utils'
import { CSSProperties } from 'react'
export type { Theme } from '@lidofinance/theme'

export type IdenticonProps = LidoComponentProps<
  'div',
  {
    address: string
    diameter?: number
    paperStyles?: CSSProperties
    svgStyles?: CSSProperties
  }
>

export enum IdenticonBadgeColor {
  background,
  accent,
}
export type IdenticonBadgeColors = keyof typeof IdenticonBadgeColor

export type IdenticonBadgeProps = {
  symbols?: number
  color?: IdenticonBadgeColors
} & IdenticonProps
