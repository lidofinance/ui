import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import styles from './PaginationItem.module.css'
import cn from 'classnames'

export enum PaginationItemVariant {
  default = 'default',
  active = 'active',
}
export type PaginationItemVariants = keyof typeof PaginationItemVariant

export type PaginationItemProps = ComponentPropsWithoutRef<'button'> & {
  variant?: PaginationItemVariants
  icon: ReactNode
}

export const PaginationItem: FC<PaginationItemProps> = ({
  icon,
  variant = 'default',
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(styles.item, className, {
        [styles.default]: variant === 'default',
        [styles.active]: variant === 'active',
      })}
      {...rest}
    >
      {icon}
    </button>
  )
}
