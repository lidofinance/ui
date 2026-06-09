// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Docs = function (props: SVGProps<SVGSVGElement>) {
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <path
        fill={`url(#${_id})`}
        fillRule='evenodd'
        d='M59.116 18H20.86v3.924h38.257V18zM44.268 35.56L36.368 64l-1.522-.423 7.9-28.44 1.522.422zm-10.174 7.205l-3.352-3.352L20.376 49.78l10.366 10.366 3.352-3.352-7.014-7.014 7.014-7.015zm10.852.164l3.43-3.405 10.61 10.53-10.61 10.53-3.43-3.405 7.18-7.125-7.18-7.125zM20.859 24.867h38.257v3.924H20.86v-3.924zm17.657 6.866H20.86v3.924h17.657v-3.924z'
        clipRule='evenodd'
      />
      <g filter={`url(#${_id2})`} opacity={0.66} fill='#06E1FF'>
        <path
          fillRule='evenodd'
          d='M39.494 66.104l8.053-28.993-1.552-.431-8.053 28.993 1.552.43zM33.759 41.04l3.416 3.417-7.15 7.15 7.15 7.15-3.416 3.418L23.19 51.607 33.76 41.04zm18.719 0l-3.417 3.417 7.15 7.15-7.15 7.15 3.417 3.418 10.567-10.568L52.478 41.04z'
          clipRule='evenodd'
        />
        <path d='M23.191 17h34.887v3.578H23.191zm0 7.156h34.887v3.578H23.191zm0 6.262h16.996v3.578H23.191z' />
      </g>
      <defs>
        <linearGradient
          id={_id}
          x1={61.5}
          x2={39.746}
          y1={9}
          y2={64}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0085FF' />
          <stop offset={1} stopColor='#46E9FF' />
        </linearGradient>
        <filter
          id={_id2}
          width={65.853}
          height={75.104}
          x={10.191}
          y={4}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_55_2130'
            stdDeviation={6.5}
          />
        </filter>
      </defs>
    </svg>
  )
}
