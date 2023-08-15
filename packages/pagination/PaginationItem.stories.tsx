import { Story, Meta } from '@storybook/react'

import { PaginationItemVariant, PaginationItemProps } from './types'
import PaginationItem from './PaginationItem'

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

export const Basic: Story<PaginationItemProps> = (props) => (
  <PaginationItem {...props} />
)
