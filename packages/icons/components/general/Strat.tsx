// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Strat = function (props: SVGProps<SVGSVGElement>) {
  const _id6 = useUniqueInlineId()
  const _id5 = useUniqueInlineId()
  const _id4 = useUniqueInlineId()
  const _id3 = useUniqueInlineId()
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <g clipPath={`url(#${_id5})`}>
        <g filter={`url(#${_id6})`}>
          <circle
            cx={40}
            cy={35.25}
            r={26.25}
            fill={`url(#${_id})`}
            fillOpacity={0.6}
          />
        </g>
        <circle cx={40} cy={40.75} r={26.25} fill={`url(#${_id2})`} />
        <circle
          cx={40}
          cy={41}
          r={21}
          fill={`url(#${_id3})`}
          fillOpacity={0.5}
        />
        <circle
          cx={40}
          cy={41}
          r={11}
          fill={`url(#${_id4})`}
          fillOpacity={0.7}
        />
      </g>
      <defs>
        <radialGradient
          id={_id}
          cx={0}
          cy={0}
          r={1}
          gradientTransform='rotate(91.835 2.97 39.455) scale(23.8812 22.6266)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF7D94' />
          <stop offset={1} stopColor='#FF7D94' stopOpacity={0.2} />
        </radialGradient>
        <radialGradient
          id={_id2}
          cx={0}
          cy={0}
          r={1}
          gradientTransform='rotate(91.835 .307 42.205) scale(23.8812 22.6266)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF7D94' />
          <stop offset={1} stopColor='#FF7D94' stopOpacity={0.2} />
        </radialGradient>
        <radialGradient
          id={_id3}
          cx={0}
          cy={0}
          r={1}
          gradientTransform='rotate(88.457 .24 41.182) scale(22.2797)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF7D94' stopOpacity={0} />
          <stop offset={1} stopColor='#FF7D94' />
        </radialGradient>
        <radialGradient
          id={_id4}
          cx={0}
          cy={0}
          r={1}
          gradientTransform='rotate(88.457 -.38 41.117) scale(11.6703)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF7D94' stopOpacity={0} />
          <stop offset={1} stopColor='#FF7D94' />
        </radialGradient>
        <clipPath id={_id5}>
          <path fill='#fff' d='M0 0h80v80H0z' />
        </clipPath>
        <filter
          id={_id6}
          width={80.5}
          height={80.5}
          x={-0.25}
          y={-5}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            result='effect1_foregroundBlur_55_2123'
            stdDeviation={7}
          />
        </filter>
      </defs>
    </svg>
  )
}
