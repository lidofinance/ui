import { ButtonSize } from '../../button'
import { useMemo } from 'react'

export type InputSize = 's' | 'm' | 'l'

export type UseInputStylesProps = {
  size: InputSize
}

const BUTTON_SIZE_MAP: Record<InputSize, number> = {
  s: 40,
  m: 48,
  l: 52,
}

const BUTTON_BORDER_RADIUS_MAP: Record<InputSize, string> = {
  s: '24px',
  m: '30px',
  l: '34px',
}

const BUTTON_SIZE_PROPS_MAP: Record<InputSize, ButtonSize> = {
  s: 's',
  m: 'm',
  l: 'l',
}

const BUTTON_PADDING_MAP: Record<InputSize, string> = {
  s: '4px 16px',
  m: '8px 20px',
  l: '10px 20px',
}

/**
 * Custom hook for input style calculations based on size
 * Returns style-related values for consistent rendering across different input sizes
 */
export const useInputStyles = ({ size }: UseInputStylesProps) => {
  const buttonStyle = useMemo(
    () => ({
      minWidth: BUTTON_SIZE_MAP[size],
      height: BUTTON_SIZE_MAP[size],
      borderRadius: BUTTON_BORDER_RADIUS_MAP[size],
      padding: BUTTON_PADDING_MAP[size],
    }),
    [size],
  )

  const buttonSize = useMemo(() => BUTTON_SIZE_PROPS_MAP[size], [size])

  return {
    buttonStyle,
    buttonSize,
  }
}
