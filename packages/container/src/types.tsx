export type { Theme } from '@lidofinance/theme'

export enum ContainerSize {
  full,
  content,
}
export type ContainerSizes = keyof typeof ContainerSize

export type ContainerProps = {
  size?: ContainerSizes
} & Omit<JSX.IntrinsicElements['div'], 'ref'>
