import { LidoComponentProps } from '../utils/index.js'
export type { Theme } from '../theme/index.js'

export enum ChartLineThresholdType {
  dash = 'dash',
  flag = 'flag',
}
export type ChartLineThresholdTypes = keyof typeof ChartLineThresholdType
export enum ChartLineBorderType {
  rounded = 'rounded',
  square = 'square',
}
export type ChartLineBorderTypes = keyof typeof ChartLineBorderType

export type ChartLineConfig = {
  loading?: boolean
  data: LineData[]
  thresholdType: ChartLineThresholdType
  height: number
  border: ChartLineBorderType
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
    thresholdType: ChartLineThresholdType
  } & LineData
>
