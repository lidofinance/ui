import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import styles from './Thead.module.css'
import cn from 'classnames'

export type TheadProps = ComponentPropsWithoutRef<'thead'> & {
  sticky?: boolean
}

export const Thead = forwardRef(
  (
    { sticky = false, className, ...rest }: TheadProps,
    ref?: ForwardedRef<HTMLTableSectionElement>,
  ) => {
    return (
      <thead
        className={cn(styles.thead, className, {
          [styles.sticky]: sticky,
        })}
        ref={ref}
        {...rest}
      />
    )
  },
)

Thead.displayName = 'Thead'
