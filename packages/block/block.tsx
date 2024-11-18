import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'
import styles from './block.module.css'

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

export type BlockProps = ComponentPropsWithoutRef<'div'> & {
  color?: BlockColors
  variant?: BlockVariants
  paddingLess?: boolean
}

export const Block = forwardRef(
  (
    {
      color = 'foreground',
      variant = 'flat',
      paddingLess = false,
      className,
      ...rest
    }: BlockProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        className={cn(styles.block, className, {
          [styles.foreground]: color === 'foreground',
          [styles.background]: color === 'background',
          [styles.accent]: color === 'accent',
          [styles.flat]: variant === 'flat',
          [styles.shadow]: variant === 'shadow',
          [styles.padding]: !paddingLess,
        })}
        {...rest}
        ref={ref}
      />
    )
  },
)
Block.displayName = 'Block'