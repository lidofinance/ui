import type { ReactNode } from 'react'

import cn from 'classnames'

import styles from './DataList.module.css'

export type DataListProps = {
  children: ReactNode
  className?: string
  divided?: boolean
}

export const DataList = ({
  children,
  className,
  divided = false,
}: DataListProps) => (
  <div className={cn(styles.card, divided && styles.divided, className)}>
    {children}
  </div>
)
