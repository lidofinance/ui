import { FC } from 'react'
import { ArrowBottom } from '../icons'
import cn from 'classnames'
import styles from './SelectArrow.module.css'

export enum SelectArrowVariant {
  small,
  default,
}
export type SelectArrowVariants = keyof typeof SelectArrowVariant

type SelectArrowProps = {
  arrow: SelectArrowVariants
  disabled?: boolean
  opened: boolean
  children?: never
}

export const SelectArrow: FC<SelectArrowProps> = ({
  arrow,
  disabled = false,
  opened,
}) => {
  if (arrow === 'default')
    return (
      <ArrowBottom
        className={cn(styles.icon, styles.big, {
          [styles.opened]: opened,
          [styles.disabled]: disabled,
        })}
      />
    )
  if (arrow === 'small')
    return (
      <div
        className={cn(styles.icon, styles.small, {
          [styles.opened]: opened,
          [styles.disabled]: disabled,
        })}
      />
    )

  return null
}
SelectArrow.displayName = 'SelectArrow'
