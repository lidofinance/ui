import React, { ForwardedRef, forwardRef } from 'react'
import { TextStyle } from './TextStyles'
import { TextProps } from './types'

function Text(props: TextProps, ref?: ForwardedRef<HTMLParagraphElement>) {
  const {
    size = 'md',
    weight = 400,
    color = 'default',
    strong,
    ...rest
  } = props
  return (
    <TextStyle
      size={size}
      weight={strong ? 700 : weight}
      color={color}
      ref={ref}
      {...rest}
    />
  )
}

export default forwardRef(Text)
