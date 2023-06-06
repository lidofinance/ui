import { ForwardedRef, forwardRef } from 'react'
import { BlockStyle, BlockStyleProps } from './BlockStyles'
import { BlockColors, BlockVariants } from './constants'

export type BlockProps = Omit<
  BlockStyleProps,
  '$color' | '$variant' | '$paddingLess'
> & {
  color?: BlockColors
  variant?: BlockVariants
  paddingLess?: boolean
}

function Block(
  {
    color = 'foreground',
    variant = 'flat',
    paddingLess = false,
    ...rest
  }: BlockProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return (
    <BlockStyle
      {...rest}
      $color={color}
      $variant={variant}
      $paddingLess={paddingLess}
      ref={ref}
    />
  )
}

export default forwardRef(Block)
