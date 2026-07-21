import { ForwardedRef, forwardRef } from 'react'
import { TextStyle } from './TextStyles.js'
import { TextProps } from './types.js'

export const Text = forwardRef(
  (
    {
      size = 'md',
      weight = 400,
      color = 'default',
      strong,
      ...rest
    }: TextProps,
    ref?: ForwardedRef<HTMLParagraphElement>,
  ) => {
    return (
      <TextStyle
        size={size}
        weight={strong ? 700 : weight}
        color={color}
        ref={ref}
        {...rest}
      />
    )
  },
)
Text.displayName = 'Text'
