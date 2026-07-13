import React from 'react'

export const UrgentIcon = React.forwardRef(function UrgentIcon(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      width='80'
      height='80'
      viewBox='0 0 80 80'
      fill='none'
      ref={svgRef}
      {...props}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_3376_2905)'>
        <g opacity='0.5' filter='url(#filter0_f_3376_2905)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M43.3953 9.71582C41.8296 7.20248 38.1708 7.20247 36.6051 9.71582L9.96087 52.4868C8.30108 55.1512 10.2169 58.6018 13.356 58.6018H66.6444C69.7835 58.6018 71.6993 55.1512 70.0395 52.4868L43.3953 9.71582ZM37.1207 21.341C37.0971 20.7728 37.5512 20.2993 38.1199 20.2993H41.8804C42.449 20.2993 42.9032 20.7728 42.8795 21.341L41.9886 42.7233C41.9663 43.2589 41.5255 43.6816 40.9894 43.6816H39.0108C38.4747 43.6816 38.034 43.2589 38.0117 42.7233L37.1207 21.341ZM37.0774 48.553C37.0774 46.9388 38.386 45.6302 40.0002 45.6302C41.6144 45.6302 42.923 46.9388 42.923 48.553C42.923 50.1672 41.6144 51.4757 40.0002 51.4757C38.386 51.4757 37.0774 50.1672 37.0774 48.553Z'
            fill='url(#paint0_radial_3376_2905)'
          />
        </g>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M43.3953 14.6729C41.8296 12.1595 38.1708 12.1595 36.6051 14.6728L9.96087 57.4438C8.30108 60.1082 10.2169 63.5588 13.356 63.5588H66.6444C69.7835 63.5588 71.6993 60.1082 70.0395 57.4438L43.3953 14.6729ZM37.1207 26.298C37.0971 25.7299 37.5512 25.2564 38.1199 25.2564H41.8804C42.449 25.2564 42.9032 25.7299 42.8795 26.298L41.9886 47.6803C41.9663 48.2159 41.5255 48.6387 40.9894 48.6387H39.0108C38.4747 48.6387 38.034 48.2159 38.0117 47.6803L37.1207 26.298ZM37.0774 53.51C37.0774 51.8957 38.386 50.5872 40.0002 50.5872C41.6144 50.5872 42.923 51.8957 42.923 53.51C42.923 55.1242 41.6144 56.4327 40.0002 56.4327C38.386 56.4327 37.0774 55.1242 37.0774 53.51Z'
          fill='url(#paint1_radial_3376_2905)'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_3376_2905'
          x='-2.65039'
          y='-4.16919'
          width='85.3008'
          height='74.771'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='6'
            result='effect1_foregroundBlur_3376_2905'
          />
        </filter>
        <radialGradient
          id='paint0_radial_3376_2905'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(40.0002 33.2163) rotate(86.9482) scale(41.3557 49.9342)'
        >
          <stop stopColor='white' />
          <stop offset='1' stopColor='white' stopOpacity='0.5' />
        </radialGradient>
        <radialGradient
          id='paint1_radial_3376_2905'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(40.0002 38.1733) rotate(86.9482) scale(41.3557 49.9342)'
        >
          <stop stopColor='white' />
          <stop offset='1' stopColor='white' stopOpacity='0.5' />
        </radialGradient>
        <clipPath id='clip0_3376_2905'>
          <rect width='80' height='80' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
})
