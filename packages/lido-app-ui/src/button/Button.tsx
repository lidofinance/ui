import type { ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Button.module.css'

export type ButtonVariant = 'white' | 'black' | 'blackOutline' | 'whiteOutline'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant
}

export const Button = ({
  variant,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) => (
  <button
    type={type}
    className={cn(styles.button, styles[variant], className)}
    {...rest}
  >
    <span className={styles.content}>{children}</span>
  </button>
)
