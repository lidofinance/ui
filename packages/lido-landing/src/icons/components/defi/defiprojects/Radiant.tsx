// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Radiant = function (props: SVGProps<SVGSVGElement>) {
  const _id3 = useUniqueInlineId()
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <path
        fill={`url(#${_id})`}
        d='M47.682 43.182L67 40l-19.318-3.182 11.41-15.91-15.91 11.41L40 13l-3.182 19.318-15.91-11.41 11.41 15.91L13 40l19.318 3.182-11.41 15.91 15.91-11.41L40 67l3.182-19.318 15.91 11.41-11.41-15.91z'
      />
      <g filter={`url(#${_id3})`} opacity={0.7}>
        <path
          fill={`url(#${_id2})`}
          d='M52.682 41.182L72 38l-19.318-3.182 11.41-15.91-15.91 11.41L45 11l-3.182 19.318-15.91-11.41 11.41 15.91L18 38l19.318 3.182-11.41 15.91 15.91-11.41L45 65l3.182-19.318 15.91 11.41-11.41-15.91z'
        />
      </g>
      <defs>
        <linearGradient
          id={_id}
          x1={40}
          x2={40}
          y1={13.436}
          y2={66.605}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0.103} stopColor='#0FA' />
          <stop offset={0.999} stopColor='#5F00FA' />
        </linearGradient>
        <linearGradient
          id={_id2}
          x1={45}
          x2={45}
          y1={11.436}
          y2={64.605}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0.103} stopColor='#0FA' />
          <stop offset={0.999} stopColor='#5F00FA' />
        </linearGradient>
        <filter
          id={_id3}
          width={70}
          height={70}
          x={10}
          y={3}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_24766'
            stdDeviation={4}
          />
        </filter>
      </defs>
    </svg>
  )
}
