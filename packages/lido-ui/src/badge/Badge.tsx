import { forwardRef } from 'react'
import { BadgeProps } from './types.js'
import { BadgeWrapperStyle } from './BadgeStyles.js'

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, onClick, variant = 'gray', icon, ...rest }, ref) => {
    return (
      <BadgeWrapperStyle
        $interactive={!!onClick}
        $variant={variant}
        $hasIcon={!!icon}
        onClick={onClick}
        {...rest}
        ref={ref}
      >
        {icon}
        {children}
      </BadgeWrapperStyle>
    )
  },
)
Badge.displayName = 'Badge'
