import { forwardRef, type ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Tab.module.css'

export type TabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ active = false, className, children, type = 'button', ...rest }, ref) => (
    <button
      ref={ref}
      type={type}
      role='tab'
      aria-selected={active}
      className={cn(styles.tab, active && styles.active, className)}
      {...rest}
    >
      {children}
    </button>
  ),
)

Tab.displayName = 'Tab'
