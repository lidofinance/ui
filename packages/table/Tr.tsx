import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'

import cn from 'classnames'
import styles from './Tr.module.css'

export enum TrHighlight {
  positive,
  negative,
  warning,
}
export type TrHighlights = keyof typeof TrHighlight

export type TrProps = ComponentPropsWithoutRef<'tr'> & {
  highlight?: TrHighlights
}

export const Tr = forwardRef(
  (
    { highlight, className, ...rest }: TrProps,
    ref?: ForwardedRef<HTMLTableRowElement>,
  ) => {
    return (
      <tr
        className={cn(styles.tr, className, {
          [styles.highlightPositive]: highlight === 'positive',
          [styles.highlightNegative]: highlight === 'negative',
          [styles.highlightWarning]: highlight === 'warning',
          [styles.interactive]: Boolean(rest.onClick),
        })}
        ref={ref}
        {...rest}
      />
    )
  },
)
Tr.displayName = 'Tr'
