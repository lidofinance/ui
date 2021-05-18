import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum ContainerSize {
  full,
  content,
}
export type ContainerSizes = keyof typeof ContainerSize

export type ContainerProps = LidoComponentProps<
  'div',
  {
    size?: ContainerSizes
  }
>
