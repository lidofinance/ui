import { useMemo } from 'react'

export type InputSize = 'm' | 'l' | 'xl'

export type UseInputStylesProps = {
  size: InputSize
}

const BUTTON_SIZE_MAP: Record<InputSize, number> = {
  m: 38,
  l: 48,
  xl: 56,
}

const BUTTON_MARGIN_MAP: Record<InputSize, number> = {
  m: 4,
  l: 6,
  xl: 7,
}

/**
 * Custom hook for input style calculations based on size
 * Returns style-related values for consistent rendering across different input sizes
 */
export const useInputStyles = ({ size }: UseInputStylesProps) => {
  const buttonStyle = useMemo(
    () => ({
      height: BUTTON_SIZE_MAP[size],
      minWidth: BUTTON_SIZE_MAP[size],
      marginRight: BUTTON_MARGIN_MAP[size],
    }),
    [size],
  )

  return {
    buttonStyle,
  }
}
