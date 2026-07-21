import { StoryFn, Meta } from '@storybook/react'
import {
  PaginationItem,
  PaginationItemVariant,
  PaginationItemProps,
} from './index.js'

export default {
  component: PaginationItem,
  title: 'Pagination/PaginationItem',
  args: {
    variant: PaginationItemVariant.default,
    disabled: false,
    icon: '2',
  },
  argTypes: {
    variant: {
      options: PaginationItemVariant,
      control: 'inline-radio',
    },
  },
} as Meta

export const Basic: StoryFn<PaginationItemProps> = (props) => (
  <PaginationItem {...props} />
)
