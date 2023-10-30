import { ForwardedRef, forwardRef } from 'react'
import {
  ServicePageStyle,
  ServicePageInsideStyle,
} from './ServicePageStyles.js'
import { H1 } from '../heading/index.js'
import { Text } from '../text/index.js'
import { ServicePageProps } from './types.js'

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
