// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Ribbon = function (props: SVGProps<SVGSVGElement>) {
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <g filter={`url(#${_id})`} opacity={0.3}>
        <path
          fill='#FC0A54'
          fillRule='evenodd'
          d='M45.5 14C57.374 14 67 23.626 67 35.5S57.374 57 45.5 57c-8.086 0-15.129-4.464-18.8-11.061.166.288.31.526.31.526l18.436-19.35 8.762 9.084-10.804 11.663 1.935 1.828 12.577-13.491-12.47-12.9L25.834 44.2A21.425 21.425 0 0124 35.5C24 23.626 33.626 14 45.5 14z'
          clipRule='evenodd'
        />
      </g>
      <path
        fill='#FC0A54'
        fillRule='evenodd'
        d='M40.5 19C52.374 19 62 28.626 62 40.5S52.374 62 40.5 62c-8.086 0-15.129-4.464-18.8-11.061.166.288.31.526.31.526l18.436-19.35 8.762 9.084-10.804 11.663 1.935 1.828 12.577-13.491-12.47-12.9L20.834 49.2A21.425 21.425 0 0119 40.5C19 28.626 28.626 19 40.5 19z'
        clipRule='evenodd'
      />
      <defs>
        <filter
          id={_id}
          width={67}
          height={67}
          x={12}
          y={2}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_52_24762'
            stdDeviation={6}
          />
        </filter>
      </defs>
    </svg>
  )
}
