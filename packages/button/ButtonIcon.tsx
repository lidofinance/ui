import { ForwardedRef, forwardRef } from 'react'
import {
  ButtonWrapperStyle,
  ButtonIconStyle,
  ButtonContentStyle,
} from './ButtonIconStyles'
import { ButtonIconProps } from './types'
import { Button } from './Button'

export const ButtonIcon = forwardRef(
  (
    { icon, children, ...rest }: ButtonIconProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    const hasNoChildren = !children

    return (
      <Button square={hasNoChildren} {...rest} ref={ref}>
        <ButtonWrapperStyle>
          <ButtonIconStyle $square={hasNoChildren}>{icon}</ButtonIconStyle>
          <ButtonContentStyle>{children}</ButtonContentStyle>
        </ButtonWrapperStyle>
      </Button>
    )
  },
)
ButtonIcon.displayName = 'ButtonIcon'
