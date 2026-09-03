import type { ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './MiniButton.module.css'

export type MiniButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const MiniButton = ({
  className,
  children,
  type = 'button',
  ...rest
}: MiniButtonProps) => (
  <button type={type} className={cn(styles.button, className)} {...rest}>
    <span className={styles.content}>{children}</span>
  </button>
)
