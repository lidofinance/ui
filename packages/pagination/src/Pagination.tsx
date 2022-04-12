import React from 'react'
import { css } from 'styled-components'

import { ArrowLeft, ArrowRight } from '@lidofinance/icons'
import { ButtonIcon } from '@lidofinance/button'
import { Box } from '@lidofinance/box'

import { PaginationProps } from './types'
import getShowingPages from './getShowingPages'

const Pagination: React.FC<PaginationProps> = (props) => {
  const { siblingCount = 1, onItemClick } = props

  return (
    <Box
      display='flex'
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      css={css`
        gap: 8px;
      `}
    >
      <ButtonIcon
        color='secondary'
        icon={<ArrowLeft />}
        size='xs'
        variant='outlined'
      />

      {getShowingPages(10, siblingCount).map((page) => (
        <ButtonIcon
          key={page}
          color='primary'
          icon={page}
          size='xs'
          variant='outlined'
          onClick={onItemClick}
        />
      ))}

      <ButtonIcon
        color='secondary'
        icon={<ArrowRight />}
        size='xs'
        variant='outlined'
      />
    </Box>
  )
}

export default Pagination
