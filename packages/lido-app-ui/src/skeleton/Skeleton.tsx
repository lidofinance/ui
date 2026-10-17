import type { HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Skeleton.module.css'

export type SkeletonVariant = 'text' | 'block' | 'circle'

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  variant?: SkeletonVariant
  width?: number | string
  height?: number | string
  lines?: number
}

export const Skeleton = ({
  variant = 'block',
  width,
  height,
  lines = 1,
  className,
  style,
  ...rest
}: SkeletonProps) => {
  if (variant === 'text' && lines > 1) {
    return (
      <div
        className={cn(styles.pulse, styles.textStack, className)}
        style={{ width, ...style }}
        aria-hidden='true'
        {...rest}
      >
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={index}
            className={cn(styles.shape, styles.text)}
            style={{ height }}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn(styles.pulse, styles.shape, styles[variant], className)}
      style={{
        width: width ?? (variant === 'circle' ? height : undefined),
        height,
        ...style,
      }}
      aria-hidden='true'
      {...rest}
    />
  )
}
