import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum DividerType {
  vertical,
  horizontal,
}
export type DividerTypes = keyof typeof DividerType

export enum DividerIndent {
  xs,
  sm,
  md,
  lg,
  xl,
}
export type DividerIndents = keyof typeof DividerIndent

export type DividerProps = LidoComponentProps<
  'div',
  {
    type?: DividerTypes
    indents?: DividerIndents
    children?: never
  }
>
