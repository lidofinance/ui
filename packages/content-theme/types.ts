import { LidoComponentProps } from '../utils'
import { ReactElement } from 'react'

export type ContentThemeProps = LidoComponentProps<
  'div',
  {
    darkContent: ReactElement
    lightContent: ReactElement
  }
>
