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
  dataTestId?: DataListDataTestId
}

export const DataList = ({
  children,
  className,
  divided = false,
  dataTestId,
  ...rest
}: DataListProps) => (
  <div
    className={cn(styles.card, divided && styles.divided, className)}
    data-testid={dataTestId?.root}
    {...rest}
  >
    {children}
  </div>
)
