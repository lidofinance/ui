import {
  useRef,
  useState,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FocusEvent,
  type KeyboardEvent,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { IconButton } from '../icon-button'
import { IconChevronLeft, IconChevronRight } from '../icons'
import { Input } from '../input'
import { TokenSelector } from '../token-selector'
import styles from './Pagination.module.css'

export type PaginationLabels = {
  show?: ReactNode
  records?: ReactNode
  of?: ReactNode
  page?: string
  pageSize?: string
  previous?: string
  next?: string
}

export type PaginationDataTestId = {
  root?: string
  pageSize?: string
  pageInput?: string
  previous?: string
  next?: string
}

export type PaginationProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'onChange'
> & {
  /** Current page, 1-based. The component is controlled. */
  page: number
  pageCount: number
  onPageChange: (page: number) => void
  /** Current page size. The "Show N Records" block renders only when set. */
  pageSize?: number
  pageSizeOptions?: number[]
  onPageSizeChange?: (pageSize: number) => void
  /** Visible texts and `aria-label`s, for i18n. */
  labels?: PaginationLabels
  dataTestId?: PaginationDataTestId
}

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100]

const DEFAULT_LABELS: Required<PaginationLabels> = {
  show: 'Show',
  records: 'Records',
  of: 'of',
  page: 'Page number',
  pageSize: 'Records per page',
  previous: 'Previous page',
  next: 'Next page',
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

/** Page-size selector on the left, page input with previous/next controls on the right; Enter or blur jumps to the typed page and out-of-range values are clamped. */
export const Pagination = ({
  page,
  pageCount,
  onPageChange,
  pageSize,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  onPageSizeChange,
  labels,
  className,
  dataTestId,
  ...rest
}: PaginationProps) => {
  const text = { ...DEFAULT_LABELS, ...labels }
  const lastPage = Math.max(pageCount, 1)
  // `null` while the input is not being edited — it then mirrors `page`.
  const [draft, setDraft] = useState<string | null>(null)
  const cancelledRef = useRef(false)

  const goTo = (next: number) => {
    const target = clamp(next, 1, lastPage)
    if (target !== page) onPageChange(target)
  }

  const commitDraft = () => {
    if (!cancelledRef.current && draft !== null && draft !== '') {
      goTo(Number(draft))
    }
    cancelledRef.current = false
    setDraft(null)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDraft(event.target.value.replace(/\D/g, ''))
  }

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') cancelledRef.current = true
    if (event.key === 'Enter' || event.key === 'Escape') {
      event.currentTarget.blur()
    }
  }

  const handleInputFocus = (event: FocusEvent<HTMLInputElement>) => {
    setDraft(String(page))
    event.currentTarget.select()
  }

  const sizeOptions = (
    pageSize != null && !pageSizeOptions.includes(pageSize)
      ? [...pageSizeOptions, pageSize].sort((a, b) => a - b)
      : pageSizeOptions
  ).map((size) => ({
    value: String(size),
    label: <span className={styles.pageSizeLabel}>{size}</span>,
  }))

  const fieldStyle = {
    '--local-digits': String(lastPage).length,
  } as CSSProperties

  return (
    <div
      className={cn(styles.pagination, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {pageSize != null ? (
        <div className={styles.group}>
          <span className={styles.text}>{text.show}</span>
          <span className={styles.pageSize}>
            <TokenSelector
              size='small'
              options={sizeOptions}
              value={String(pageSize)}
              listLabel={text.pageSize}
              onChange={(value) => onPageSizeChange?.(Number(value))}
              dataTestId={{ trigger: dataTestId?.pageSize }}
            />
          </span>
          <span className={styles.text}>{text.records}</span>
        </div>
      ) : null}
      <div className={styles.group}>
        <IconButton
          variant='ghost'
          icon={<IconChevronLeft />}
          aria-label={text.previous}
          disabled={page <= 1}
          onClick={() => goTo(page - 1)}
          dataTestId={{ root: dataTestId?.previous }}
        />
        <span className={styles.pageField} style={fieldStyle}>
          <Input
            size='small'
            type='text'
            inputMode='numeric'
            aria-label={text.page}
            value={draft ?? String(page)}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={commitDraft}
            onKeyDown={handleInputKeyDown}
            dataTestId={{ input: dataTestId?.pageInput }}
          />
        </span>
        <span className={styles.text}>
          {text.of} {lastPage}
        </span>
        <IconButton
          variant='ghost'
          icon={<IconChevronRight />}
          aria-label={text.next}
          disabled={page >= lastPage}
          onClick={() => goTo(page + 1)}
          dataTestId={{ root: dataTestId?.next }}
        />
      </div>
    </div>
  )
}
