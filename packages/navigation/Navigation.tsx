import { ForwardedRef, forwardRef, RefObject } from 'react'
import cn from 'classnames'
import styles from './Navigation.module.css'
import { Button, ButtonProps } from '../button'

export type NavigationButtonVariant = 'left' | 'right' | 'down'
export type NavigaitonButtonColor = 'default' | 'transparent'

export type NavigationButtonProps = ButtonProps & {
  variant?: NavigationButtonVariant
  color?: NavigaitonButtonColor
}

export const NavigationButton = forwardRef(
  (
    {
      variant = 'left',
      className,
      href,
      color = 'default',
      ...rest
    }: NavigationButtonProps,
    ref?: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    return (
      <Button
        className={cn(
          styles.button,
          styles.navigationButton,
          styles[variant],
          className,
        )}
        ref={ref as RefObject<HTMLButtonElement>}
        shape='circle'
        withArrow
        color={color}
        {...(rest as object)}
      ></Button>
    )
  },
)
NavigationButton.displayName = 'NavigationButton'
