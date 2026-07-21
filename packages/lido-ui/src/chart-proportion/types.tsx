import { LidoComponentProps } from '../utils/index.js'
export type { Theme } from '../theme/index.js'

export enum ChartProportionBorderType {
  rounded = 'rounded',
  square = 'square',
}
export type ChartProportionBorderTypes = keyof typeof ChartProportionBorderType

export enum ChartProportionBorderSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}
export type ChartProportionBorderSizes = keyof typeof ChartProportionBorderSize

export enum MarginSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}
export type MarginSizes = keyof typeof MarginSize

export type ChartProportionConfig = {
  height: number
  border: ChartProportionBorderType
  borderSize: ChartProportionBorderSize
  margin: MarginSize
  showLabels?: boolean
  loading?: boolean
  data: ChartProportionData[]
}

export type ChartProportionData = {
  show?: boolean
  color?: string
  value: number
  progress: number
  label?: string
}

export type ChartProportionProps = LidoComponentProps<
  'div',
  ChartProportionConfig
>
