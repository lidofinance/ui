import { ReactChild, ReactChildren } from 'react'
import { HeadingStyle, Variants } from './HeadingStyles'

enum Size {
  sm,
  md,
  lg,
}

export type Sizes = keyof typeof Size

export type Props = {
  children?: ReactChild | ReactChildren
  size?: Sizes
  variant?: Variants
}

export default function Heading({ children, ...rest }: Props) {
  return <HeadingStyle {...rest}>{children}</HeadingStyle>
}

Heading.defaultProps = {
  size: 'md',
  variant: 'text'
}
