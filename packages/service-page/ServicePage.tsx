import { ForwardedRef, ReactNode, forwardRef } from 'react'
import {
  ServicePageStyle,
  ServicePageInsideStyle,
  ServicePageStyleProps,
} from './ServicePageStyles'
import { H1 } from '@lidofinance/heading'
import { Text } from '@lidofinance/text'

export type ServicePageProps = ServicePageStyleProps & {
  title: ReactNode
}

function ServicePage(
  { title, children, ...rest }: ServicePageProps,
  ref?: ForwardedRef<HTMLDivElement>
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
