import { ForwardedRef, forwardRef } from 'react'
import { ContainerStyle } from './ContainerStyles'
import { ContainerProps } from './types'

export const Container = forwardRef(
  (
    { size = 'full', ...rest }: ContainerProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return <ContainerStyle $size={size} ref={ref} {...rest} />
  },
)
Container.displayName = 'Container'
