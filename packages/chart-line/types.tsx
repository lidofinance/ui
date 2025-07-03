import { LidoComponentProps } from '../utils/index.js'
export type { Theme } from '../theme/index.js'

export enum ThresholdType {
  dash = 'dash',
  flag = 'flag',
}
export type ThresholdTypes = keyof typeof ThresholdType
export enum BorderType {
  rounded = 'rounded',
  square = 'square',
}
export type BorderTypes = keyof typeof BorderType

export type ChartLineConfig = {
  loading?: boolean
  data: LineData[]
  thresholdType: ThresholdType
  height: number
  border: BorderType
  maxValue?: number
  showLabels?: boolean
}

export type LineData = {
  color?: string
  labelPosition?: 'top' | 'bottom'
  threshold: {
    value: number
    color?: string
    label: string
    description: string
    descriptionElement?: React.ReactNode
  }
}

export type ChartLineProps = LidoComponentProps<'div', ChartLineConfig>

export type ChartLineLabelProps = LidoComponentProps<
  'div',
  {
    id: string
    previousIds?: string[]
    zIndex: number
    show?: boolean
    height: number
    thresholdType: ThresholdType
  } & LineData
>
