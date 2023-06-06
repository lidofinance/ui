import { ForwardedRef, forwardRef } from 'react'
import { HeadingStyle, H1Style, H2Style, H3Style, H1StyleProps, H2StyleProps, H3StyleProps } from './HeadingStyles'
import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'
import { HeadingColors, HeadingSizes } from './constants'

export type HeadingProps = InferStyledComponentPropsWithoutRef<
  typeof HeadingStyle
> & {
  color?: HeadingColors
  size?: HeadingSizes
}
function Heading(
  { size = 'md', color = 'text', ...rest }: HeadingProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return <HeadingStyle {...rest} $size={size} $color={color} ref={ref} />
}
export default forwardRef(Heading)

export type HProps<T extends 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> =
  T extends 'h1'
    ? H1Props
    : T extends 'h2'
    ? H2Props
    : T extends 'h3'
    ? H3Props
    : never

export type H1Props = Omit<H1StyleProps, '$color'> & {
  color?: HeadingColors
}
export const H1 = forwardRef(function H1(
  { color = 'text', ...rest }: H1Props,
  ref?: ForwardedRef<HTMLHeadingElement>
) {
  return <H1Style {...rest} $color={color} ref={ref} />
})

export type H2Props = Omit<H2StyleProps,  '$color'> & {
  color?: HeadingColors
}
export const H2 = forwardRef(function H2(
  { color = 'text', ...rest }: H2Props,
  ref?: ForwardedRef<HTMLHeadingElement>
) {
  return <H2Style {...rest} $color={color} ref={ref} />
})

export type H3Props = Omit<H3StyleProps, '$color'> & {
  color?: HeadingColors
}
export const H3 = forwardRef(function H3(
  { color = 'text', ...rest }: H3Props,
  ref?: ForwardedRef<HTMLHeadingElement>
) {
  return <H3Style {...rest} $color={color} ref={ref} />
})
