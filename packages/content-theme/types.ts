import { LidoComponentProps } from '@lidofinance/utils'
import { ReactElement } from 'react'

export type ContentThemeProps = LidoComponentProps<
  'div',
  {
    darkContent: ReactElement
    lightContent: ReactElement
  }
>
