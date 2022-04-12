import React from 'react'
import { css } from 'styled-components'

import { ArrowLeft, ArrowRight, Box, ButtonIcon } from '@lidofinance/lido-ui'

type SiblingsCount = 0 | 1

type PaginationProps = {
  siblingCount?: SiblingsCount
}

const arrayPusher = () => {
  const innerArray: unknown[] = []

  return (arr: unknown[], element: unknown) => {
    if (!innerArray.includes(element) || element === '...') {
      innerArray.push(element)
      arr.push(element)
    }

    return innerArray.length
  }
}

const numberSort = (a, b) => a - b

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}

const getShowingPages = (
  pagesCount: number,
  currPage = 1,
  siblingCount: SiblingsCount = 1
) => {
  const showingPagesCount = siblingCount === 1 ? 7 : 5
  if (pagesCount <= showingPagesCount) {
    return range(1, pagesCount)
  }

  const firstPage = 1
  const lastPage = pagesCount

  const firstPages: number[] = []
  const firstEllipsis: string[] = []
  const middlePages: number[] = []
  const lastEllipsis: string[] = []
  const lastPages: number[] = []

  const pusher = arrayPusher()
  pusher(firstPages, firstPage)

  let siblings
  switch (true) {
    case firstPage === currPage:
      siblings = [0, 1, 1 + siblingCount]
      break

    case lastPage === currPage:
      siblings = [-siblingCount - 1, -1, 0]
      break

    case siblingCount === 1 && currPage - firstPage === 3:
      siblings = [-2, -1, 0, 1]
      break

    case siblingCount === 1 && lastPage - currPage === 3:
      siblings = [-1, 0, 1, 2]
      break

    case siblingCount === 1:
      siblings = [-1, 0, 1]
      break

    case siblingCount === 0 && currPage - firstPage === 2:
      siblings = [-1, 0]
      break

    case siblingCount === 0 && lastPage - currPage === 2:
      siblings = [0, 1]
      break

    default:
      siblings = [0]
      break
  }

  siblings.forEach((sibling) => {
    pusher(middlePages, currPage + sibling)
  })

  if (currPage - firstPage >= 3 + siblingCount) {
    pusher(firstEllipsis, '...')
  }

  if (lastPage - currPage >= 3 + siblingCount) {
    pusher(lastEllipsis, '...')
  }

  const count = pusher(lastPages, lastPage)

  const rest = showingPagesCount - count
  for (let i = rest; i > 0; i--) {
    if (currPage < pagesCount / 2) {
      pusher(lastPages, lastPage - i)
    } else {
      pusher(firstPages, firstPage + i)
    }
  }

  return [
    ...firstPages.sort(numberSort),
    ...firstEllipsis,
    ...middlePages,
    ...lastEllipsis,
    ...lastPages.sort(numberSort),
  ]
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { siblingCount = 1 } = props

  return (
    <Box
      display='flex'
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
