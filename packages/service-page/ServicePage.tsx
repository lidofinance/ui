import { ForwardedRef, forwardRef } from 'react'
import { ServicePageStyle, ServicePageInsideStyle } from './ServicePageStyles'
import { H1 } from '@lidofinance/heading'
import { Text } from '@lidofinance/text'
import { ServicePageProps } from './types'

function ServicePage(
  { title, children, ...rest }: ServicePageProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
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
