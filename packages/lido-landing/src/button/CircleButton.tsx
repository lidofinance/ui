import { forwardRef, ForwardedRef, ReactElement } from 'react'
import { Button, ButtonProps } from './Button'

export type CircleButtonProps = ButtonProps & {
  shape?: never
}

export type CircleButtonColoredProps = ButtonProps & {
  icon: ReactElement
  shape?: never
}

export const CircleButton = forwardRef(
  (
    props: CircleButtonProps,
    ref?: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    return <Button {...(props as ButtonProps)} ref={ref} shape='circle' />
  },
)

export const CircleButtonWithColoredIcon = forwardRef(
  (
    { icon, ...props }: CircleButtonColoredProps,
    ref?: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    const coloredIcon = {
      icon,
      isColored: true,
    }

    return (
      <Button
        {...(props as ButtonProps)}
        ref={ref}
        shape='circle'
        icon={coloredIcon}
      />
    )
  },
)

CircleButton.displayName = 'CircleButton'
CircleButtonWithColoredIcon.displayName = 'CircleButtonWithColoredIcon'
