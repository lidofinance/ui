import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import styles from './Thead.module.css'
import { className } from 'postcss-selector-parser'
import cn from 'classnames'

export type TheadProps = ComponentPropsWithoutRef<'thead'> & {
  sticky?: boolean
}

export const Thead = forwardRef(
  (
    { sticky = false, ...rest }: TheadProps,
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
