// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const OneInch = function (props: SVGProps<SVGSVGElement>) {
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <g clipPath={`url(#${_id})`}>
        <g opacity={0.2} filter={`url(#${_id2})`}>
          <path
            d='M29.863 60.958h24.314v-5.161h-8.971V25.042H39.89c-.211 4.303-1.449 5.386-7.327 5.386h-2.7v4.866h8.972v20.503h-8.972v5.16zm26.86-25.664V25.042h-5.161v10.252h5.16zm9.056 0V25.042h-5.161v10.252h5.16z'
            fill='#000'
          />
        </g>
        <path
          d='M27.863 57.958h24.314v-5.161h-8.971V22.042H37.89c-.211 4.303-1.449 5.386-7.327 5.386h-2.7v4.866h8.972v20.503h-8.972v5.16zm26.86-25.664V22.042h-5.161v10.252h5.16zm9.056 0V22.042h-5.161v10.252h5.16z'
          fill='#000'
        />
      </g>
      <defs>
        <clipPath id={_id}>
          <path fill='#fff' transform='translate(4 4)' d='M0 0h72v72H0z' />
        </clipPath>
        <filter
          id={_id2}
          x={15.863}
          y={11.042}
          width={63.916}
          height={63.916}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation={7}
            result='effect1_foregroundBlur_52_17175'
          />
        </filter>
      </defs>
    </svg>
  )
}
