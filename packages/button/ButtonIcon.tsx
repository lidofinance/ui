import React, { ForwardedRef, forwardRef } from 'react'
import {
  ButtonWrapperStyle,
  ButtonIconStyle,
  ButtonContentStyle,
} from './ButtonIconStyles'
import { ButtonIconProps } from './types'
import Button from './Button'

function ButtonIcon(
  props: ButtonIconProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  const { icon, children, ...rest } = props
  const hasNoChildren = !children

  return (
    <Button square={hasNoChildren} {...rest} ref={ref}>
      <ButtonWrapperStyle>
        <ButtonIconStyle $square={hasNoChildren}>{icon}</ButtonIconStyle>
        <ButtonContentStyle>{children}</ButtonContentStyle>
      </ButtonWrapperStyle>
    </Button>
  )
}

export default forwardRef(ButtonIcon)
