import cn from 'classnames'
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import styles from './Block.module.css'

export const Block = forwardRef(
  (
    { className, ...rest }: ComponentPropsWithoutRef<'div'>,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return <div className={cn(styles.block, className)} {...rest} ref={ref} />
  },
)
Block.displayName = 'Block'
