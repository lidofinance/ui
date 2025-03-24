import { ForwardedRef, forwardRef, RefObject } from 'react'
import cn from 'classnames'
import styles from './Navigation.module.css'
import { Button, ButtonProps, ButtonDataTestId } from '../button'

export type NavigationButtonVariant = 'left' | 'right' | 'down'
export type NavigaitonButtonColor = 'default' | 'transparent'

export type NavigationButtonDataTestId = ButtonDataTestId

export type NavigationButtonProps = ButtonProps & {
  variant?: NavigationButtonVariant
  color?: NavigaitonButtonColor
  dataTestId?: NavigationButtonDataTestId
}

export const NavigationButton = forwardRef(
  (
    {
      variant = 'left',
      className,
      href,
      color = 'default',
      dataTestId,
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
        dataTestId={dataTestId}
        {...(rest as object)}
      ></Button>
    )
  },
)
NavigationButton.displayName = 'NavigationButton'
