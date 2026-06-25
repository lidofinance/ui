// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const MenuSnap = function (props: SVGProps<SVGSVGElement>) {
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <g filter={`url(#${_id})`} opacity={0.5}>
        <path
          fill='#FFC773'
          d='M21.197 44.342l14.647-.01-8.395 16.891c-.595 1.198.88 2.348 1.884 1.47l27.295-23.865c.749-.655.29-1.894-.703-1.896l-15.073-.017L49.6 19.694c.576-1.134-.824-2.236-1.778-1.401l-27.41 23.94c-.834.729-.32 2.11.785 2.108v.002z'
        />
      </g>
      <path
        fill='#FFC773'
        d='M22.23 43.84l15.044-.008-8.622 16.89c-.611 1.198.904 2.349 1.934 1.47l28.033-23.864c.769-.656.298-1.895-.722-1.897l-15.48-.016L51.4 19.192c.591-1.134-.846-2.236-1.826-1.4L21.425 41.73c-.858.73-.33 2.11.806 2.11z'
      />
      <defs>
        <filter
          id={_id}
          width={55.001}
          height={63.003}
          x={10.999}
          y={8.999}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_55_2111'
            stdDeviation={4.5}
          />
        </filter>
      </defs>
    </svg>
  )
}
