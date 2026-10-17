import { forwardRef, type ElementType, type HTMLAttributes } from 'react'

import cn from 'classnames'

import {
  capitalize,
  mergeResponsive,
  responsiveVars,
  spaceToCss,
  type Responsive,
  type Space,
} from '../utils'
import styles from './Grid.module.css'

export type GridAlign = 'start' | 'center' | 'end' | 'stretch'

export type GridProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  /** A number makes equal columns; a string is used as raw `grid-template-columns`. */
  columns?: Responsive<number | string>
  /** Auto-fit columns of at least this width (number = px). Takes precedence over `columns`. */
  minItemWidth?: number | string
  gap?: Responsive<Space>
  /** Overrides `gap` for rows, per breakpoint. */
  rowGap?: Responsive<Space>
  /** Overrides `gap` for columns, per breakpoint. */
  columnGap?: Responsive<Space>
  align?: GridAlign
}

const columnsToCss = (columns: number | string) =>
  typeof columns === 'number' ? `repeat(${columns}, minmax(0, 1fr))` : columns

/** CSS grid container with equal, templated or auto-fit columns and a spacing scale. */
export const Grid = forwardRef<HTMLElement, GridProps>(
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
    }

    return (
      <Component
        ref={ref}
        className={cn(
          styles.root,
          align && styles[`align${capitalize(align)}`],
          className,
        )}
        style={{ ...vars, ...style }}
        {...rest}
      />
    )
  },
)

Grid.displayName = 'Grid'
