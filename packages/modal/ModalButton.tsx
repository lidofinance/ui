import { ForwardedRef, ReactElement, cloneElement, forwardRef } from 'react'
import { Button, ButtonProps } from '../button'
import cn from 'classnames'
import './ModalButton.css'

const iconSize = {
  xxs: {
    width: '16px',
    height: '16px',
  },
  xs: {
    width: '24px',
    height: '24px',
  },
  sm: {
    width: '32px',
    height: '32px',
  },
  md: {
    width: '48px',
    height: '48px',
  },
  lg: {
    width: '64px',
    height: '64px',
  },
}

export type ModalButtonIconProps = {
  icon: ReactElement
} & ButtonProps

export const ModalButton = forwardRef(
  (
    {
      size = 'md',
      loading = false,
      children,
      icon,
      className,
      active,
      ...rest
    }: ModalButtonIconProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    const AdaptiveIconProps =
      icon.props.width || icon.props.height ? icon.props : { ...iconSize[size] }
    const AdaptiveIcon = cloneElement(icon, AdaptiveIconProps)

    return (
      <Button
        className={cn('modal-btn', className, {
          ['modal-btn_active']: active,
        })}
        active={active}
        type='button'
        size={size}
        loading={loading}
        ref={ref}
        {...rest}
      >
        <span className={'modal-btn__content'}>
          {children} {AdaptiveIcon}
        </span>
      </Button>
    )
  },
)
ModalButton.displayName = 'ModalButton'
