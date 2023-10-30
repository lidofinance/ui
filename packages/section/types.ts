import { ReactNode } from 'react'
import { LidoComponentProps } from '../utils/index.js'

export type SectionProps = LidoComponentProps<
  'div',
  {
    title?: ReactNode
    headerDecorator?: ReactNode
  }
>
