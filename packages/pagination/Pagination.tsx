import {
  useMemo,
  useState,
  useEffect,
  FC,
  ComponentPropsWithoutRef,
} from 'react'
import { ArrowLeft, ArrowRight } from '../icons'
import getShowingPages from './getShowingPages'
import { PaginationItem, PaginationItemProps } from './PaginationItem'
import cn from 'classnames'
import styles from './Pagination.module.css'

const getActiveItem = (length: number, activeItem: number): number => {
  const isActiveNotInRange: boolean = activeItem >= length || activeItem < 0

  if (!activeItem || isActiveNotInRange) {
    return 1 // default active item will be the first one
  }

  return activeItem
}

export type SiblingsCount = 0 | 1

export type onItemClick = (index: number, e?: React.MouseEvent) => void

export type PaginationProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
> & {
  pagesCount: number
  activePage?: number
  onItemClick: onItemClick
  siblingCount?: SiblingsCount
}

export const Pagination: FC<PaginationProps> = ({
  onItemClick,
  pagesCount,
  activePage = 1,
  siblingCount,
  className,
  ...rest
}) => {
  const [currentPage, setCurrPage] = useState(
    getActiveItem(pagesCount, activePage),
  )

  const showingPages = useMemo<(string | number)[]>(
    () => getShowingPages(pagesCount, currentPage, siblingCount),
    [pagesCount, currentPage, siblingCount],
  )

  useEffect(() => {
    setCurrPage((page) => (page !== activePage ? activePage : page))
  }, [activePage])

  if (pagesCount <= 0) {
    return null
  }

  const onPageItemClick = (page: number, e: React.MouseEvent) => {
    onItemClick(page, e)
    setCurrPage(page)
  }

  const onPreviousClick = () => {
    if (currentPage === 1) {
      return // disabled
    }

    onItemClick(currentPage - 1)
    setCurrPage(currentPage - 1)
  }

  const onNextClick = () => {
    if (currentPage === pagesCount) {
      return // disabled
    }

    onItemClick(currentPage + 1)
    setCurrPage(currentPage + 1)
  }

  return (
    <div className={cn(styles.block, className)} {...rest}>
      <PaginationItem
        disabled={currentPage === 1}
        icon={<ArrowLeft />}
        onClick={onPreviousClick}
      />

      {showingPages.map((page, index) => {
        const isDisabled = page === '...'
        const variant: PaginationItemProps['variant'] =
          page === currentPage ? 'active' : 'default'

        return (
          <PaginationItem
            key={page === '...' ? `${page}${index}` : page}
            icon={page}
            variant={variant}
            disabled={isDisabled}
            onClick={onPageItemClick.bind(null, page)}
          />
        )
      })}

      <PaginationItem
        disabled={currentPage === pagesCount}
        icon={<ArrowRight />}
        onClick={onNextClick}
      />
    </div>
  )
}
