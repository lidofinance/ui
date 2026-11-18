import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import styles from './CheckboxList.module.css'

export type CheckboxListDataTestId = {
  root?: string
  header?: string
}

export type CheckboxListProps = ComponentPropsWithoutRef<'div'> & {
  /** Pinned first row, typically a select-all `CheckboxRow` with `indeterminate`. */
  header?: ReactNode
  /** Outlines the list in the error colour. */
  error?: boolean
  dataTestId?: CheckboxListDataTestId
}

/** Bordered container that stacks `CheckboxRow`s with dividers and an optional header row. */
export const CheckboxList = forwardRef<HTMLDivElement, CheckboxListProps>(
  ({ header, error, children, className, dataTestId, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(styles.list, error && styles.error, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {header != null ? (
        <div data-testid={dataTestId?.header}>{header}</div>
      ) : null}
      {children}
    </div>
  ),
)

CheckboxList.displayName = 'CheckboxList'
