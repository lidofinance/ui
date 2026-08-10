import type { SVGProps } from 'react'

export const IconChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      transform='rotate(180 12 12) translate(5.6 8.4)'
      fill='currentColor'
      d='M12.6823 0.682331C12.8385 0.838541 12.8385 1.09181 12.6823 1.24802L6.96517 6.96517C6.65275 7.27759 6.14673 7.27759 5.83431 6.96517L0.117157 1.24802C-0.0390527 1.09181 -0.0390522 0.838541 0.117158 0.682331L0.682332 0.117157C0.838541 -0.0390525 1.09181 -0.0390524 1.24802 0.117157L6.39974 5.26888L11.5515 0.117157C11.7077 -0.0390523 11.9609 -0.0390524 12.1172 0.117157L12.6823 0.682331Z'
    />
  </svg>
)
