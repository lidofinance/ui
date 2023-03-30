import React from 'react'
import { LidoComponentProps } from '@lidofinance/utils'

export type SectionProps = LidoComponentProps<
  'div',
  {
    title?: React.ReactNode
    headerDecorator?: React.ReactNode
  }
>
