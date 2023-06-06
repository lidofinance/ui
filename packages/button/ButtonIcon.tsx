import { ForwardedRef, forwardRef } from 'react'
import {
  ButtonWrapperStyle,
  ButtonIconStyle,
  ButtonContentStyle,
} from './ButtonIconStyles'
import Button, { ButtonProps } from './Button'

export type ButtonIconProps = {
  icon: JSX.Element
} & ButtonProps

function ButtonIcon(
  { icon, children, ...rest }: ButtonIconProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
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
