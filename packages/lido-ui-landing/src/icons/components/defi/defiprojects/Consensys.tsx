// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Consensys = function (props: SVGProps<SVGSVGElement>) {
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={81} height={80} viewBox='0 0 81 80' fill='none' {...props}>
      <g clipPath={`url(#${_id})`}>
        <g filter={`url(#${_id2})`} opacity={0.6}>
          <path
            fill='#CEFD54'
            fillRule='evenodd'
            d='M68.022 27v6c0 12.15-10.073 22-22.5 22-12.427.002-22.5-9.85-22.5-22s10.073-22 22.5-22h6.136l-11.25 11v16.006H56.77L68.022 27zm0-16H51.658v16h16.364V11z'
            clipRule='evenodd'
          />
        </g>
        <path
          fill='#121212'
          fillRule='evenodd'
          d='M62.022 34v6c0 12.15-10.073 22-22.5 22-12.427.002-22.5-9.85-22.5-22s10.073-22 22.5-22h6.136l-11.25 11v16.006H50.77L62.022 34zm0-16H45.658v16h16.364V18z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id={_id}>
          <path fill='#fff' d='M.022 0h80v80h-80z' />
        </clipPath>
        <filter
          id={_id2}
          width={81}
          height={80}
          x={5.022}
          y={-7}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_21052'
            stdDeviation={9}
          />
        </filter>
      </defs>
    </svg>
  )
}
