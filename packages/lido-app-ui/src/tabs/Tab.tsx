import { forwardRef, type ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Tab.module.css'

export type TabDataTestId = {
  root?: string
}

/** @deprecated Internal part of `Tabs`; use `Tabs`. */
export type TabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean
  dataTestId?: TabDataTestId
}

/** @deprecated Internal part of `Tabs`; use `Tabs`. */
export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  (
    {
      active = false,
      className,
      children,
      type = 'button',
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      role='tab'
      aria-selected={active}
      className={cn(styles.tab, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {children}
    </button>
  ),
)

Tab.displayName = 'Tab'
