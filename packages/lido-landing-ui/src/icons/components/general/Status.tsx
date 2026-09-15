// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const Status = function (props: SVGProps<SVGSVGElement>) {
  const _id = useUniqueInlineId()
  return (
    <svg width={80} height={80} viewBox='0 0 80 80' fill='none' {...props}>
      <g clipPath={`url(#${_id})`}>
        <g fill='#29C38C' transform='translate(28 28)'>
          <circle opacity={0.1} cx={12} cy={12} r={12} />
          <circle cx={12} cy={12} r={5} />
        </g>
      </g>
      <defs>
        <clipPath id={_id}>
          <path d='M0 0h80v80H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
