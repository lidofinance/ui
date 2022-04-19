# Pagination Component

React component for Lido Finance projects.
Part of [Lido UI Components](https://github.com/lidofinance/ui/#readme)

## Install

```bash
yarn add @lidofinance/pagination
```

## Usage

```ts
import React from 'React'
import { Pagination } from '@lidofinance/pagination'

const TableExample: React.FC = () => {
  const [activePage, setActivePage] = React.useState(5)
  return (
    <Pagination
      siblingCount={1}
      pagesCount={10}
      activePage={activePage}
      onItemClick={setActivePage}
    />
  )
}
```

## Props

```ts
type SiblingsCount = 0 | 1

type onItemClick = (index: number, e?: React.MouseEvent) => void

type PaginationProps = {
  pagesCount: number
  activePage?: number
  onItemClick: onItemClick
  siblingCount?: SiblingsCount
}
```

- `siblingCount` - count of siblings which will be shown to current page
  - Default value is `1`. For example, if `activePage = 5`, then pages to show will be `1, ..., 4, 5, 6, ..., 10`, so `4 (curr - siblingCount) & 6 (curr + siblingCount)` are siblings.
  - Value `0` means without siblings. In above example pages to show will be `1, ..., 5, ..., 10`. _For more examples see `getShowingPages.test.ts`_
- `pagesCount` - quantity of pages
- `activePage` - or currentPage, means current active Page
- `onItemClick` - callback, usually for getting activePage value

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)
