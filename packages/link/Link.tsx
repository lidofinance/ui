import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import styles from './LinkStyles.module.css'
import cn from 'classnames'

export type LinkProps = ComponentPropsWithoutRef<'a'> & {
  fadeVisited?: boolean
}

export const Link = forwardRef(
  (
    { fadeVisited, className, children, ...rest }: LinkProps,
    ref?: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <a
        className={cn(styles.link, { [styles.fadedVisited]: fadeVisited })}
        target='_blank'
        rel='nofollow noopener'
        ref={ref}
        {...rest}
      >
        {children}
      </a>
    )
  },
)
Link.displayName = 'Link'
