import { ForwardedRef, forwardRef } from 'react'
import { NewLidoComponentProps } from '../utils'
import cn from 'classnames'
import styles from './InlineLoader.module.css'

export enum InlineLoaderColor {
  text,
  secondary,
  foreground,
}
export type InlineLoaderColors = keyof typeof InlineLoaderColor

export type InlineLoaderProps = NewLidoComponentProps<
  'div',
  {
    color?: InlineLoaderColors
  }
>

export const InlineLoader = forwardRef(
  (
    { color = 'text', className, ...rest }: InlineLoaderProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const heightAdjuster = <>&nbsp;</>

    return (
      <span
        className={cn(styles.inlineLoader, className, {
          [styles.text]: color === 'text',
          [styles.foreground]: color === 'foreground',
          [styles.secondary]: color === 'secondary',
        })}
        {...rest}
        ref={ref}
      >
        {heightAdjuster}
      </span>
    )
  },
)
InlineLoader.displayName = 'InlineLoader'
