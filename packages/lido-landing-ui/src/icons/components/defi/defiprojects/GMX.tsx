// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const GMX = function (props: SVGProps<SVGSVGElement>) {
  const _id4 = useUniqueInlineId()
  const _id3 = useUniqueInlineId()
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <g clipPath={`url(#${_id3})`}>
        <path
          fill={`url(#${_id})`}
          d='M65 57.998L40.038 21 15 57.998h34.884l-9.846-14.12-4.884 7.337h-5.19l10.078-14.752L54.61 58 65 57.998z'
        />
        <g filter={`url(#${_id4})`} opacity={0.7}>
          <path
            fill={`url(#${_id2})`}
            d='M68 52.998L43.038 16 18 52.998h34.884l-9.846-14.12-4.884 7.337h-5.19l10.078-14.752L57.61 53 68 52.998z'
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={_id}
          x1={41.8}
          x2={25.796}
          y1={21.962}
          y2={62.087}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#03D1CF' stopOpacity={0.988} />
          <stop offset={1} stopColor='#4E09F8' />
        </linearGradient>
        <linearGradient
          id={_id2}
          x1={44.8}
          x2={28.796}
          y1={16.962}
          y2={57.087}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#03D1CF' stopOpacity={0.988} />
          <stop offset={1} stopColor='#4E09F8' />
        </linearGradient>
        <clipPath id={_id3}>
          <path fill='#fff' d='M0 0h80v80H0z' />
        </clipPath>
        <filter
          id={_id4}
          width={82}
          height={69}
          x={2}
          y={0}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_21594'
            stdDeviation={8}
          />
        </filter>
      </defs>
    </svg>
  )
}
