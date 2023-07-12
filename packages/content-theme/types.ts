import React from 'react'
import { LidoComponentProps } from '../utils'

export type ContentThemeProps = LidoComponentProps<
  'div',
  {
    darkContent: React.ReactElement
    lightContent: React.ReactElement
  }
>
