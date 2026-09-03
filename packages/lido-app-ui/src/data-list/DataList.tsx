import type { ReactNode } from 'react'

import cn from 'classnames'

import styles from './DataList.module.css'

export type DataListProps = {
  children: ReactNode
  className?: string
}

export const DataList = ({ children, className }: DataListProps) => (
  <div className={cn(styles.card, className)}>{children}</div>
)
