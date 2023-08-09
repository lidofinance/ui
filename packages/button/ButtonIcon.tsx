import { ForwardedRef, forwardRef } from 'react'
import { Button, ButtonProps } from './Button'
import styles from './ButtonIcon.module.css'
import cn from 'classnames'

export type ButtonIconProps = ButtonProps & {
  icon: JSX.Element
}

export const ButtonIcon = forwardRef(
  (
    { icon, children, ...rest }: ButtonIconProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    const hasNoChildren = !children

    return (
      <Button square={hasNoChildren} {...rest} ref={ref}>
        <span className={styles.wrapper}>
          <span className={cn(styles.icon, { [styles.square]: hasNoChildren })}>
            {icon}
          </span>
          <span className={styles.content}>{children}</span>
        </span>
      </Button>
    )
  },
)
ButtonIcon.displayName = 'ButtonIcon'
