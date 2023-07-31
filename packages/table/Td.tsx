import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'

import cn from 'classnames'
import styles from './Td.module.css'
import { className } from 'postcss-selector-parser'

export enum TableAlign {
  left = 'left',
  center = 'center',
  right = 'right',
}

export type TableAligns = keyof typeof TableAlign

export enum TableTextColor {
  primary = 'primary',
  secondary = 'secondary',
  warning = 'warning',
  error = 'error',
  success = 'success',
  default = 'default',
}

export type TableTextColors = keyof typeof TableTextColor

export enum TdVariant {
  string = 'string',
  icon = 'icon',
}

export type TdVariants = keyof typeof TdVariant

export type TdProps = ComponentPropsWithoutRef<'td'> & {
  align?: TableAligns
  textColor?: TableTextColors
  variant?: TdVariants
  numeric?: boolean
}

export const Td = forwardRef(
  (
    {
      align = 'left',
      textColor = 'default',
      variant,
      children,
      numeric = false,
      ...rest
    }: TdProps,
    ref?: ForwardedRef<HTMLTableCellElement>,
  ) => {
    return (
      <td
        className={cn(styles.td, className, {
          [styles.colorPrimary]: textColor === TableTextColor.primary,
          [styles.colorSecondary]: textColor === TableTextColor.secondary,
          [styles.colorWarning]: textColor === TableTextColor.warning,
          [styles.colorError]: textColor === TableTextColor.error,
          [styles.colorSuccess]: textColor === TableTextColor.success,
          [styles.alignCenter]: align === TableAlign.center,
          [styles.alignRight]: align === TableAlign.right,
          [styles.variantString]: variant === TdVariant.string,
          [styles.variantIcon]: variant === TdVariant.icon,
          [styles.numeric]: numeric,
          [styles.interactive]: Boolean(rest.onClick),
        })}
        ref={ref}
        {...rest}
      >
        <div className={cn(styles.tdContent, className)}>{children}</div>
      </td>
    )
  },
)

Td.displayName = 'Td'
