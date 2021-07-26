import { ForwardedRef, forwardRef } from 'react'
import { ServicePageStyle } from './ServicePageStyles'
import { H1 } from '@lidofinance/heading'
import { Text } from '@lidofinance/text'
import { ServicePageProps } from './types'

function ServicePage(
  props: ServicePageProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { title, children, ...rest } = props
  return (
    <ServicePageStyle {...rest} ref={ref}>
      <H1>{title}</H1>
      <Text color='secondary'>{children}</Text>
    </ServicePageStyle>
  )
}

export default forwardRef(ServicePage)
