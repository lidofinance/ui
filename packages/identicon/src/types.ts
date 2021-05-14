export type { Theme } from '@lidofinance/theme'

export type IdenticonProps = {
  address: string
  diameter?: number
  paperStyles?: React.CSSProperties
  svgStyles?: React.CSSProperties
} & Omit<JSX.IntrinsicElements['div'], 'ref' | 'children'>

export type IdenticonBadgeProps = {
  symbols?: number
} & IdenticonProps
