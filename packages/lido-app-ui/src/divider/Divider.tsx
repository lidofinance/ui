import { forwardRef, type HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Divider.module.css'

export type DividerOrientation = 'horizontal' | 'vertical'

export type DividerProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  orientation?: DividerOrientation
}

/** Visual-only 1px line in the default border color; stretches along the cross axis of a flex parent. Pass role='separator' for semantics. */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = 'horizontal', className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(styles.root, styles[orientation], className)}
      {...rest}
    />
  ),
)

Divider.displayName = 'Divider'
