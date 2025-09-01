// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const LDO = function (props: SVGProps<SVGSVGElement>) {
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={81} height={80} viewBox='0 0 81 80' fill='none' {...props}>
      <g clipPath={`url(#${_id})`}>
        <rect width={80} height={80} x={0.429} fill='#FFAA7D' rx={40} />
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M40.467 15.917l11.398 17.194-11.399 6.401L29.07 33.11l11.398-17.193zm-7.909 16.38l7.909-11.93 7.909 11.93-7.91 4.442-7.908-4.442z'
          clipRule='evenodd'
        />
        <path
          fill='#fff'
          d='M40.45 43.291l-13.222-7.426-.361.544c-4.072 6.143-3.163 14.188 2.187 19.342 6.295 6.065 16.5 6.065 22.796 0 5.35-5.154 6.259-13.199 2.186-19.342l-.36-.545-13.226 7.427z'
        />
        <g filter={`url(#${_id2})`} opacity={0.2} fill='#fff'>
          <path
            fillRule='evenodd'
            d='M45.26 14l11.398 17.193-11.399 6.402-11.397-6.402L45.26 14zm-7.91 16.38l7.909-11.93 7.909 11.93-7.91 4.442-7.908-4.442z'
            clipRule='evenodd'
          />
          <path d='M45.243 41.374L32.02 33.947l-.361.545c-4.072 6.143-3.163 14.188 2.186 19.342 6.296 6.065 16.502 6.065 22.797 0 5.35-5.154 6.259-13.2 2.186-19.342l-.36-.545-13.226 7.427z' />
        </g>
      </g>
      <defs>
        <clipPath id={_id}>
          <rect width={80} height={80} x={0.429} fill='#fff' rx={40} />
        </clipPath>
        <filter
          id={_id2}
          width={60.239}
          height={72.383}
          x={15.125}
          y={0}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_25939'
            stdDeviation={7}
          />
        </filter>
      </defs>
    </svg>
  )
}
