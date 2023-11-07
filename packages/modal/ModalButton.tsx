import { cloneElement, ForwardedRef, forwardRef } from 'react'
import {
  ModalButtonStyle,
  ModalButtonContentStyle,
} from './ModalButtonStyles.js'
import { ModalButtonIconProps } from './types.js'

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

export const ModalButton = forwardRef(
  (
    {
      size = 'md',
      loading = false,
      children,
      icon,
      ...rest
    }: ModalButtonIconProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    const AdaptiveIconProps =
      icon.props.width || icon.props.height ? icon.props : { ...iconSize[size] }
    const AdaptiveIcon = cloneElement(icon, AdaptiveIconProps)

    return (
      <ModalButtonStyle
        type='button'
        size={size}
        loading={loading}
        ref={ref}
        icon={icon}
        {...rest}
      >
        <ModalButtonContentStyle>
          {children} {AdaptiveIcon}
        </ModalButtonContentStyle>
      </ModalButtonStyle>
    )
  },
)
ModalButton.displayName = 'ModalButton'
