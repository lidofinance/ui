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
export enum LegendDirection {
  horizontal,
  vertical,
}
export type LegendDirections = keyof typeof LegendDirection
export enum LegendPosition {
  top,
  bottom,
  left,
  right,
}
export type LegendPositions = keyof typeof LegendPosition

export type ChartLineConfig = {
  thresholdType: ThresholdType
  height: number
  border: BorderType
  maxValue?: number
  showLabels?: boolean
  legend: {
    show: boolean
    direction: LegendDirection
    position: LegendPosition
  }
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

export type ChartLineProps = LidoComponentProps<
  'div',
  {
    loading?: boolean
    data: LineData[]
    // data: LineData[]
    // config: LineConfig
  } & ChartLineConfig
>

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
