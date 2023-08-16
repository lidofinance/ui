import { ForwardedRef, forwardRef } from 'react'
import { ContainerStyle } from './ContainerStyles'
import { ContainerProps } from './types'

function Container(
  { size = 'full', ...rest }: ContainerProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return <ContainerStyle $size={size} ref={ref} {...rest} />
}

export default forwardRef(Container)
