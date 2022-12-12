import getShowingPages, {
  range,
  numberSort,
  arrayPusher,
} from './getShowingPages'

describe('getShowingPages at siblingCount=1', () => {
  describe('pagesCount > 7', () => {
    const pagesCount = 10
    const givens = [
      {
        value: 1,
        expected: [1, 2, 3, '...', 8, 9, 10],
      },
      {
        value: 2,
        expected: [1, 2, 3, '...', 8, 9, 10],
      },
      {
        value: 3,
        expected: [1, 2, 3, 4, '...', 9, 10],
      },
      {
        value: 4,
        expected: [1, 2, 3, 4, 5, '...', 10],
      },
      {
        value: 5,
        expected: [1, '...', 4, 5, 6, '...', 10],
      },
      {
        value: 6,
        expected: [1, '...', 5, 6, 7, '...', 10],
      },
      {
        value: 7,
        expected: [1, '...', 6, 7, 8, 9, 10],
      },
      {
        value: 8,
        expected: [1, 2, '...', 7, 8, 9, 10],
      },
      {
        value: 9,
        expected: [1, 2, 3, '...', 8, 9, 10],
      },
      {
        value: 10,
        expected: [1, 2, 3, '...', 8, 9, 10],
      },
    ]

    for (const { value, expected } of givens) {
      test(`pages=${pagesCount}, currPage=${value}`, () => {
        const received = getShowingPages(pagesCount, value, 1)

        expect(received).toStrictEqual(expected)
      })
    }
  })

  describe('pagesCount <= 7', () => {
    const givens = [
      {
        value: 1,
        expected: [1],
      },
      {
        value: 4,
        expected: [1, 2, 3, 4],
      },
      {
        value: 7,
        expected: [1, 2, 3, 4, 5, 6, 7],
      },
    ]

    for (const { value, expected } of givens) {
      test(`pagesCount = ${value}`, () => {
        const received = getShowingPages(value, 1, 1)

        expect(received).toStrictEqual(expected)
      })
    }
  })
})

describe('getShowingPages at siblingCount=0', () => {
  describe('pagesCount > 5', () => {
    const pagesCount = 10
    const givens = [
      {
        value: 1,
        expected: [1, 2, '...', 9, 10],
      },
      {
        value: 2,
        expected: [1, 2, '...', 9, 10],
      },
      {
        value: 3,
        expected: [1, 2, 3, '...', 10],
      },
      {
        value: 4,
        expected: [1, '...', 4, '...', 10],
      },
      {
        value: 5,
        expected: [1, '...', 5, '...', 10],
      },
      {
        value: 6,
        expected: [1, '...', 6, '...', 10],
      },
      {
        value: 7,
        expected: [1, '...', 7, '...', 10],
      },
      {
        value: 8,
        expected: [1, '...', 8, 9, 10],
      },
      {
        value: 9,
        expected: [1, 2, '...', 9, 10],
      },
      {
        value: 10,
        expected: [1, 2, '...', 9, 10],
      },
    ]

    for (const { value, expected } of givens) {
      test(`pages=${pagesCount}, currPage=${value}`, () => {
        const received = getShowingPages(pagesCount, value, 0)

        expect(received).toStrictEqual(expected)
      })
    }
  })

  describe('pagesCount <= 5', () => {
    const givens = [
      {
        value: 1,
        expected: [1],
      },
      {
        value: 3,
        expected: [1, 2, 3],
      },
      {
        value: 5,
        expected: [1, 2, 3, 4, 5],
      },
    ]

    for (const { value, expected } of givens) {
      test(`pagesCount = ${value}`, () => {
        const received = getShowingPages(value, 1, 0)

        expect(received).toStrictEqual(expected)
      })
    }
  })
})

describe('range function', () => {
  test('start=1, end=5', () => {
    const received = range(1, 5)
    const expected = [1, 2, 3, 4, 5]

    expect(received).toStrictEqual(expected)
  })
})

describe('arrayPusher', () => {
  test('Adding 5 elements', () => {
    const pusher = arrayPusher()

    const pages: number[] = []

    pusher(pages, 1)
    pusher(pages, 1)
    pusher(pages, 2)
    pusher(pages, 10)
    pusher(pages, 8)
    const count = pusher(pages, 5)

    expect(count).toBe(5)
    expect(count).toEqual(pages.length)
    expect(pages).toEqual([1, 2, 10, 8, 5])
  })

  test('Adding several ellipsis (...)', () => {
    const pusher = arrayPusher()

    const pages: number[] = []

    pusher(pages, '...')
    pusher(pages, 1)
    pusher(pages, '...')
    const count = pusher(pages, 1)

    expect(count).toBe(3)
    expect(count).toEqual(pages.length)
    expect(pages).toEqual(['...', 1, '...'])
  })
})

describe('numberSort', () => {
  test('Sorting number array', () => {
    const received = [10, 20, 8, 9]
    received.sort(numberSort)

    const expected = [8, 9, 10, 20]

    expect(received).toStrictEqual(expected)
  })
})
