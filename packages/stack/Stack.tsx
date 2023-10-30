import { ForwardedRef, forwardRef } from 'react'
import { StackProvider } from './StackProvider.js'
import { StackStyle } from './StackStyles.js'
import { StackProps } from './types.js'

export const Stack = forwardRef(
  (
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
  ) => {
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
  },
)
Stack.displayName = 'Stack'
