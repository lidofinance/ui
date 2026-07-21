import { CSSProperties } from 'react'
import { LidoComponentProps } from '../utils/index.js'
export type { Theme } from '../theme/index.js'

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
