import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Block.module.css'

export enum BlockVariant {
  flat,
}
export type BlockVariants = keyof typeof BlockVariant

export enum BlockColor {
  foreground,
  background,
}
export type BlockColors = keyof typeof BlockColor

export type BlockProps = ComponentPropsWithoutRef<'div'> & {
  color?: BlockColors
  variant?: BlockVariants
}

export const Block = forwardRef(
  (
    { color = 'foreground', variant = 'flat', className, ...rest }: BlockProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        className={cn(styles.block, className, {
          [styles.foreground]: color === 'foreground',
          [styles.background]: color === 'background',
          [styles.flat]: variant === 'flat',
        })}
        {...rest}
        ref={ref}
      />
    )
  },
)
Block.displayName = 'Block'
