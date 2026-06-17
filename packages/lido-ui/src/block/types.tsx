import { LidoComponentProps } from '../utils/index.js'
export type { Theme } from '../theme/index.js'

export enum BlockVariant {
  flat,
  shadow,
}
export type BlockVariants = keyof typeof BlockVariant

export enum BlockColor {
  foreground,
  background,
  accent,
}
export type BlockColors = keyof typeof BlockColor

export type BlockProps = LidoComponentProps<
  'div',
  {
    color?: BlockColors
    variant?: BlockVariants
    paddingLess?: boolean
  }
>
