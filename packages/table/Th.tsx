import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'
import styles from './Th.module.css'
import cn from 'classnames'
import { className } from 'postcss-selector-parser'
import { ArrowBottom, ArrowTop } from '../icons'

export enum ThAlign {
  left = 'left',
  center = 'center',
  right = 'right',
}

export type ThAligns = keyof typeof ThAlign

export enum ThSortDir {
  ASC = 'asc',
  DESC = 'desc',
}

export type ThSortDirs = keyof typeof ThSortDir

export enum ThVariant {
  string = 'string',
  icon = 'icon',
}

export type ThVariants = keyof typeof ThVariant

export type ThProps = ComponentPropsWithoutRef<'th'> & {
  align?: ThAligns
  sortDir?: ThSortDirs
  variant?: ThVariants
}

export const Th = forwardRef(
  (
    { align = 'left', children, sortDir, variant, ...rest }: ThProps,
    ref?: ForwardedRef<HTMLTableCellElement>,
  ) => {
    return (
      <th
        className={cn(styles.th, className, {
          [styles.alignCenter]: align === ThAlign.center,
          [styles.alignRight]: align === ThAlign.right,
          [styles.variantString]: variant === ThVariant.string,
          [styles.variantIcon]: variant === ThVariant.icon,
          [styles.interactive]: Boolean(rest.onClick),
        })}
        ref={ref}
        {...rest}
      >
        <div className={cn(styles.thContent, className)}>
          {children}
          {sortDir === 'ASC' && (
            <ArrowBottom className={cn(styles.arrowBottomMargin, className)} />
          )}
          {sortDir === 'DESC' && (
            <ArrowTop className={cn(styles.arrowTopMargin, className)} />
          )}
        </div>
      </th>
    )
  },
)
Th.displayName = 'Th'
