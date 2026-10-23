import { forwardRef, useContext, type MouseEvent } from 'react'

import cn from 'classnames'

import { IconButton, type IconButtonProps } from '../icon-button'
import { IconMenu } from '../icons'
import { SidebarContext } from './SidebarContext'
import styles from './SidebarToggle.module.css'

export type SidebarToggleProps = Omit<
  IconButtonProps,
  'icon' | 'aria-label'
> & {
  'aria-label'?: string
}

/**
 * Burger that opens the Sidebar drawer; visible only at `ml-down` widths.
 * Inside a SidebarLayout it wires `aria-*` (explicit props win) and toggles after your
 * `onClick`, unless that calls `event.preventDefault()`.
 */
export const SidebarToggle = forwardRef<HTMLButtonElement, SidebarToggleProps>(
  (
    { className, 'aria-label': ariaLabel = 'Open menu', onClick, ...rest },
    ref,
  ) => {
    const toggleProps = useContext(SidebarContext)?.toggleProps
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)
      if (!event.defaultPrevented) toggleProps?.onClick()
    }
    return (
      <IconButton
        ref={ref}
        variant='ghost'
        icon={<IconMenu />}
        aria-label={ariaLabel}
        {...toggleProps}
        {...rest}
        onClick={handleClick}
        className={cn(styles.toggle, className)}
      />
    )
  },
)

SidebarToggle.displayName = 'SidebarToggle'
