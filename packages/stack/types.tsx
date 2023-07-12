import { LidoComponentProps } from '../utils'
export type { Theme } from '../theme'

export enum StackAlign {
  'center',
  'stretch',
  'flex-start',
  'flex-end',
  'baseline',
}
export type StackAligns = keyof typeof StackAlign

export enum StackJustify {
  'center',
  'start',
  'end',
  'stretch',
  'flex-start',
  'flex-end',
  'space-around',
  'space-between',
  'space-evenly',
}
export type StackJustifies = keyof typeof StackJustify

export enum StackDirection {
  'row',
  'row-reverse',
  'column',
  'column-reverse',
}
export type StackDirections = keyof typeof StackDirection

export enum StackWrap {
  'nowrap',
  'wrap',
  'wrap-reverse',
}
export type StackWraps = keyof typeof StackWrap

export enum StackSpacing {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}
export type StackSpacings = keyof typeof StackSpacing

export type StackProps = LidoComponentProps<
  'div',
  {
    align?: StackAligns
    justify?: StackJustifies
    direction?: StackDirections
    wrap?: StackWraps
    spacing?: StackSpacings
  }
>

export type StackItemProps = LidoComponentProps<
  'div',
  {
    grow?: number
    shrink?: number
    basis?: string
  }
>

export type HStackProps = {
  reverse?: boolean
} & Omit<StackProps, 'direction'>

export type VStackProps = {
  reverse?: boolean
} & Omit<StackProps, 'direction'>
