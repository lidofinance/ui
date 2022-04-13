import React, { useMemo, useState } from 'react'
import { css } from 'styled-components'

import { ArrowLeft, ArrowRight } from '@lidofinance/icons'
import { Box } from '@lidofinance/box'

import { PaginationProps, PaginationItemProps } from './types'
import getShowingPages from './getShowingPages'
import PaginationItem from './PaginationItem'

const getActiveItem = (length: number, activeItem: number): number => {
  const isActiveNotInRange: boolean = activeItem >= length || activeItem < 0

  if (!activeItem || isActiveNotInRange) {
    return 1 // default active item will be the first one
  }

  return activeItem
}

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

  return (
    <Box
      display='flex'
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      css={css`
        gap: 8px;
      `}
    >
      <PaginationItem icon={<ArrowLeft />} />

      {showingPages.map((page, index) => {
        const isDisabled = page === '...'
        const variant: PaginationItemProps['variant'] =
          page === currentPage ? 'active' : 'default'

        return (
          <PaginationItem
            key={`${page}${index}`}
            icon={page}
            variant={variant}
            disabled={isDisabled}
            onClick={onPageItemClick.bind(null, page)}
          />
        )
      })}

      <PaginationItem icon={<ArrowRight />} />
    </Box>
  )
}

export default Pagination
