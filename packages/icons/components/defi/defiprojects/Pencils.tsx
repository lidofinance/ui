// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Pencils = function (props: SVGProps<SVGSVGElement>) {
  const _id3 = useUniqueInlineId()
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={81} height={80} viewBox='0 0 81 80' fill='none' {...props}>
      <g clipPath={`url(#${_id})`}>
        <path
          fill='#CDF459'
          d='M33.735 22.176L23 33.138v24.715h24.204L57.939 46.89V22.176H33.735zm17.827 20.997c.015 2.455.015 3.835 0 6.29l-4.92 5.024L29.359 36.84c.015-2.454.015-3.834 0-6.29l4.92-5.023 17.283 17.647z'
        />
      </g>
      <g clipPath={`url(#${_id2})`} filter={`url(#${_id3})`}>
        <path
          fill='#CDF459'
          fillOpacity={0.6}
          d='M33.735 19.176L23 30.138v24.715h24.204L57.939 43.89V19.176H33.735zm17.827 20.997c.015 2.455.015 3.835 0 6.29l-4.92 5.024L29.359 33.84c.015-2.454.015-3.834 0-6.29l4.92-5.023 17.283 17.647z'
        />
      </g>
      <defs>
        <clipPath id={_id}>
          <path fill='#fff' d='M23 21.996h35v36H23z' />
        </clipPath>
        <clipPath id={_id2}>
          <path fill='#fff' d='M23 18.996h35v36H23z' />
        </clipPath>
        <filter
          id={_id3}
          width={57}
          height={58}
          x={12}
          y={7.996}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_24262'
            stdDeviation={5.5}
          />
        </filter>
      </defs>
    </svg>
  )
}
