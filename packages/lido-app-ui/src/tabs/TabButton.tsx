import { forwardRef, type ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './TabButton.module.css'

export type TabButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean
}

export const TabButton = forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ active = false, className, children, type = 'button', ...rest }, ref) => (
    <button
      ref={ref}
      type={type}
      role='tab'
      aria-selected={active}
      className={cn(styles.tab, active && styles.active, className)}
      {...rest}
    >
      <span className={styles.content}>{children}</span>
    </button>
  ),
)

TabButton.displayName = 'TabButton'
