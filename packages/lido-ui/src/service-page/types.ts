import { ReactNode } from 'react'
import { LidoComponentProps } from '../utils/index.js'

export type ServicePageProps = LidoComponentProps<
  'div',
  {
    title: ReactNode
  }
>
