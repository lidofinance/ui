import { FC } from 'react'
import { PaginationItemStyle } from './PaginationItemStyles'
import { PaginationItemProps, PaginationItemVariant } from './types'

const PaginationItem: FC<PaginationItemProps> = ({
  icon,
  variant = PaginationItemVariant.default,
  ...rest
}) => {
  return (
    <PaginationItemStyle $variant={variant} {...rest}>
      {icon}
    </PaginationItemStyle>
  )
}

export default PaginationItem
