import React from 'react'
import { PaginationItemStyle } from './PaginationItemStyles'
import { PaginationItemProps, PaginationItemVariant } from './types'

const PaginationItem: React.FC<PaginationItemProps> = (props) => {
  const { icon, variant = PaginationItemVariant.default, ...rest } = props
  return (
    <PaginationItemStyle $variant={variant} {...rest}>
      {icon}
    </PaginationItemStyle>
  )
}

export default PaginationItem
