import { ForwardedRef, forwardRef } from 'react'
import { StackProvider } from './StackProvider'
import { StackStyle } from './StackStyles'
import { StackProps } from './types'

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
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <StackStyle
      $align={align}
      $justify={justify}
      $direction={direction}
      $wrap={wrap}
      $spacing={spacing}
      ref={ref}
      {...rest}
    >
      <StackProvider spacing={spacing}>{children}</StackProvider>
    </StackStyle>
  )
}

export default forwardRef(Stack)
