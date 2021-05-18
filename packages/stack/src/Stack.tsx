import { Children, ForwardedRef, forwardRef } from 'react'
import { StackStyle, StackItemStyle } from './StackStyles'
import { StackProps } from './types'
import { isElement } from 'react-is'

function Stack(props: StackProps, ref?: ForwardedRef<HTMLDivElement>) {
  const {
    align = 'flex-start',
    justify = 'flex-start',
    direction = 'row',
    wrap = 'wrap',
    spacing,
    children,
    ...rest
  } = props

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
      {Children.map(children, (child) =>
        isElement(child) ? (
          <StackItemStyle $spacing={spacing}>{child}</StackItemStyle>
        ) : (
          child
        )
      )}
    </StackStyle>
  )
}

export default forwardRef(Stack)
