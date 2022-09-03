import React, { ForwardedRef, forwardRef } from 'react'
import { LoaderProps, LoaderSize } from './types'
import {
  LoaderStyle,
  LoaderCircleBgStyle,
  LoaderCircleFgStyle,
} from './LoaderStyles'

function Loader(props: LoaderProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { size = 'medium', thickness = 3, color = 'primary', ...rest } = props

  const pxSize = LoaderSize[size]
  const center = pxSize / 2
  const radius = pxSize / 2 - thickness / 2

  return (
    <LoaderStyle $size={pxSize} $color={color} {...rest} ref={ref}>
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
