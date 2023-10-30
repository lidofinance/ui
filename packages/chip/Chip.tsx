import { ForwardedRef, forwardRef } from 'react'
import { ChipProps } from './types.js'
import { ChipWrapperStyle } from './ChipStyles.js'

export const Chip = forwardRef(
  (
    { children, onClick, variant = 'positive', ...rest }: ChipProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <ChipWrapperStyle
        $interactive={!!onClick}
        $variant={variant}
        onClick={onClick}
        {...rest}
        ref={ref}
      >
        {children}
      </ChipWrapperStyle>
    )
  },
)
Chip.displayName = 'Chip'
