// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Gauntlet = function (props: SVGProps<SVGSVGElement>) {
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <g clipPath={`url(#${_id})`}>
        <g filter={`url(#${_id2})`} opacity={0.5}>
          <path
            fill='#7180F5'
            fillRule='evenodd'
            d='M36.47 44h7.97v-8h-7.97v-8h15.942v24H28.498v-8h-7.971V12h31.885v8H28.498v24h7.971z'
            clipRule='evenodd'
          />
          <path fill='#FF8099' d='M60.383 20h-7.971v8h7.971v-8z' />
          <path fill='#1E1C2D' d='M28.498 52h-7.971v8h7.971v-8z' />
        </g>
        <path
          fill='#7180F5'
          fillRule='evenodd'
          d='M37.943 50h7.971v-8h-7.971v-8h15.942v24H29.971v-8H22V18h31.885v8H29.971v24h7.972z'
          clipRule='evenodd'
        />
        <path fill='#FF8099' d='M61.856 26h-7.971v8h7.971v-8z' />
        <path fill='#1E1C2D' d='M29.971 58H22v8h7.971v-8z' />
      </g>
      <defs>
        <clipPath id={_id}>
          <path fill='#fff' d='M0 0h80v80H0z' />
        </clipPath>
        <filter
          id={_id2}
          width={67.856}
          height={76}
          x={6.527}
          y={-2}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_21595'
            stdDeviation={7}
          />
        </filter>
      </defs>
    </svg>
  )
}
