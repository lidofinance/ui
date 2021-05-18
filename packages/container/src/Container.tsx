import { ForwardedRef, forwardRef } from 'react'
import { ContainerStyle } from './ContainerStyles'
import { ContainerProps } from './types'

function Container(props: ContainerProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { size = 'full', ...rest } = props

  return <ContainerStyle $size={size} ref={ref} {...rest} />
}

export default forwardRef(Container)
