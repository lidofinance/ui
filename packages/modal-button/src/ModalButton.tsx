import React, { ForwardedRef, forwardRef } from 'react'

import {
  ModalButtonStyle,
  ModalButtonContentStyle,
  // ModalButtonContentSvgStyle,
} from './ModalButtonStyles'
import { ModalButtonIconProps } from './types'

function ModalButton(
  props: ModalButtonIconProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  const {
    size = 'md',
    active = false,
    square = false,
    fullwidth = false,
    loading = false,
    onClick,
    disabled,
    children,
    icon,
    ...rest
  } = props

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

  const AdaptiveIconProps =
    icon.props.width || icon.props.height ? icon.props : { ...iconSize[size] }
  const AdaptiveIcon = React.cloneElement(icon, AdaptiveIconProps)

  return (
    <ModalButtonStyle
      $size={size}
      active={active}
      $fullwidth={fullwidth}
      $square={square}
      $loading={loading}
      onClick={onClick}
      disabled={disabled || loading}
      type='button'
      ref={ref}
      {...rest}
    >
      <ModalButtonContentStyle $hidden={loading}>
        {children} {AdaptiveIcon}
      </ModalButtonContentStyle>
    </ModalButtonStyle>
  )
}

export default forwardRef(ModalButton)
