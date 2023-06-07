import { ForwardedRef, RefObject, forwardRef } from 'react'
import { ChipWrapperStyle, ChipWrapperStyleProps } from './ChipStyles'

export enum ChipVariant {
  positive,
  negative,
  warning,
  gray,
}
export type ChipVariants = keyof typeof ChipVariant

export type ChipProps = Omit<
  ChipWrapperStyleProps,
  '$interactive' | '$variant'
> & {
  wrapperRef?: RefObject<HTMLLabelElement>
  variant?: ChipVariants
}

function Chip(
  { children, onClick, variant = 'positive', ...rest }: ChipProps,
  ref?: ForwardedRef<HTMLInputElement>
) {
  return (
    <ChipWrapperStyle
      {...rest}
      $interactive={!!onClick}
      $variant={variant}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </ChipWrapperStyle>
  )
}

export default forwardRef(Chip)
