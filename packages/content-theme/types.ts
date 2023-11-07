import { ReactElement } from 'react'
import { LidoComponentProps } from '../utils/index.js'

export type ContentThemeProps = LidoComponentProps<
  'div',
  {
    darkContent: ReactElement
    lightContent: ReactElement
  }
>
