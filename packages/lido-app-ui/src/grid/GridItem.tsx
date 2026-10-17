import { forwardRef, type ElementType, type HTMLAttributes } from 'react'

import cn from 'classnames'

import { responsiveVars, type Responsive } from '../utils'
import styles from './GridItem.module.css'

export type GridItemProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  /** Number of columns to span; `'full'` spans every column. */
  span?: Responsive<number | 'full'>
  area?: string
}

const spanToCss = (span: number | 'full') =>
  span === 'full' ? '1 / -1' : `span ${span} / span ${span}`

/** Grid child that can span columns or sit in a named area. */
export const GridItem = forwardRef<HTMLElement, GridItemProps>(
  ({ as: Component = 'div', span, area, className, style, ...rest }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(styles.root, className)}
        style={{
          ...responsiveVars('span', span, spanToCss),
          ...(area !== undefined && { gridArea: area }),
          ...style,
        }}
        {...rest}
      />
    )
  },
)

GridItem.displayName = 'GridItem'
