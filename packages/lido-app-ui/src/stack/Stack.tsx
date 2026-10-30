import { forwardRef, type ElementType, type HTMLAttributes } from 'react'

import cn from 'classnames'

import {
  responsiveVars,
  spaceToCss,
  type PolymorphicComponent,
  type PolymorphicProps,
  type Responsive,
  type Space,
} from '../utils'
import styles from './Stack.module.css'

export type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
export type StackJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'

export const alignToCss = (align: StackAlign) =>
  ({
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
  })[align]

const justifyToCss = (justify: StackJustify) =>
  ({
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
  })[justify]

export type StackDataTestId = { root?: string }

type StackOwnProps = {
  /** Flex direction (`column` when omitted). Per-breakpoint, desktop-first (see breakpointWidths). */
  direction?: Responsive<StackDirection>
  /** Gap from the spacing scale in px. Per-breakpoint, desktop-first (see breakpointWidths). */
  gap?: Responsive<Space>
  /** Cross-axis alignment, per-breakpoint, desktop-first (see breakpointWidths). */
  align?: Responsive<StackAlign>
  /** Main-axis distribution, per-breakpoint, desktop-first (see breakpointWidths). */
  justify?: Responsive<StackJustify>
  /** Allows items to wrap onto new lines. Per-breakpoint, desktop-first (see breakpointWidths). */
  wrap?: Responsive<boolean>
  /** Renders `inline-flex` instead of `flex`. */
  inline?: boolean
  dataTestId?: StackDataTestId
}

type StackImplProps = HTMLAttributes<HTMLElement> &
  StackOwnProps & { as?: ElementType }

export type StackProps<E extends ElementType = never> = [E] extends [never]
  ? StackImplProps
  : PolymorphicProps<E, StackOwnProps>

/** Flex container; `direction`, `gap`, `align`, `justify` and `wrap` take a value or a desktop-first per-breakpoint object like `{ base: 'row', smDown: 'column' }`, where `smDown` applies below `breakpointWidths.sm` (768px). */
export const Stack = forwardRef<HTMLElement, StackImplProps>(
  (
    {
      as: Component = 'div',
      direction,
      gap,
      align,
      justify,
      wrap,
      inline = false,
      className,
      style,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <Component
      ref={ref}
      className={cn(styles.root, inline && styles.inline, className)}
      style={{
        ...responsiveVars('direction', direction, String),
        ...responsiveVars('gap', gap, spaceToCss),
        ...responsiveVars('align', align, alignToCss),
        ...responsiveVars('justify', justify, justifyToCss),
        ...responsiveVars('wrap', wrap, (value) => (value ? 'wrap' : 'nowrap')),
        ...style,
      }}
      data-testid={dataTestId?.root}
      {...rest}
    />
  ),
) as PolymorphicComponent<'div', StackOwnProps>

Stack.displayName = 'Stack'
