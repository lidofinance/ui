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
