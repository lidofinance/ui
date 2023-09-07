import { ForwardedRef, forwardRef } from 'react'
import { ServicePageStyle, ServicePageInsideStyle } from './ServicePageStyles'
import { H1 } from '@lidofinance/heading'
import { Text } from '@lidofinance/text'
import { ServicePageProps } from './types'

export const ServicePage = forwardRef(
  (
    { title, children, ...rest }: ServicePageProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <ServicePageStyle {...rest} ref={ref}>
        <ServicePageInsideStyle>
          <H1>{title}</H1>
          <Text color='secondary'>{children}</Text>
        </ServicePageInsideStyle>
      </ServicePageStyle>
    )
  },
)
ServicePage.displayName = 'ServicePage'
