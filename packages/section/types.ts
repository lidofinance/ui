import { LidoComponentProps } from '../utils'
import { ReactNode } from 'react'

export type SectionProps = LidoComponentProps<
  'div',
  {
    title?: ReactNode
    headerDecorator?: ReactNode
  }
>
