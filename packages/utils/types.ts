import { ReactElement } from 'react'

export type LidoComponentProps<
  T extends keyof JSX.IntrinsicElements,
  Props extends object = object,
> = Props &
  Omit<
    JSX.IntrinsicElements[T] & {
      as?: keyof JSX.IntrinsicElements
      forwardedAs?: keyof JSX.IntrinsicElements
    },
    'ref' | keyof Props
  >

export type IconConfig = {
  icon: ReactElement
  isColored?: boolean
  width?: number | string
  height?: number | string
}

export type IconConfigProp = IconConfig | ReactElement
