import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type Ref,
} from 'react'

import cn from 'classnames'

import { IconChevronDown, IconChevronsUpDown, IconChevronUp } from '../icons'
import { InfoTooltip } from '../info-tooltip'
import styles from './Table.module.css'

export type TableAlign = 'left' | 'center' | 'right'
export type TableSortDirection = 'asc' | 'desc'
export type TableVariant = 'default' | 'dense'

export type TableRootProps = ComponentPropsWithoutRef<'table'> & {
  variant?: TableVariant
  /** `table-layout: fixed`; column widths come from the first row or `<col>`. */
  fixed?: boolean
}

export const TableRoot = forwardRef<HTMLTableElement, TableRootProps>(
  ({ className, fixed = false, variant = 'default', ...rest }, ref) => (
    <table
      ref={ref}
      className={cn(
        styles.table,
        fixed && styles.fixed,
        variant === 'dense' && styles.dense,
        className,
      )}
      {...rest}
    />
  ),
)
TableRoot.displayName = 'TableRoot'

export type TableHeadProps = ComponentPropsWithoutRef<'thead'> & {
  /** Sticks to the top of the scroll wrapper; needs a bounded height (`maxHeight`) to have an effect. */
  sticky?: boolean
}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, sticky = false, ...rest }, ref) => (
    <thead
      ref={ref}
      className={cn(styles.head, sticky && styles.stickyHead, className)}
      {...rest}
    />
  ),
)
TableHead.displayName = 'TableHead'

export type TableHeaderCellProps = ComponentPropsWithoutRef<'th'> & {
  align?: TableAlign
  /** Tooltip content shown from an info icon next to the label. */
  info?: ReactNode
  sortable?: boolean
  sortDirection?: TableSortDirection | false
  onSort?: () => void
}

const ariaSort = (
  sortable: boolean,
  direction: TableSortDirection | false,
): 'ascending' | 'descending' | 'none' | undefined => {
  if (!sortable) return undefined
  if (direction === 'asc') return 'ascending'
  if (direction === 'desc') return 'descending'
  return 'none'
}

const SortIcon = ({ direction }: { direction: TableSortDirection | false }) => {
  if (direction === 'asc')
    return <IconChevronUp className={styles.sortIconActive} aria-hidden />
  if (direction === 'desc')
    return <IconChevronDown className={styles.sortIconActive} aria-hidden />
  return <IconChevronsUpDown className={styles.sortIcon} aria-hidden />
}

export const TableHeaderCell = forwardRef<
  HTMLTableCellElement,
  TableHeaderCellProps
>(
  (
    {
      className,
      align = 'left',
      info,
      sortable = false,
      sortDirection = false,
      onSort,
      children,
      ...rest
    },
    ref,
  ) => (
    <th
      ref={ref}
      scope='col'
      className={cn(styles.headerCell, styles[`align-${align}`], className)}
      aria-sort={ariaSort(sortable, sortDirection)}
      {...rest}
    >
      <span className={styles.headerCellContent}>
        {sortable ? (
          <button type='button' className={styles.sortButton} onClick={onSort}>
            <span>{children}</span>
            <SortIcon direction={sortDirection} />
          </button>
        ) : (
          <span>{children}</span>
        )}
        {info ? <InfoTooltip content={info} tone='tertiary' /> : null}
      </span>
    </th>
  ),
)
TableHeaderCell.displayName = 'TableHeaderCell'

export type TableBodyProps = ComponentPropsWithoutRef<'tbody'>

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...rest }, ref) => (
    <tbody ref={ref} className={cn(styles.body, className)} {...rest} />
  ),
)
TableBody.displayName = 'TableBody'

const INTERACTIVE_SELECTOR =
  'a,button,input,select,textarea,label,summary,[role="button"],[role="link"],[role="checkbox"],[tabindex]:not([tabindex="-1"])'

export type TableRowProps = ComponentPropsWithoutRef<'tr'> & {
  highlighted?: boolean
}

/** With `onClick` the row becomes focusable and Enter/Space activate it; clicks on nested controls do not. */
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    { className, highlighted = false, onClick, onKeyDown, tabIndex, ...rest },
    ref,
  ) => {
    const clickable = onClick != null

    const handleClick = (event: MouseEvent<HTMLTableRowElement>) => {
      const hit = (event.target as Element).closest(INTERACTIVE_SELECTOR)
      if (
        hit &&
        hit !== event.currentTarget &&
        event.currentTarget.contains(hit)
      )
        return
      onClick?.(event)
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLTableRowElement>) => {
      onKeyDown?.(event)
      if (
        !clickable ||
        event.defaultPrevented ||
        event.target !== event.currentTarget
      )
        return
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        event.currentTarget.click()
      }
    }

    return (
      <tr
        ref={ref}
        className={cn(
          styles.row,
          highlighted && styles.rowHighlighted,
          clickable && styles.rowClickable,
          className,
        )}
        onClick={clickable ? handleClick : undefined}
        onKeyDown={handleKeyDown}
        tabIndex={tabIndex ?? (clickable ? 0 : undefined)}
        {...rest}
      />
    )
  },
)
TableRow.displayName = 'TableRow'

