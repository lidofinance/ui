import { forwardRef, type HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './VisuallyHidden.module.css'

export type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>

/** Hides content visually but keeps it in the accessibility tree. */
export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, ...rest }, ref) => (
    <span ref={ref} className={cn(styles.root, className)} {...rest} />
  ),
)

VisuallyHidden.displayName = 'VisuallyHidden'
