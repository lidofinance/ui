import { ForwardedRef, ReactElement, cloneElement, forwardRef } from 'react'
import { ModalButtonStyle, ModalButtonContentStyle } from './ModalButtonStyles'
import { ButtonProps } from '@lidofinance/button'

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

export type ModalButtonProps = {
  icon: ReactElement
} & ButtonProps

function ModalButton(
  props: ModalButtonProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  const { size = 'md', loading = false, children, icon } = props
  const AdaptiveIconProps =
    icon.props.width || icon.props.height ? icon.props : { ...iconSize[size] }
  const AdaptiveIcon = cloneElement(icon, AdaptiveIconProps)

  return (
    <ModalButtonStyle
      type='button'
      size={size}
      loading={loading}
      ref={ref}
      {...props}
    >
      <ModalButtonContentStyle>
        {children} {AdaptiveIcon}
      </ModalButtonContentStyle>
    </ModalButtonStyle>
  )
}

export default forwardRef(ModalButton)
