import { StoryFn, Meta } from '@storybook/react'
import { PaginationItem, PaginationItemVariant, PaginationItemProps } from '.'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: PaginationItem,
  title: 'Pagination/PaginationItem',
  args: {
    variant: 'default',
    disabled: false,
    icon: '2',
  },
  argTypes: {
    variant: {
      options: getOptions(PaginationItemVariant),
      control: 'inline-radio',
    },
  },
} satisfies Meta

export const Basic: StoryFn<PaginationItemProps> = (props) => (
  <PaginationItem {...props} />
)
