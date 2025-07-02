import { LidoComponentProps } from '../utils/index.js'
export type { Theme } from '../theme/index.js'

export enum BorderType {
  rounded = 'rounded',
  square = 'square',
}
export type BorderTypes = keyof typeof BorderType

export enum BorderSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}
export type BorderSizes = keyof typeof BorderSize

export enum MarginSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}
export type MarginSizes = keyof typeof MarginSize

export type ChartProportionConfig = {
  height: number
  border: BorderType
  borderSize: BorderSize
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
