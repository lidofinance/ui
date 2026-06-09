// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const ZkSync = function (props: SVGProps<SVGSVGElement>) {
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <path
        fill='#000'
        fillRule='evenodd'
        d='M63.5 39.803L50.018 26.38v9.824l-13.38 9.843h13.38v7.176L63.5 39.803zM16 39.802l13.482 13.422V43.46l13.38-9.925h-13.38V26.36L16 39.802z'
        clipRule='evenodd'
      />
      <g filter={`url(#${_id})`}>
        <path
          fill='#000'
          fillOpacity={0.5}
          fillRule='evenodd'
          d='M66 37.371L52.518 23.95v9.823l-13.38 9.844h13.38v7.175L66 37.371zm-47.5-.001l13.482 13.422v-9.763l13.38-9.924h-13.38v-7.176L18.5 37.371z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <filter
          id={_id}
          width={75.5}
          height={54.863}
          x={4.5}
          y={9.929}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_25682'
            stdDeviation={7}
          />
        </filter>
      </defs>
    </svg>
  )
}
