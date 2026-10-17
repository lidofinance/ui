import { forwardRef, type HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Divider.module.css'

export type DividerOrientation = 'horizontal' | 'vertical'

export type DividerProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  orientation?: DividerOrientation
  /** Purely visual line: hidden from assistive tech instead of exposed as a separator. */
  decorative?: boolean
}

/** 1px line in the default border color; stretches along the cross axis of a flex parent. */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    { orientation = 'horizontal', decorative = false, className, ...rest },
    ref,
  ) => (
    <div
      ref={ref}
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation}
      className={cn(styles.root, styles[orientation], className)}
      {...rest}
    />
  ),
)

Divider.displayName = 'Divider'
