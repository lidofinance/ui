import { SiblingsCount } from './types.js'

export const arrayPusher = (): ((
  arr: unknown[],
  element: unknown,
) => number) => {
  const innerArray: unknown[] = []

  return (arr: unknown[], element: unknown) => {
    if (!innerArray.includes(element) || element === '...') {
      innerArray.push(element)
      arr.push(element)
    }

    return innerArray.length
  }
}

export const numberSort = (a: number, b: number): number => a - b

export const range = (start: number, end: number): number[] => {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}

const getShowingPages = (
  pagesCount: number,
  currPage = 1,
  siblingCount: SiblingsCount = 1,
): (string | number)[] => {
  if (!pagesCount) {
    return []
  }

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

  // see getShowingPages.test.ts for full example
  let siblings
  switch (true) {
    case firstPage === currPage:
      siblings = [0, 1, 1 + siblingCount] //currPage=1 => [1. 2, 3?]
      break

    case lastPage === currPage:
      siblings = [-siblingCount - 1, -1, 0] // currPage=10 => [?8, 9, 10]
      break

    case siblingCount === 1 && currPage - firstPage === 3:
      siblings = [-2, -1, 0, 1] // currPage=4 => [2, 3, 4, 5]
      break

    case siblingCount === 1 && lastPage - currPage === 3:
      siblings = [-1, 0, 1, 2] // currPage=7 => [6, 7, 8, 9]
      break

    case siblingCount === 1:
      siblings = [-1, 0, 1] // currPage=5 => [4, 5, 6]
      break

    case siblingCount === 0 && currPage - firstPage === 2:
      siblings = [-1, 0] // currPage=3 => [1, 2, 3]
      break

    case siblingCount === 0 && lastPage - currPage === 2:
      siblings = [0, 1] // currPage=8 => [8, 9]
      break

    default:
      siblings = [0] // no siblings
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

export default getShowingPages
