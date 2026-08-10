import type { ButtonHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import styles from './SmallButton.module.css'

export type SmallButtonVariant = 'back' | 'white'

export type SmallButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: SmallButtonVariant
  icon?: ReactNode
}

export const SmallButton = ({
  variant,
  icon,
  className,
  children,
  type = 'button',
  ...rest
}: SmallButtonProps) => (
  <button
    type={type}
    className={cn(styles.button, styles[variant], className)}
    {...rest}
  >
    <span className={styles.content}>
      {icon ? (
        <span className={styles.icon} aria-hidden='true'>
          {icon}
        </span>
      ) : null}
      {children}
    </span>
  </button>
)
