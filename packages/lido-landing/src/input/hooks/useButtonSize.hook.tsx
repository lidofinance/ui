import { ButtonSize } from '../../button'
import { useMemo } from 'react'
import { InputSize } from '../Input'

export type UseInputStylesProps = {
  size: InputSize
}

const BUTTON_SIZE_PROPS_MAP: Record<InputSize, ButtonSize> = {
  s: 's',
  m: 'm',
  l: 'l',
}

export const useButtonSize = ({ size }: UseInputStylesProps) => {
  const buttonSize = useMemo(() => BUTTON_SIZE_PROPS_MAP[size], [size])

  return {
    buttonSize,
  }
}
