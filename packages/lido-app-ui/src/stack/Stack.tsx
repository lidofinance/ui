import { forwardRef, type ElementType, type HTMLAttributes } from 'react'

import cn from 'classnames'

import {
  capitalize,
  getResponsiveProps,
  spaceToCss,
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

export type StackProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  direction?: Responsive<StackDirection>
  gap?: Responsive<Space>
  align?: StackAlign
  justify?: StackJustify
  wrap?: boolean
  inline?: boolean
}

/** Flexbox container with a spacing scale and breakpoint-aware direction and gap. */
export const Stack = forwardRef<HTMLElement, StackProps>(
  (
    {
      as: Component = 'div',
      direction,
      gap,
      align,
      justify,
      wrap = false,
      inline = false,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const directionProps = getResponsiveProps(
      'direction',
      direction,
      String,
      styles,
    )
    const gapProps = getResponsiveProps('gap', gap, spaceToCss, styles)

    return (
      <Component
        ref={ref}
        className={cn(
          styles.root,
          inline && styles.inline,
          wrap && styles.wrap,
          align && styles[`align${capitalize(align)}`],
          justify && styles[`justify${capitalize(justify)}`],
          directionProps.className,
          gapProps.className,
          className,
        )}
        style={{ ...directionProps.style, ...gapProps.style, ...style }}
        {...rest}
      />
    )
  },
)

Stack.displayName = 'Stack'
