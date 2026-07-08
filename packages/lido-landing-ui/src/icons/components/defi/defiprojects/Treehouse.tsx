// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Treehouse = function (props: SVGProps<SVGSVGElement>) {
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={81} height={80} viewBox='0 0 81 80' fill='none' {...props}>
      <g clipPath={`url(#${_id})`}>
        <g filter={`url(#${_id2})`} opacity={0.5}>
          <path
            fill='#00DDC2'
            d='M45.494 48.856l-7.644 5.562 7.644 5.578 7.648-5.578-7.648-5.562zm-9.858-16.512l9.858-7.188 9.858 7.188L63 26.754 45.494 13.996 28 26.754l7.636 5.59zM63 43.48L45.494 30.722 28 43.48l7.644 5.578 9.858-7.184 9.858 7.184L63 43.48z'
          />
        </g>
        <path
          fill='#00DDC2'
          d='M39.494 51.856l-7.644 5.562 7.644 5.578 7.648-5.578-7.648-5.562zm-9.858-16.512l9.858-7.188 9.858 7.188L57 29.754 39.494 16.996 22 29.754l7.636 5.59zM57 46.48L39.494 33.722 22 46.48l7.644 5.578 9.858-7.184 9.858 7.184L57 46.48z'
        />
      </g>
      <defs>
        <clipPath id={_id}>
          <path fill='#fff' d='M.03 0h80v80h-80z' />
        </clipPath>
        <filter
          id={_id2}
          width={63}
          height={74}
          x={14}
          y={-0.004}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_25284'
            stdDeviation={7}
          />
        </filter>
      </defs>
    </svg>
  )
}
