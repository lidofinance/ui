import { FC } from 'react'
import { PaginationItemStyle } from './PaginationItemStyles.js'
import { PaginationItemProps, PaginationItemVariant } from './types.js'

export const PaginationItem: FC<PaginationItemProps> = ({
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
