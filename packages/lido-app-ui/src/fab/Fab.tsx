import { forwardRef } from 'react'

import cn from 'classnames'

import { IconButton } from '../icon-button'
import { mergeResponsive, responsiveVars } from '../utils'
import styles from './Fab.module.css'
import type { FabProps } from './types'

export type { FabProps }

/** Floating surface IconButton at the viewport's bottom-right that stops above the Footer; render it in `Layout`/`SidebarInset` between `Main` and `Footer`. */
export const Fab = forwardRef<HTMLButtonElement | HTMLAnchorElement, FabProps>(
  ({ bottomOffset, mobileBottomOffset, className, ...rest }, ref) => (
    <div
      className={styles.root}
      style={responsiveVars(
        'bottomOffset',
        mergeResponsive(
          bottomOffset,
          mobileBottomOffset === undefined
            ? undefined
            : { smDown: mobileBottomOffset },
        ),
        (value) => `${value}px`,
      )}
    >
      <IconButton
        ref={ref}
        variant='surface'
        className={cn(styles.fab, className)}
        {...rest}
      />
    </div>
  ),
)

Fab.displayName = 'Fab'
