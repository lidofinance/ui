import type { SVGProps } from 'react'

export const IconLoaderCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={10}
      stroke='currentColor'
      strokeOpacity={0.16}
      strokeWidth={2}
    />
    <path
      d='M12 2a10 10 0 0 1 10 10'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
)
