import { Story, Meta } from '@storybook/react'
import Pagination from './Pagination'
import { PaginationProps } from './types'

export default {
  component: Pagination,
  title: 'Pagination/Pagination',
  args: {
    pagesCount: 10,
  },
  argTypes: {},
} as Meta

const noop = () => null

export const SiblingCount1: Story<PaginationProps> = (props) => (
  <Pagination {...props} onItemClick={noop} siblingCount={1} />
)

export const SiblingCount0: Story<PaginationProps> = (props) => (
  <Pagination {...props} onItemClick={noop} siblingCount={0} />
)
