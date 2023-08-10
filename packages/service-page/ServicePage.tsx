import React, { ForwardedRef, forwardRef } from 'react'
import { ServicePageStyle, ServicePageInsideStyle } from './ServicePageStyles'
import { H1 } from '@lidofinance/heading'
import { Text } from '@lidofinance/text'
import { ServicePageProps } from './types'

function ServicePage(
  props: ServicePageProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const { title, children, ...rest } = props
  return (
    <ServicePageStyle {...rest} ref={ref}>
      <ServicePageInsideStyle>
        <H1>{title}</H1>
        <Text color='secondary'>{children}</Text>
      </ServicePageInsideStyle>
    </ServicePageStyle>
  )
}

export default forwardRef(ServicePage)
