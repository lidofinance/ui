// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Dune = function (props: SVGProps<SVGSVGElement>) {
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <g filter={`url(#${_id})`} opacity={0.5}>
        <path
          fill='#F1603F'
          d='M47 57c10.493 0 19-8.507 19-19s-8.507-19-19-19-19 8.507-19 19 8.507 19 19 19z'
        />
        <mask
          id={_id}
          width={38}
          height={38}
          x={28}
          y={19}
          maskUnits='userSpaceOnUse'
        >
          <path
            fill='#F1603F'
            d='M47 57c10.493 0 19-8.507 19-19s-8.507-19-19-19-19 8.507-19 19 8.507 19 19 19z'
          />
        </mask>
        <g mask={`url(#${_id})`}>
          <path
            fill='#2B286C'
            d='M78.271 33.25L29.583 49.083v11.084h48.688V33.25z'
          />
        </g>
      </g>
      <path
        fill='#F1603F'
        d='M40 61c11.598 0 21-9.402 21-21s-9.402-21-21-21-21 9.402-21 21 9.402 21 21 21z'
      />
      <path
        fill='#2B286C'
        d='M61 40c0 11.598-9.402 21-21 21-7.28 0-13.695-3.705-17.462-9.331l38.446-12.503c.01.277.016.555.016.834z'
      />
      <defs>
        <filter
          id={_id2}
          width={60}
          height={60}
          x={17}
          y={8}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_21239'
            stdDeviation={5.5}
          />
        </filter>
      </defs>
    </svg>
  )
}
