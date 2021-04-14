import { ReactChild, ReactChildren } from 'react'
import { TextStyle } from './TextStyles'

enum Variant {
  caption = 'caption',
  body16 = 'body16',
  body18 = 'body18',
  body20 = 'body20',
}

export type Variants = keyof typeof Variant

export type Props = {
  children?: ReactChild | ReactChildren
  variant?: Variants
}

export default function Text({ children, ...rest }: Props) {
  return <TextStyle {...rest}>{children}</TextStyle>
}

Text.defaultProps = {
  variant: 'body16',
}
