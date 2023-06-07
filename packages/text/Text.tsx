import { ForwardedRef, forwardRef } from 'react'
import { TextStyle, TextStyleProps } from './TextStyles'
import { PartialBy } from '@lidofinance/utils'

export type TextProps = PartialBy<TextStyleProps, 'size' | 'color'>

function Text(
  { size = 'md', color = 'default', ...rest }: TextProps,
  ref?: ForwardedRef<HTMLParagraphElement>
) {
  return <TextStyle size={size} color={color} ref={ref} {...rest} />
}

export default forwardRef(Text)
