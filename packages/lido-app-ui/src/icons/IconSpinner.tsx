import type { SVGProps } from 'react'

export const IconSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 64 64'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle
      cx={32}
      cy={32}
      r={28}
      stroke='var(--lido-app-ui-color-borders-focus)'
      strokeOpacity={0.12}
      strokeWidth={6}
    />
    <path
      d='M32 4a28 28 0 0 1 28 28'
      stroke='var(--lido-app-ui-color-borders-focus)'
      strokeWidth={6}
      strokeLinecap='round'
    />
  </svg>
)
