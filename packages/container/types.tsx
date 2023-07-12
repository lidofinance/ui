import { LidoComponentProps } from '../utils'
export type { Theme } from '../theme'

export enum ContainerSize {
  full,
  content,
  tight,
}
export type ContainerSizes = keyof typeof ContainerSize

export type ContainerProps = LidoComponentProps<
  'div',
  {
    size?: ContainerSizes
  }
>
