import { ForwardedRef, forwardRef } from 'react'
import { ModalButtonStyle, ModalButtonContentStyle } from './ModalButtonStyles'
import { ModalButtonIconProps } from './types'

function ModalButton(
  props: ModalButtonIconProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  const {
    size = 'md',
    square = false,
    fullwidth = false,
    loading = false,
    onClick,
    disabled,
    children,
    icon,
    ...rest
  } = props

  return (
    <ModalButtonStyle
      $size={size}
      $fullwidth={fullwidth}
      $square={square}
      $loading={loading}
      disabled={disabled || loading}
      type='button'
      ref={ref}
      {...rest}
    >
      <ModalButtonContentStyle $hidden={loading}>
        {children} {icon}
      </ModalButtonContentStyle>
    </ModalButtonStyle>
  )
}

export default forwardRef(ModalButton)
