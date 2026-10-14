import type { ReactNode } from 'react'

import cn from 'classnames'

import styles from './DataList.module.css'

export type DataListDataTestId = {
  root?: string
}

export type DataListProps = {
  children: ReactNode
  className?: string
  divided?: boolean
  dataTestId?: DataListDataTestId
}

export const DataList = ({
  children,
  className,
  divided = false,
  dataTestId,
}: DataListProps) => (
  <div
    className={cn(styles.card, divided && styles.divided, className)}
    data-testid={dataTestId?.root}
  >
    {children}
  </div>
)
