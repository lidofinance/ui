import { ForwardedRef, forwardRef } from 'react'
import { ServicePageStyle } from './ServicePageStyles'
import { Text } from '@lidofinance/text'
import { ServicePageProps } from './types'

function ServicePage(
  props: ServicePageProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { title, children } = props
  return (
    <ServicePageStyle ref={ref}>
      <h1>{title}</h1>
      <Text color='secondary'>{children}</Text>
    </ServicePageStyle>
  )
}

export default forwardRef(ServicePage)
