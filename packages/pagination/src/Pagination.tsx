import React from 'react'
import { css } from 'styled-components'

import { ArrowLeft, ArrowRight } from '@lidofinance/icons'
import { Box } from '@lidofinance/box'

import { PaginationProps, PaginationItemProps } from './types'
import getShowingPages from './getShowingPages'
import PaginationItem from './PaginationItem'

const Pagination: React.FC<PaginationProps> = (props) => {
  const { siblingCount = 1, onItemClick, pagesCount } = props

  const showingPages = getShowingPages(pagesCount, 5, siblingCount)

  const currentPage = 5

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

      {showingPages.map((page) => {
        const isDisabled = page === '...'
        const variant: PaginationItemProps['variant'] =
          page === currentPage ? 'active' : 'default'

        return (
          <PaginationItem
            key={page}
            icon={page}
            variant={variant}
            disabled={isDisabled}
            onClick={onItemClick}
          />
        )
      })}

      <PaginationItem icon={<ArrowRight />} />
    </Box>
  )
}

export default Pagination
