import { ForwardedRef, forwardRef } from 'react'
import { DividerStyle, DividerStyleProps } from './DividerStyles'

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

export type DividerProps = Omit<DividerStyleProps, '$type' | '$indents'> & {
  type?: DividerTypes
  indents?: DividerIndents
  children?: never
}

function Divider(
  { type = 'horizontal', indents, children, ...rest }: DividerProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return <DividerStyle {...rest} $type={type} $indents={indents} ref={ref} />
}

export default forwardRef(Divider)
