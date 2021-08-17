import { ForwardedRef, forwardRef } from 'react'
import { ModalContentStateProps, ModalContentStateEnum } from './types'

import {
  ModalContentStateStyle,
  ModalContentStateIconStyle,
} from './ModalContentStateStyles'

import { Loader } from '@lidofinance/loaders'
import { Check, Close } from '@lidofinance/icons'

function ModalContentState(
  props: ModalContentStateProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { state, children, ...rest } = props

  let stateContent
  switch (state) {
    case ModalContentStateEnum[ModalContentStateEnum.loading]:
      stateContent = <Loader size={'large'} />
      break
    case ModalContentStateEnum[ModalContentStateEnum.success]:
      stateContent = <Check color={'green'} width={64} height={64} />
      break
    case ModalContentStateEnum[ModalContentStateEnum.error]:
      stateContent = <Close color={'red'} width={64} height={64} />
      break
    default:
      break
  }

  return (
    <ModalContentStateStyle ref={ref} {...rest}>
      <ModalContentStateIconStyle>{stateContent}</ModalContentStateIconStyle>
      {children}
    </ModalContentStateStyle>
  )
}

export default forwardRef(ModalContentState)
