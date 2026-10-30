import { forwardRef, type ElementType, type HTMLAttributes } from 'react'

import cn from 'classnames'

import {
  mergeResponsive,
  responsiveVars,
  spaceToCss,
  type PolymorphicComponent,
  type PolymorphicProps,
  type Responsive,
  type Space,
} from '../utils'
import { alignToCss, type StackAlign } from '../stack/Stack'
import styles from './Grid.module.css'

export type GridAlign = Exclude<StackAlign, 'baseline'>

export type GridDataTestId = { root?: string }

type GridOwnProps = {
  /** Per-breakpoint, desktop-first (see breakpointWidths); keys follow the page column inside SidebarInset, otherwise the viewport. A number makes equal columns; a string is used as raw `grid-template-columns`. */
  columns?: Responsive<number | string>
  /** Auto-fit columns of at least this width (number = px). Responds to the Grid's own width, not the viewport; prefer it inside cards, panels and modals. Takes precedence over `columns`. */
  minItemWidth?: number | string
  /** Gap from the spacing scale in px. Per-breakpoint, desktop-first (see breakpointWidths). */
  gap?: Responsive<Space>
  /** Overrides `gap` for rows, merged per breakpoint key: keys you omit keep `gap`'s value. `16` and `{ base: 16 }` are the same. */
  rowGap?: Responsive<Space>
  /** Overrides `gap` for columns, merged per breakpoint key: keys you omit keep `gap`'s value. `16` and `{ base: 16 }` are the same. */
  columnGap?: Responsive<Space>
  /** Cross-axis alignment of items. Per-breakpoint, desktop-first (see breakpointWidths). */
  align?: Responsive<GridAlign | 'baseline'>
  dataTestId?: GridDataTestId
}

type GridImplProps = HTMLAttributes<HTMLElement> &
  GridOwnProps & { as?: ElementType }

export type GridProps<E extends ElementType = never> = [E] extends [never]
  ? GridImplProps
  : PolymorphicProps<E, GridOwnProps>

const columnsToCss = (columns: number | string) =>
  typeof columns === 'number' ? `repeat(${columns}, minmax(0, 1fr))` : columns

/** CSS grid container; `columns`, `gap` and `align` take a value or a desktop-first per-breakpoint object like `{ base: 4, mdDown: 2 }`. Use `minItemWidth` to adapt to the container width instead of the viewport. */
export const Grid = forwardRef<HTMLElement, GridImplProps>(
  (
    {
      as: Component = 'div',
      columns,
      minItemWidth,
      gap,
      rowGap,
      columnGap,
      align,
      className,
      style,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const minWidth =
      typeof minItemWidth === 'number' ? `${minItemWidth}px` : minItemWidth
    const template =
      minItemWidth !== undefined
        ? `repeat(auto-fit, minmax(min(${minWidth}, 100%), 1fr))`
        : columns

    const vars = {
      ...responsiveVars('columns', template, columnsToCss),
      ...responsiveVars('rowGap', mergeResponsive(gap, rowGap), spaceToCss),
      ...responsiveVars(
        'columnGap',
        mergeResponsive(gap, columnGap),
        spaceToCss,
      ),
      ...responsiveVars('align', align, alignToCss),
    }

    return (
      <Component
        ref={ref}
        className={cn(styles.root, className)}
        style={{ ...vars, ...style }}
        data-testid={dataTestId?.root}
        {...rest}
      />
    )
  },
) as PolymorphicComponent<'div', GridOwnProps>

Grid.displayName = 'Grid'
