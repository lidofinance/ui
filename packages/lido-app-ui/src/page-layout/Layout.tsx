import { forwardRef, type HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Layout.module.css'

export type LayoutProps = HTMLAttributes<HTMLDivElement>

/** Page root column: banners, SidebarLayout or Header/Main/Footer stack inside; fills the viewport. */
export const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={cn(styles.root, className)} {...rest} />
  ),
)

Layout.displayName = 'Layout'
