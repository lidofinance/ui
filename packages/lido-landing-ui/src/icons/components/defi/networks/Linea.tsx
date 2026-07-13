// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Linea = function (props: SVGProps<SVGSVGElement>) {
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <g filter={`url(#${_id})`}>
        <path
          fill='#84DCFB'
          d='M57.285 54.87H25.004V22.307h7.387v26.256h24.894v6.307zm0-26.257c3.64 0 6.588-2.822 6.588-6.306S60.924 16 57.285 16c-3.64 0-6.589 2.823-6.589 6.307 0 3.484 2.949 6.306 6.589 6.306z'
        />
      </g>
      <path
        fill='#000'
        d='M52.916 58H20.634V25.437h7.387v26.256h24.895V58zm-.001-26.256c3.64 0 6.588-2.823 6.588-6.307 0-3.484-2.948-6.307-6.588-6.307s-6.588 2.823-6.588 6.307c0 3.484 2.948 6.307 6.588 6.307z'
      />
      <defs>
        <filter
          id={_id}
          width={58.869}
          height={58.87}
          x={15.004}
          y={6}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_22070'
            stdDeviation={5}
          />
        </filter>
      </defs>
    </svg>
  )
}
