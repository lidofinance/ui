import { ForwardedRef, forwardRef } from 'react'
import { HeadingStyle, H1Style, H2Style, H3Style } from './HeadingStyles'
import { HeadingProps, HProps } from './types'

function Heading(props: HeadingProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { size = 'md', color = 'text', ...rest } = props
  return <HeadingStyle $size={size} $color={color} ref={ref} {...rest} />
}

export default forwardRef(Heading)

export const H1 = forwardRef(function (
  props: HProps<'h1'>,
  ref?: ForwardedRef<HTMLHeadingElement>
) {
  const { color = 'text', ...rest } = props
  return <H1Style $color={color} ref={ref} {...rest} />
})

export const H2 = forwardRef(function (
  props: HProps<'h2'>,
  ref?: ForwardedRef<HTMLHeadingElement>
) {
  const { color = 'text', ...rest } = props
  return <H2Style $color={color} ref={ref} {...rest} />
})

export const H3 = forwardRef(function (
  props: HProps<'h3'>,
  ref?: ForwardedRef<HTMLHeadingElement>
) {
  const { color = 'text', ...rest } = props
  return <H3Style $color={color} ref={ref} {...rest} />
})
