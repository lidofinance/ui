import { FC, ReactNode } from 'react'
import { PaginationItemStyle, PaginationItemStyleProps } from './PaginationItemStyles'
import { PaginationItemVariant, PaginationItemVariants } from './constants'

export type PaginationItemProps = Omit<PaginationItemStyleProps, '$variant'> & {
  variant?: PaginationItemVariants
  icon: ReactNode
}

const PaginationItem: FC<PaginationItemProps> = ({
  icon,
  variant = PaginationItemVariant.default,
  ...rest
}) => {
  return (
    <PaginationItemStyle {...rest} $variant={variant}>
      {icon}
    </PaginationItemStyle>
  )
}

export default PaginationItem
