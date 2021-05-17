import { ForwardedRef, forwardRef } from 'react'
import { TextStyle } from './TextStyles'
import { TextProps } from './types'

function Text(props: TextProps, ref?: ForwardedRef<HTMLParagraphElement>) {
  const { size = 'md', color = 'text', ...rest } = props
  return <TextStyle $size={size} $color={color} ref={ref} {...rest} />
}

export default forwardRef(Text)
