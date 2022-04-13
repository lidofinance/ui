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
        let props: Partial<PaginationItemProps> = {}
        if (page === '...') {
          props = {
            variant: 'default',
            disabled: true,
          }
        }

        if (page === currentPage) {
          props = {
            variant: 'active',
            disabled: false,
          }
        }

        return (
          <PaginationItem
            key={page}
            icon={page}
            onClick={onItemClick}
            {...props}
          />
        )
      })}

      <PaginationItem icon={<ArrowRight />} />
    </Box>
  )
}

export default Pagination
