import { ForwardedRef, forwardRef } from 'react'
import { ChipProps } from './types'
import {
  ChipWrapperStyle,
  ChipLeftDecoratorStyle,
  ChipRightDecoratorStyle,
} from './ChipStyles'

function Chip(props: ChipProps, ref?: ForwardedRef<HTMLInputElement>) {
  const {
    children,
    onClick,
    variant = 'positive',
    leftDecorator,
    rightDecorator,
    ...rest
  } = props

  const hasLeftDecorator = !!leftDecorator
  const hasRightDecorator = !!rightDecorator

  return (
    <ChipWrapperStyle
      $interactive={!!onClick}
      $variant={variant}
      onClick={onClick}
      {...rest}
      ref={ref}
    >
      {hasLeftDecorator && (
        <ChipLeftDecoratorStyle>{leftDecorator}</ChipLeftDecoratorStyle>
      )}
      {children}
      {hasRightDecorator && (
        <ChipRightDecoratorStyle>{rightDecorator}</ChipRightDecoratorStyle>
      )}
    </ChipWrapperStyle>
  )
}

export default forwardRef(Chip)
