import type { SVGProps } from 'react'

export const TokenEth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='12' cy='12' r='12' fill='#5F7EDD' />
    <g transform='translate(7.088 4)'>
      <path
        opacity='0.6'
        fill='#FFFFFF'
        d='M4.91179 5.91602L0 8.14988L4.91179 11.0518L9.82166 8.14988L4.91179 5.91602Z'
      />
      <path
        opacity='0.45'
        fill='#FFFFFF'
        d='M2.54313e-05 8.14968L4.91182 11.0516V4.06901e-05L2.54313e-05 8.14968Z'
      />
      <path
        opacity='0.8'
        fill='#FFFFFF'
        d='M4.91016 6.10352e-05V11.0516L9.82002 8.1497L4.91016 6.10352e-05Z'
      />
      <path
        opacity='0.45'
        fill='#FFFFFF'
        d='M0 9.08008L4.9118 15.9998V11.982L0 9.08008Z'
      />
      <path
        opacity='0.8'
        fill='#FFFFFF'
        d='M4.91016 11.982V15.9998L9.82388 9.08008L4.91016 11.982Z'
      />
    </g>
  </svg>
)
