// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const MELLOWPOINTS = function (props: SVGProps<SVGSVGElement>) {
  const _id3 = useUniqueInlineId()
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <g clipPath={`url(#${_id})`}>
        <mask
          id={_id}
          width={80}
          height={80}
          x={0}
          y={0}
          maskUnits='userSpaceOnUse'
        >
          <path fill='#fff' d='M80 0H0v80h80V0z' />
        </mask>
        <g mask={`url(#${_id})`}>
          <path
            fill={`url(#${_id2})`}
            d='M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0 0 17.909 0 40s17.909 40 40 40z'
          />
          <path
            fill='#fff'
            fillRule='evenodd'
            d='M44 68c15.464 0 28-12.536 28-28S59.464 12 44 12 16 24.536 16 40s12.536 28 28 28zm0 4c17.673 0 32-14.327 32-32C76 22.327 61.673 8 44 8 26.327 8 12 22.327 12 40c0 17.673 14.327 32 32 32z'
            clipRule='evenodd'
          />
          <path
            fill='#fff'
            fillRule='evenodd'
            d='M52 52c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12s-12 5.373-12 12c0 6.628 5.372 12 12 12zm0 4c8.836 0 16-7.164 16-16 0-8.837-7.164-16-16-16s-16 7.163-16 16c0 8.836 7.164 16 16 16z'
            clipRule='evenodd'
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={_id2}
          x1={40}
          x2={40}
          y1={0}
          y2={80}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F50D3C' />
          <stop offset={1} stopColor='#D7002B' />
        </linearGradient>
        <clipPath id={_id3}>
          <path fill='#fff' d='M0 0h80v80H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
