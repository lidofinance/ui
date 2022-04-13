import React from 'react'
import { Story, Meta } from '@storybook/react'

import { getOptionsFromEnum } from '@lidofinance/utils'
import { PaginationItemVariant, PaginationItemProps } from './types'
import PaginationItem from './PaginationItem'

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
      options: getOptionsFromEnum(PaginationItemVariant),
      control: 'inline-radio',
    },
  },
} as Meta

export const Basic: Story<PaginationItemProps> = (props) => (
  <PaginationItem {...props} />
)
