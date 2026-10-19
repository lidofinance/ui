import type { HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Skeleton.module.css'

export type SkeletonVariant = 'text' | 'block' | 'circle'

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  variant?: SkeletonVariant
  lines?: number
  fill?: boolean
}

export const Skeleton = ({
  variant = 'block',
  lines = 1,
  fill = false,
  className,
  style,
  ...rest
}: SkeletonProps) => {
  if (variant === 'text' && lines > 1) {
    return (
      <div
        className={cn(
          styles.pulse,
          styles.textStack,
          fill && styles.fill,
          className,
        )}
        style={style}
        aria-hidden='true'
        {...rest}
      >
        {Array.from({ length: lines }, (_, index) => (
          <div key={index} className={cn(styles.shape, styles.text)} />
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn(
        styles.pulse,
        styles.shape,
        styles[variant],
        fill && styles.fill,
        className,
      )}
      style={style}
      aria-hidden='true'
      {...rest}
    />
  )
}
