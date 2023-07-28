import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'
import styles from './Tbody.module.css'
import cn from 'classnames'

export type TbodyProps = ComponentPropsWithoutRef<'tbody'>
export const Tbody = forwardRef(
  (
    { className, ...rest }: TbodyProps,
    ref?: ForwardedRef<HTMLTableSectionElement>,
  ) => {
    return <tbody className={cn(styles.tbody, className)} {...rest} ref={ref} />
  },
)
Tbody.displayName = 'Tbody'