export type TableCellProps = ComponentPropsWithoutRef<'td'> & {
  align?: TableAlign
}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, align = 'left', ...rest }, ref) => (
    <td
      ref={ref}
      className={cn(styles.cell, styles[`align-${align}`], className)}
      {...rest}
    />
  ),
)
TableCell.displayName = 'TableCell'

export type RankChange = 'up' | 'down' | 'none'

export type RankCellProps = ComponentPropsWithoutRef<'span'> & {
  rank: number
  change?: RankChange
}

export const RankCell = forwardRef<HTMLSpanElement, RankCellProps>(
  ({ rank, change = 'none', className, ...rest }, ref) => (
    <span ref={ref} className={cn(styles.rankCell, className)} {...rest}>
      <span>{rank}</span>
      {change !== 'none' ? (
        <span
          role='img'
          aria-label={change === 'up' ? 'Rank up' : 'Rank down'}
          className={cn(
            styles.rankArrow,
            change === 'up' ? styles.rankArrowUp : styles.rankArrowDown,
          )}
        />
      ) : null}
    </span>
  ),
)
RankCell.displayName = 'RankCell'

export type TableColumn<Row> = {
  key: string
  header: ReactNode
  /** Defaults to `row[key]`. */
  render?: (row: Row) => ReactNode
  align?: TableAlign
  width?: number | string
  sortable?: boolean
  info?: ReactNode
  /** Accessible name for the header cell, e.g. for an icon-only actions column. */
  'aria-label'?: string
}

export type TableSort = {
  key: string
  direction: TableSortDirection
}

export type TableDataTestId = {
  root?: string
  scroller?: string
  footer?: string
  empty?: string
}

export type TableProps<Row> = Omit<
  ComponentPropsWithoutRef<'div'>,
  'onClick' | 'children'
> & {
  columns: TableColumn<Row>[]
  rows: Row[]
  rowKey: (row: Row) => string
  sort?: TableSort
  onSortChange?: (sort: TableSort) => void
  getRowProps?: (row: Row) => Omit<TableRowProps, 'key' | 'children'>
  variant?: TableVariant
  stickyHeader?: boolean
  /** Bounds the scroll wrapper; required for `stickyHeader` to stick. */
  maxHeight?: number | string
  /** `table-layout: fixed`; defaults to on when any column sets `width`. */
  fixed?: boolean
  /** Below this width the wrapper scrolls horizontally instead of the page; `fixed` layouts need it to scroll instead of squeezing columns. */
  minWidth?: number | string
  footer?: ReactNode
  /** Shown inside the table, under the header, when `rows` is empty. */
  emptyState?: ReactNode
  dataTestId?: TableDataTestId
}

const TableInner = <Row,>(
  {
    columns,
    rows,
    rowKey,
    sort,
    onSortChange,
    getRowProps,
    variant = 'default',
    stickyHeader = false,
    maxHeight,
    fixed,
    minWidth,
    footer,
    emptyState,
    className,
    dataTestId,
    ...rest
  }: TableProps<Row>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const isFixed = fixed ?? columns.some((column) => column.width != null)
  const isEmpty = rows.length === 0 && emptyState != null

  return (
    <div
      ref={ref}
      className={cn(styles.container, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div
        className={styles.scroller}
        style={maxHeight != null ? { maxHeight } : undefined}
        data-testid={dataTestId?.scroller}
      >
        <TableRoot
          fixed={isFixed}
          variant={variant}
          style={minWidth != null ? { minWidth } : undefined}
        >
          <colgroup>
            {columns.map((column) => (
              <col key={column.key} style={{ width: column.width }} />
            ))}
          </colgroup>
          <TableHead sticky={stickyHeader}>
            <tr>
              {columns.map((column) => (
                <TableHeaderCell
                  key={column.key}
                  align={column.align}
                  info={column.info}
                  aria-label={column['aria-label']}
                  sortable={column.sortable}
                  sortDirection={
                    sort?.key === column.key ? sort.direction : false
                  }
                  onSort={() =>
                    onSortChange?.({
                      key: column.key,
                      direction:
                        sort?.key === column.key && sort.direction === 'asc'
                          ? 'desc'
                          : 'asc',
                    })
                  }
                >
                  {column.header}
                </TableHeaderCell>
              ))}
            </tr>
          </TableHead>
          <TableBody>
            {isEmpty ? (
              <tr>
                <td
                  className={styles.empty}
                  colSpan={columns.length}
                  data-testid={dataTestId?.empty}
                >
                  {emptyState}
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <TableRow key={rowKey(row)} {...getRowProps?.(row)}>
                  {columns.map((column) => (
                    <TableCell key={column.key} align={column.align}>
                      {column.render
                        ? column.render(row)
                        : ((row as Record<string, unknown>)[
                            column.key
                          ] as ReactNode)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </TableRoot>
      </div>
      {footer ? (
        <div className={styles.footer} data-testid={dataTestId?.footer}>
          {footer}
        </div>
      ) : null}
    </div>
  )
}

/** Data-driven table: horizontal scroll stays inside the wrapper, rows with `onClick` are keyboard accessible. */
export const Table = forwardRef(TableInner) as (<Row>(
  props: TableProps<Row> & { ref?: Ref<HTMLDivElement> },
) => ReactElement) & { displayName?: string }
Table.displayName = 'Table'
