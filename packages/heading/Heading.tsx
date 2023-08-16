import { ForwardedRef, forwardRef } from 'react'
import { HeadingStyle, H1Style, H2Style, H3Style } from './HeadingStyles'
import { HeadingProps, HProps } from './types'

function Heading(
  { size = 'md', color = 'text', ...rest }: HeadingProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return <HeadingStyle $size={size} $color={color} ref={ref} {...rest} />
}

export default forwardRef(Heading)

export const H1 = forwardRef(function H1(
  { color = 'text', ...rest }: HProps<'h1'>,
  ref?: ForwardedRef<HTMLHeadingElement>,
) {
  return <H1Style $color={color} ref={ref} {...rest} />
})

export const H2 = forwardRef(function H2(
  { color = 'text', ...rest }: HProps<'h2'>,
  ref?: ForwardedRef<HTMLHeadingElement>,
) {
  return <H2Style $color={color} ref={ref} {...rest} />
})

export const H3 = forwardRef(function H3(
  { color = 'text', ...rest }: HProps<'h3'>,
  ref?: ForwardedRef<HTMLHeadingElement>,
) {
  return <H3Style $color={color} ref={ref} {...rest} />
})
