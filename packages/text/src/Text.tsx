import { ReactChild, ReactChildren } from 'react'
import { TextStyle } from './TextStyles'

enum Size {
  sm,
  md,
  lg,
  xl,
}

export type Sizes = keyof typeof Size

export type Props = {
  children?: ReactChild | ReactChildren
  size?: Sizes
}

export default function Text({ children, ...rest }: Props) {
  return <TextStyle {...rest}>{children}</TextStyle>
}

Text.defaultProps = {
  size: 'md',
}
