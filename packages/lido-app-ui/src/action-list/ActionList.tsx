import { useId, type ComponentPropsWithoutRef, type ReactNode } from 'react'

import cn from 'classnames'

import styles from './ActionList.module.css'

export type ActionListDataTestId = {
  root?: string
  overline?: string
  list?: string
}

export type ActionListProps = ComponentPropsWithoutRef<'div'> & {
  /** Caption-style heading; also the accessible name of the list. */
  overline?: ReactNode
  /** Draws a divider between rows. */
  divided?: boolean
  /** `ActionRow` elements. */
  children: ReactNode
  dataTestId?: ActionListDataTestId
}

/** Navigation or summary list of `ActionRow`s with an optional overline heading. */
export const ActionList = ({
  overline,
  divided = true,
  className,
  children,
  dataTestId,
  ...rest
}: ActionListProps) => {
  const overlineId = useId()
  const hasOverline = overline != null && overline !== false

  return (
    <div
      className={cn(styles.root, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {hasOverline ? (
        <div
          id={overlineId}
          className={styles.overline}
          data-testid={dataTestId?.overline}
        >
          {overline}
        </div>
      ) : null}
      <ul
        className={cn(styles.list, divided && styles.divided)}
        aria-labelledby={hasOverline ? overlineId : undefined}
        data-testid={dataTestId?.list}
      >
        {children}
      </ul>
    </div>
  )
}
