import React from 'react'
import { LidoComponentProps } from '@lidofinance/utils'

export type ContentThemeProps = LidoComponentProps<
  'div',
  {
    darkContent: React.ReactElement
    lightContent: React.ReactElement
  }
>
