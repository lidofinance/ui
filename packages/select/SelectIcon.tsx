import React, { ForwardedRef, forwardRef } from 'react'
import { SelectIconProps } from './types'
import { SelectIconDecoratorStyle, SelectIconStyle } from './SelectIconStyles'

function SelectIcon(
  props: SelectIconProps,
  ref?: ForwardedRef<HTMLInputElement>,
) {
  const { icon, ...rest } = props

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
}

export default forwardRef(SelectIcon)
