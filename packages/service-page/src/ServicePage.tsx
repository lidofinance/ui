import { ForwardedRef, forwardRef } from 'react'
import { ServicePageStyle, H1Style } from './ServicePageStyles'
import { Text } from '@lidofinance/text'
import { ServicePageProps } from './types'

function ServicePage(
  props: ServicePageProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { title, children } = props
  return (
    <ServicePageStyle ref={ref}>
      <H1Style>{title}</H1Style>
      <Text color='secondary'>{children}</Text>
    </ServicePageStyle>
  )
}

export default forwardRef(ServicePage)
