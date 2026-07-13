import { LidoComponentProps } from '../utils/index.js'
export type { Theme } from '../theme/index.js'

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
