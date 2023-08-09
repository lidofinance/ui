import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'
import cn from 'classnames'

export type InputGroupProps = ComponentPropsWithoutRef<'span'> & {
  fullwidth?: boolean
  error?: ReactNode
  success?: ReactNode
}

export const InputGroup = forwardRef(
  (
    {
      fullwidth = false,
      error,
      success,
      className,
      children,
      ...rest
    }: InputGroupProps,
    ref?: ForwardedRef<HTMLSpanElement>,
  ) => {
    const hasError = !!error
    const hasSuccess = !!success && !error

    return (
      <span
        className={cn('input-group', className, {
          ['input-group-fullwidth']: fullwidth,
        })}
        {...rest}
        ref={ref}
      >
        <span className={cn('input-group-content')}>{children}</span>
        {hasError && (
          <span className={cn('input-message', 'input-error')}>{error}</span>
        )}
        {hasSuccess && (
          <span className={cn('input-message', 'input-success')}>{success}</span>
        )}
      </span>
    )
  },
)
InputGroup.displayName = 'InputGroup'
