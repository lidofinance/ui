import { ForwardedRef, forwardRef } from 'react'
import { ContainerStyle, ContainerStyleProps } from './ContainerStyles'

export enum ContainerSize {
  full,
  content,
  tight,
}
export type ContainerSizes = keyof typeof ContainerSize

export type ContainerProps = Omit<ContainerStyleProps, '$size'> & {
  size?: ContainerSizes
}

function Container(
  { size = 'full', ...rest }: ContainerProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return <ContainerStyle {...rest} $size={size} ref={ref} />
}

export default forwardRef(Container)
