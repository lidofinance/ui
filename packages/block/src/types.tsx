import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum BlockVariant {
  flat,
  shadow,
}
export type BlockVariants = keyof typeof BlockVariant

export enum BlockColor {
  foreground,
  background,
}
export type BlockColors = keyof typeof BlockColor

export type BlockProps = LidoComponentProps<
  'div',
  {
    color?: BlockColors
    variant?: BlockVariants
  }
>
