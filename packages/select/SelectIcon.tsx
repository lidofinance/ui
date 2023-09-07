import { ForwardedRef, forwardRef } from 'react'
import { SelectIconProps } from './types'
import { SelectIconDecoratorStyle, SelectIconStyle } from './SelectIconStyles'

export const SelectIcon = forwardRef(
  (
    { icon, ...rest }: SelectIconProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <SelectIconStyle
        {...rest}
        fullwidth={false}
        arrow='small'
        leftDecorator={
          <SelectIconDecoratorStyle>{icon}</SelectIconDecoratorStyle>
        }
        ref={ref}
      />
    )
  },
)
SelectIcon.displayName = 'SelectIcon'
