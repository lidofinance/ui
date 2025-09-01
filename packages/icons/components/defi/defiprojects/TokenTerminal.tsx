// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const TokenTerminal = function (props: SVGProps<SVGSVGElement>) {
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <g clipPath={`url(#${_id})`}>
        <g filter={`url(#${_id2})`} opacity={0.5}>
          <path
            fill='#81CEBB'
            fillOpacity={0.976}
            d='M33.267 53.425V60h-10.08c-3.734 0-6.72-2.922-6.72-6.575V35.708H9v-6.393h7.467V20h7.653v9.315h9.333v6.393H24.12v17.717h9.147z'
          />
          <path fill='#00CF9D' d='M39.427 60v-6.575H65V60H39.427z' />
        </g>
        <path
          fill='#1B1B1B'
          d='M36.667 51.986v5.871h-9c-3.334 0-6-2.609-6-5.87v-15.82H15V30.46h6.667v-8.317H28.5v8.317h8.333v5.708H28.5v15.819h8.167z'
        />
        <path fill='#00CF9D' d='M42.166 57.857v-5.87H65v5.87H42.166z' />
      </g>
      <defs>
        <clipPath id={_id}>
          <path fill='#fff' d='M0 0h80v80H0z' />
        </clipPath>
        <filter
          id={_id2}
          width={92}
          height={76}
          x={-9}
          y={2}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_25294'
            stdDeviation={9}
          />
        </filter>
      </defs>
    </svg>
  )
}
