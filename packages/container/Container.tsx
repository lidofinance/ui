import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import styles from './Container.module.css'
import cn from 'classnames'

export enum ContainerSize {
  full,
  content,
  tight,
}
export type ContainerSizes = keyof typeof ContainerSize

export type ContainerProps = ComponentPropsWithoutRef<'div'> & {
  size?: ContainerSizes
}

export const Container = forwardRef(
  (
    { size = 'full', className, children, ...rest }: ContainerProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        className={cn(styles.container, className, {
          [styles.tight]: size === 'tight',
          [styles.full]: size === 'full',
          [styles.content]: size === 'content',
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    )
  },
)
Container.displayName = 'Container'
