import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Table.module.css'

export type TableProps = ComponentPropsWithoutRef<'table'>
export const Table = forwardRef(
  (
    { className, ...rest }: TableProps,
    ref?: ForwardedRef<HTMLTableElement>,
  ) => {
    return <table className={cn(styles.table, className)} {...rest} ref={ref} />
  },
)

Table.displayName = 'Table'
