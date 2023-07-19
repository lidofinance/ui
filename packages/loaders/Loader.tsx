import { ForwardedRef, forwardRef } from 'react'
import { NewLidoComponentProps } from '../utils'
import cn from 'classnames'
import styles from './Loader.module.css'

export enum LoaderSize {
  small = 18,
  medium = 24,
  large = 64,
}
export type LoaderSizes = keyof typeof LoaderSize

export enum LoaderColor {
  primary,
  secondary,
  foreground,
  success,
}
export type LoaderColors = keyof typeof LoaderColor

export type LoaderProps = NewLidoComponentProps<
  'div',
  {
    size?: LoaderSizes
    color?: LoaderColors
    thickness?: number
  }
>

export const Loader = forwardRef(
  (
    {
      size = 'medium',
      thickness = 3,
      color = 'primary',
      className,
      style,
      ...rest
    }: LoaderProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const pxSize = LoaderSize[size]
    const center = pxSize / 2
    const radius = pxSize / 2 - thickness / 2

    const circumference = 2 * radius * Math.PI
    const filledPart = 0.25
    const strokeDasharray = `${circumference * filledPart} ${
      circumference * (1 - filledPart)
    }`

    return (
      <div
        className={cn(styles.loader, className, {
          [styles.primary]: color === 'primary',
          [styles.secondary]: color === 'secondary',
          [styles.foreground]: color === 'foreground',
          [styles.success]: color === 'success',
        })}
        style={{ width: `${pxSize}px`, height: `${pxSize}px`, ...style }}
        {...rest}
        ref={ref}
      >
        <svg width={pxSize} height={pxSize} viewBox={`0 0 ${pxSize} ${pxSize}`}>
          <circle
            className={styles.circleBg}
            strokeWidth={thickness}
            cx={center}
            cy={center}
            r={radius}
          />
          <circle
            className={styles.circleFg}
            strokeWidth={thickness}
            strokeDasharray={strokeDasharray}
            cx={center}
            cy={center}
            r={radius}
          />
        </svg>
      </div>
    )
  },
)
Loader.displayName = 'Loader'
