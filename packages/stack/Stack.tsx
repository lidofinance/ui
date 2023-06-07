import { ForwardedRef, forwardRef } from 'react'
import { StackProvider } from './StackProvider'
import { StackStyle, StackStyleProps } from './StackStyles'
import {
  StackAligns,
  StackDirections,
  StackJustifies,
  StackSpacings,
  StackWraps,
} from './constants'

export type StackProps = Omit<
  StackStyleProps,
  '$align' | '$justify' | '$direction' | '$wrap' | '$spacing'
> & {
  align?: StackAligns
  justify?: StackJustifies
  direction?: StackDirections
  wrap?: StackWraps
  spacing?: StackSpacings
}

function Stack(
  {
    align = 'flex-start',
    justify = 'flex-start',
    direction = 'row',
    wrap = 'wrap',
    spacing,
    children,
    ...rest
  }: StackProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return (
    <StackStyle
      {...rest}
      $align={align}
      $justify={justify}
      $direction={direction}
      $wrap={wrap}
      $spacing={spacing}
      ref={ref}
    >
      <StackProvider spacing={spacing}>{children}</StackProvider>
    </StackStyle>
  )
}

export default forwardRef(Stack)
