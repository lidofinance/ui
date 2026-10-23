import { forwardRef, type HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './SidebarInset.module.css'

export type SidebarInsetProps = HTMLAttributes<HTMLDivElement>

/** Column next to the Sidebar for Header, Main and Footer. */
export const SidebarInset = forwardRef<HTMLDivElement, SidebarInsetProps>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={cn(styles.root, className)} {...rest} />
  ),
)

SidebarInset.displayName = 'SidebarInset'
