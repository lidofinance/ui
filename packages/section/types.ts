import React from 'react'
import { LidoComponentProps } from '../utils'

export type SectionProps = LidoComponentProps<
  'div',
  {
    title?: React.ReactNode
    headerDecorator?: React.ReactNode
  }
>
