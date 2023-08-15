import { LidoComponentProps } from '@lidofinance/utils'
import { ReactNode } from 'react'

export type ServicePageProps = LidoComponentProps<
  'div',
  {
    title: ReactNode
  }
>
