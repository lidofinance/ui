// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Anchorage = function (props: SVGProps<SVGSVGElement>) {
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <g transform='scale(2)'>
        <g clipPath={`url(#${_id})`}>
          <g opacity={0.5} filter={`url(#${_id2})`} fill='#4982FE'>
            <path d='M25 28.598l-5.47 3.577-5.469-3.577 5.468-3.576L25 28.598zm-7.788-5.088l-5.469 3.575-5.47-3.575 5.47-3.576 5.469 3.576zm15.574 0l-5.47 3.575-5.468-3.575 5.468-3.576 5.47 3.576zM25 13.326l-5.47 3.577-5.469-3.577L19.53 9.75 25 13.326z' />
          </g>
          <path
            d='M25.5 27.598l-5.47 3.577-5.469-3.577 5.468-3.576 5.47 3.576zm-7.788-5.088l-5.469 3.575-5.47-3.575 5.47-3.576 5.469 3.576zm15.574 0l-5.47 3.575-5.468-3.575 5.468-3.576 5.47 3.576zM25.5 12.326l-5.47 3.577-5.469-3.577L20.03 8.75l5.47 3.576z'
            fill='#000'
          />
        </g>
        <defs>
          <clipPath id={_id}>
            <path fill='#fff' d='M0 0h40v40H0z' />
          </clipPath>
          <filter
            id={_id2}
            x={-3.508}
            y={-0.032}
            width={46.077}
            height={41.989}
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
              stdDeviation={4.891}
              result='effect1_foregroundBlur_4855_10205'
            />
          </filter>
        </defs>
      </g>
    </svg>
  )
}
