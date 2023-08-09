import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'
import { InlineLoader } from '../loaders'
import { Tooltip } from '../tooltip'
import styles from './DataTable.module.css'
import cn from 'classnames'
import { Question } from '../icons'

export type DataTableProps = ComponentPropsWithoutRef<'div'>

export const DataTable = forwardRef(
  (props: DataTableProps, ref?: ForwardedRef<HTMLDivElement>) => {
    return <div ref={ref} {...props} />
  },
)
DataTable.displayName = 'DataTable'

export type DataTableRowProps = ComponentPropsWithoutRef<'div'> & {
  title: ReactNode
  help?: ReactNode
  loading?: boolean
  highlight?: boolean
}

export const DataTableRow = forwardRef(
  (
    {
      title,
      loading = false,
      highlight = false,
      help,
      className,
      children,
      ...rest
    }: DataTableRowProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const hasHelper = !!help

    return (
      <div className={cn(styles.row, className)} ref={ref} {...rest}>
        <div className={styles.title}>
          {title}
          {hasHelper && (
            <Tooltip placement='bottomLeft' title={help}>
              <Question className={styles.question} />
            </Tooltip>
          )}
        </div>
        <div className={cn(styles.value, { [styles.highlight]: highlight })}>
          {loading ? <InlineLoader color='text' /> : children}
        </div>
      </div>
    )
  },
)
DataTableRow.displayName = 'DataTableRow'
