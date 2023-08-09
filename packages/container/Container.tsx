import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'
import './Container.css'

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
        className={cn('container', className, {
          ['container-tight']: size === 'tight',
          ['container-full']: size === 'full',
          ['container-content']: size === 'content',
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
