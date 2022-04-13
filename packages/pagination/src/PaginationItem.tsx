import React from 'react'
import { PaginationItemStyle } from './PaginationItemStyles'
import { PaginationItemProps } from './types'

const PaginationItem: React.FC<PaginationItemProps> = (props) => {
  const { icon, variant = 'default', ...rest } = props
  return (
    <PaginationItemStyle $variant={variant} {...rest}>
      {icon}
    </PaginationItemStyle>
  )
}

export default PaginationItem
