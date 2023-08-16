import { ForwardedRef, forwardRef } from 'react'
import { HeadingStyle, H1Style, H2Style, H3Style } from './HeadingStyles'
import { HeadingProps, HProps } from './types'

export const Heading = forwardRef(
  (
    { size = 'md', color = 'text', ...rest }: HeadingProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return <HeadingStyle $size={size} $color={color} ref={ref} {...rest} />
  },
)
Heading.displayName = 'Heading'

export const H1 = forwardRef(
  (
    { color = 'text', ...rest }: HProps<'h1'>,
    ref?: ForwardedRef<HTMLHeadingElement>,
  ) => {
    return <H1Style $color={color} ref={ref} {...rest} />
  },
)
H1.displayName = 'H1'

export const H2 = forwardRef(
  (
    { color = 'text', ...rest }: HProps<'h2'>,
    ref?: ForwardedRef<HTMLHeadingElement>,
  ) => {
    return <H2Style $color={color} ref={ref} {...rest} />
  },
)
H2.displayName = 'H2'

export const H3 = forwardRef(
  (
    { color = 'text', ...rest }: HProps<'h3'>,
    ref?: ForwardedRef<HTMLHeadingElement>,
  ) => {
    return <H3Style $color={color} ref={ref} {...rest} />
  },
)
H3.displayName = 'H3'
