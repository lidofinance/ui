import { useMemo, useState, useEffect, FC, MouseEvent } from 'react'
import styled from '../utils/styled-components-wrapper.js'
import { ArrowLeft, ArrowRight } from '../icons/index.js'
import { Box } from '../box/index.js'
import {
  PaginationProps,
  PaginationItemProps,
  PaginationItemVariant,
} from './types.js'
import getShowingPages from './getShowingPages.js'
import { PaginationItem } from './PaginationItem.js'

const getActiveItem = (length: number, activeItem: number): number => {
  const isActiveNotInRange: boolean = activeItem >= length || activeItem < 0

  if (!activeItem || isActiveNotInRange) {
    return 1 // default active item will be the first one
  }

  return activeItem
}

const PaginationBlock = styled(Box)`
  display: flex;
  gap: 8px;
`

export const Pagination: FC<PaginationProps> = ({
  onItemClick,
  pagesCount,
  activePage = 1,
  siblingCount,
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

  const onPageItemClick = (page: number, e: MouseEvent) => {
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
    <PaginationBlock {...rest}>
      <PaginationItem
        disabled={currentPage === 1}
        icon={<ArrowLeft />}
        onClick={onPreviousClick}
      />

      {showingPages.map((page, index) => {
        const isDisabled = page === '...'
        const variant: PaginationItemProps['variant'] =
          page === currentPage
            ? PaginationItemVariant.active
            : PaginationItemVariant.default

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
    </PaginationBlock>
  )
}
