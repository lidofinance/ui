import { forwardRef, type HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Divider.module.css'

export type DividerOrientation = 'horizontal' | 'vertical'

export type DividerDataTestId = { root?: string }

export type DividerProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  orientation?: DividerOrientation
  dataTestId?: DividerDataTestId
}

/** Visual-only 1px line in the default border color; stretches along the cross axis of a flex parent. Pass role='separator' for semantics. */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    { orientation = 'horizontal', className, role, dataTestId, ...rest },
    ref,
  ) => (
    <div
      ref={ref}
      role={role}
      aria-orientation={
        role === 'separator' && orientation === 'vertical'
          ? 'vertical'
          : undefined
      }
      className={cn(styles.root, styles[orientation], className)}
      data-testid={dataTestId?.root}
      {...rest}
    />
  ),
)

Divider.displayName = 'Divider'
