import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'
import cn from 'classnames'
import styles from './Input.module.css'

export type InputGroupProps = ComponentPropsWithoutRef<'span'> & {
  fullwidth?: boolean
  error?: ReactNode
  success?: ReactNode
}

export const InputGroup = forwardRef(
  (
    { fullwidth = false, error, success, children, ...rest }: InputGroupProps,
    ref?: ForwardedRef<HTMLSpanElement>,
  ) => {
    const hasError = !!error
    const hasSuccess = !!success && !error

    return (
      <span
        className={cn(styles.group, { [styles.fullwidth]: fullwidth })}
        {...rest}
        ref={ref}
      >
        <span className={cn(styles.groupContent)}>{children}</span>
        {hasError && (
          <span className={cn(styles.message, styles.error)}>{error}</span>
        )}
        {hasSuccess && (
          <span className={cn(styles.message, styles.success)}>{success}</span>
        )}
      </span>
    )
  },
)
InputGroup.displayName = 'InputGroup'
