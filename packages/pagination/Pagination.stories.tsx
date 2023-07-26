import { StoryFn, Meta } from '@storybook/react'
import { Pagination, PaginationProps } from '.'

export default {
  component: Pagination,
  title: 'Pagination/Pagination',
  args: {
    pagesCount: 10,
  },
  argTypes: {},
} satisfies Meta

const noop = () => null

export const SiblingCount1: StoryFn<PaginationProps> = (props) => (
  <Pagination {...props} onItemClick={noop} siblingCount={1} />
)

export const SiblingCount0: StoryFn<PaginationProps> = (props) => (
  <Pagination {...props} onItemClick={noop} siblingCount={0} />
)
