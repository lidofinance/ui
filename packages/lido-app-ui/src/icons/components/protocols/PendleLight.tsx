// THIS FILE IS AUTO GENERATED

import React, { SVGProps } from 'react'

import { useUniqueInlineId } from '@inline-svg-unique-id/react'
export const PendleLight = function (props: SVGProps<SVGSVGElement>) {
  const _id2 = useUniqueInlineId()
  const _id = useUniqueInlineId()
  return (
    <svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
      <path
        d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z'
        fill='#fff'
      />
      <mask
        id={_id}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <path
          d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z'
          fill='#fff'
        />
      </mask>
      <g mask={`url(#${_id})`}>
        <path
          d='M6.602 29.999a6.602 6.602 0 100-13.203 6.602 6.602 0 000 13.203z'
          fill='#082B53'
        />
        <mask
          id={_id2}
          maskUnits='userSpaceOnUse'
          x={5}
          y={0}
          width={3}
          height={19}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.874 18.373V.68h1.472v17.693H5.874z'
            fill='#fff'
          />
        </mask>
        <g mask={`url(#${_id2})`}>
          <path
            d='M24 12c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12S5.371 0 12 0c6.627 0 12 5.373 12 12z'
            fill='#082B53'
          />
        </g>
      </g>
    </svg>
  )
}
