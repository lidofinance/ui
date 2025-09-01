// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Tokemak = function (props: SVGProps<SVGSVGElement>) {
  const _id = useUniqueInlineId()
  return (
    <svg width={81} height={80} viewBox='0 0 81 80' fill='none' {...props}>
      <g filter={`url(#${_id})`}>
        <path
          fill='#C5FD50'
          fillRule='evenodd'
          d='M30.01 25v14h34v3h-13v13h-3V42h-34v-3h13V25h3z'
          clipRule='evenodd'
        />
      </g>
      <path
        fill='#000'
        fillRule='evenodd'
        d='M30.01 27v14h34v3h-13v13h-3V44h-34v-3h13V27h3z'
        clipRule='evenodd'
      />
      <defs>
        <filter
          id={_id}
          width={66}
          height={46}
          x={6.011}
          y={17}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_25290'
            stdDeviation={4}
          />
        </filter>
      </defs>
    </svg>
  )
}
