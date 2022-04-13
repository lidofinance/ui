import React from 'react'
import { Story, Meta } from '@storybook/react'
import PaginationItem, {
  PageItemVariant,
  PaginationItemProps,
} from './PaginationItem'
import { getOptionsFromEnum } from '@lidofinance/utils'

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
      options: getOptionsFromEnum(PageItemVariant),
      control: 'inline-radio',
    },
  },
} as Meta

export const Basic: Story<PaginationItemProps> = (props) => (
  <PaginationItem {...props} />
)
