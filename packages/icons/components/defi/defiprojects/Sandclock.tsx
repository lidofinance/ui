// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Sandclock = function (props: SVGProps<SVGSVGElement>) {
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={81} height={80} viewBox='0 0 81 80' fill='none' {...props}>
      <g clipPath={`url(#${_id})`}>
        <path
          fill='#01FF97'
          d='M46.524 49.726L61.12 35.461v-3.728h-3.817L42.706 46.001V27.634l-2.696-2.638-2.7 2.638v18.364L22.712 31.73h-3.817v3.728l14.6 14.265H14.703c-1.053 1.03-1.646 1.606-2.7 2.638l2.7 2.635H35.37l4.633-4.528 4.634 4.528h20.667l2.7-2.635-2.7-2.638-18.78.003z'
        />
        <g filter={`url(#${_id2})`} opacity={0.6}>
          <path
            fill='#01FF97'
            d='M49.524 47.726L64.12 33.461v-3.728h-3.817L45.706 44.001V25.634l-2.696-2.638-2.7 2.638v18.364L25.712 29.73h-3.817v3.728l14.6 14.265H17.703c-1.053 1.03-1.646 1.606-2.7 2.638l2.7 2.635H38.37l4.633-4.528 4.634 4.528h20.667l2.7-2.635-2.7-2.638-18.78.003z'
          />
        </g>
      </g>
      <defs>
        <clipPath id={_id}>
          <path fill='#fff' d='M.018 0h80v80h-80z' />
        </clipPath>
        <filter
          id={_id2}
          width={84}
          height={58}
          x={1.003}
          y={8.996}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_25139'
            stdDeviation={7}
          />
        </filter>
      </defs>
    </svg>
  )
}
