import { ForwardedRef, forwardRef } from 'react'
import { LoaderColors, LoaderSize, LoaderSizes } from './constants'
import {
  LoaderStyle,
  LoaderCircleBgStyle,
  LoaderCircleFgStyle,
  LoaderStyleProps,
} from './LoaderStyles'

export type LoaderProps = Omit<LoaderStyleProps, '$color' | '$size'> & {
  size?: LoaderSizes
  color?: LoaderColors
  thickness?: number
}

function Loader(
  { size = 'medium', thickness = 3, color = 'primary', ...rest }: LoaderProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const pxSize = LoaderSize[size]
  const center = pxSize / 2
  const radius = pxSize / 2 - thickness / 2

  return (
    <LoaderStyle {...rest} $size={pxSize} $color={color} ref={ref}>
      <svg width={pxSize} height={pxSize} viewBox={`0 0 ${pxSize} ${pxSize}`}>
        <LoaderCircleBgStyle
          $thickness={thickness}
          cx={center}
          cy={center}
          r={radius}
        />
        <LoaderCircleFgStyle
          $thickness={thickness}
          cx={center}
          cy={center}
          r={radius}
        />
      </svg>
    </LoaderStyle>
  )
}

export default forwardRef(Loader)
