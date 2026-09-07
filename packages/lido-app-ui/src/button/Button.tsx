import type { ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Button.module.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) => (
  <button type={type} className={cn(styles.button, className)} {...rest}>
    <span className={styles.content}>{children}</span>
  </button>
)
