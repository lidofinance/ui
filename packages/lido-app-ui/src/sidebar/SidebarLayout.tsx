import { forwardRef, type HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './SidebarLayout.module.css'
import { SidebarContext } from './SidebarContext'
import { useSidebarDrawer } from './useSidebarDrawer'

export type SidebarLayoutProps = HTMLAttributes<HTMLDivElement> & {
  defaultOpen?: boolean
  /** Controlled drawer state; pair with `onOpenChange`. */
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * Row that holds Sidebar and SidebarInset and wires the drawer between Sidebar and SidebarToggle.
 * The Sidebar must be its direct child: it measures its parent's top for the banner offset.
 */
export const SidebarLayout = forwardRef<HTMLDivElement, SidebarLayoutProps>(
  ({ defaultOpen, open, onOpenChange, className, ...rest }, ref) => {
    const value = useSidebarDrawer({ defaultOpen, open, onOpenChange })

    return (
      <SidebarContext.Provider value={value}>
        <div ref={ref} className={cn(styles.root, className)} {...rest} />
      </SidebarContext.Provider>
    )
  },
)

SidebarLayout.displayName = 'SidebarLayout'
