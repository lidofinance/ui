import React, { useMemo, useState } from 'react'
import styled from 'styled-components'

import { ArrowLeft, ArrowRight } from '@lidofinance/icons'
import { Box } from '@lidofinance/box'

import {
  PaginationProps,
  PaginationItemProps,
  PaginationItemVariant,
} from './types'
import getShowingPages from './getShowingPages'
import PaginationItem from './PaginationItem'

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

const Pagination: React.FC<PaginationProps> = (props) => {
  const { onItemClick, pagesCount, activePage = 1, siblingCount } = props

  const [currentPage, setCurrPage] = useState(
    getActiveItem(pagesCount, activePage)
  )

  const showingPages = useMemo<(string | number)[]>(
    () => getShowingPages(pagesCount, currentPage, siblingCount),
    [pagesCount, currentPage, siblingCount]
  )

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

    setCurrPage(currentPage - 1)
  }

  const onNextClick = () => {
    if (currentPage === pagesCount) {
      return // disabled
    }

    setCurrPage(currentPage + 1)
  }

  return (
    <PaginationBlock>
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

export default Pagination
