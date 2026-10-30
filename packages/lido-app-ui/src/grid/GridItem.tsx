import { forwardRef, type ElementType, type HTMLAttributes } from 'react'

import cn from 'classnames'

import {
  responsiveVars,
  type PolymorphicComponent,
  type PolymorphicProps,
  type Responsive,
} from '../utils'
import styles from './GridItem.module.css'

export type GridItemDataTestId = { root?: string }

type GridItemOwnProps = {
  /** Per-breakpoint, desktop-first (see breakpointWidths). Number of columns to span; `'full'` spans every column. When Grid `columns` shrinks, make `span` responsive too: a span wider than the current column count adds an empty implicit track, and its gap shortens every other cell. */
  span?: Responsive<number | 'full'>
  /** Places the item in a named `grid-template-areas` area. */
  area?: string
  dataTestId?: GridItemDataTestId
}

type GridItemImplProps = HTMLAttributes<HTMLElement> &
  GridItemOwnProps & { as?: ElementType }

export type GridItemProps<E extends ElementType = never> = [E] extends [never]
  ? GridItemImplProps
  : PolymorphicProps<E, GridItemOwnProps>

const spanToCss = (span: number | 'full') =>
  span === 'full' ? '1 / -1' : `span ${span} / span ${span}`

/** Grid child that can span columns or sit in a named area. */
export const GridItem = forwardRef<HTMLElement, GridItemImplProps>(
  (
    {
      as: Component = 'div',
      span,
      area,
      className,
      style,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(styles.root, className)}
        style={{
          ...responsiveVars('span', span, spanToCss),
          ...(area !== undefined && { gridArea: area }),
          ...style,
        }}
        data-testid={dataTestId?.root}
        {...rest}
      />
    )
  },
) as PolymorphicComponent<'div', GridItemOwnProps>

GridItem.displayName = 'GridItem'
