import React from 'react'
import s from './info-icon.module.css'
import cn from 'classnames'

export type InfoIconProps = React.SVGProps<SVGSVGElement> & {
  size?: 'small' | 'big'
  color?: 'black' | 'ocean' | 'white'
}

export const InfoIcon = React.forwardRef(function InfoIcon(
  { className, color = 'black', size = 'big', ...rest }: InfoIconProps,
  svgRef?: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      className={cn(s.infoIcon, s[color], s[size], className)}
      ref={svgRef}
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 21.2a9.2 9.2 0 100-18.4 9.2 9.2 0 000 18.4zm0 1.8c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z'
        fill='currentColor'
      />
      <path
        d='M12.752 7.484c-.456 0-.774-.084-.954-.252a.863.863 0 01-.27-.63c0-.072.006-.156.018-.252.012-.096.03-.198.054-.306.06-.324.192-.576.396-.756.216-.192.552-.288 1.008-.288.456 0 .774.09.954.27.18.168.27.372.27.612 0 .072-.006.156-.018.252-.012.096-.03.198-.054.306-.06.324-.198.582-.414.774-.204.18-.534.27-.99.27zm-1.044 11.214c-.576 0-1.008-.15-1.296-.45-.288-.3-.432-.69-.432-1.17 0-.156.012-.312.036-.468.024-.156.054-.342.09-.558l1.026-5.292H8l.252-1.566h5.094l-1.512 7.794.36.144 3.114-2.862 1.098.99-1.404 1.404c-.372.372-.708.69-1.008.954-.3.252-.576.462-.828.63-.252.156-.498.27-.738.342a2.377 2.377 0 01-.72.108z'
        fill='currentColor'
      />
    </svg>
  )
})
