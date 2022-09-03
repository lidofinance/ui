import React, { ForwardedRef, forwardRef } from 'react'
import { StackProvider } from './StackProvider'
import { StackStyle } from './StackStyles'
import { StackProps } from './types'

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
      {/* @ts-expect-error fix later */}
      <StackProvider spacing={spacing}>{children}</StackProvider>
    </StackStyle>
  )
}

export default forwardRef(Stack)
