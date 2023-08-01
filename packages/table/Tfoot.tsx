import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'

import cn from 'classnames'
import styles from './Table.module.css'

export type TfootProps = ComponentPropsWithoutRef<'tfoot'>
export const Tfoot = forwardRef(
  (
    { className, ...rest }: TfootProps,
    ref?: ForwardedRef<HTMLTableSectionElement>,
  ) => {
    return <tfoot className={cn(styles.tfoot, className)} {...rest} ref={ref} />
  },
)
Tfoot.displayName = 'Tfoot'
