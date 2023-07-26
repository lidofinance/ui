import { ForwardedRef, ReactNode, forwardRef } from 'react'
import { Select, SelectProps } from './Select'
import styles from './SelectIcon.module.css'
import cn from 'classnames'

export type SelectIconProps = Omit<
  SelectProps,
  'leftDecorator' | 'fullwidth' | 'arrow'
> & {
  icon: ReactNode
}

export const SelectIcon = forwardRef(
  (
    { icon, className, ...rest }: SelectIconProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Select
        className={cn(styles.icon, className)}
        fullwidth={false}
        arrow='small'
        leftDecorator={<span className={styles.iconDecorator}>{icon}</span>}
        ref={ref}
        {...rest}
      />
    )
  },
)
SelectIcon.displayName = 'SelectIcon'
