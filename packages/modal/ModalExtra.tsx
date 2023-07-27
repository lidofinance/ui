import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'
import styles from './ModalExtra.module.css'

export type ModalExtraProps = ComponentPropsWithoutRef<'div'>

export const ModalExtra = forwardRef(
  (
    { className, ...rest }: ModalExtraProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className={cn(styles.modalExtra, className)} ref={ref} {...rest} />
    )
  },
)
ModalExtra.displayName = 'ModalExtra'
