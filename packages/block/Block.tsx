import { ForwardedRef, forwardRef } from 'react'
import { BlockStyle } from './BlockStyles.js'
import { BlockProps } from './types.js'

export const Block = forwardRef(
  (
    {
      color = 'foreground',
      variant = 'flat',
      paddingLess = false,
      ...rest
    }: BlockProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <BlockStyle
        $color={color}
        $variant={variant}
        $paddingLess={paddingLess}
        ref={ref}
        {...rest}
      />
    )
  },
)
Block.displayName = 'Block'
