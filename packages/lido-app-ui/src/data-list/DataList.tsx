import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import cn from 'classnames'

import styles from './DataList.module.css'

export type DataListDataTestId = {
  root?: string
}

export type DataListProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
> & {
  children: ReactNode
  divided?: boolean
  /** Drops the 16px padding so rows align with surrounding content. */
  flush?: boolean
  dataTestId?: DataListDataTestId
}

/** Spacing wrapper for label-left, value-right transaction details; put `DataListRow`s inside. */
export const DataList = ({
  children,
  className,
  divided = false,
  flush = false,
  dataTestId,
  ...rest
}: DataListProps) => (
  <div
    className={cn(
      styles.card,
      divided && styles.divided,
      flush && styles.flush,
      className,
    )}
    data-testid={dataTestId?.root}
    {...rest}
  >
    {children}
  </div>
)
