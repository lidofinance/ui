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

const WAVE_SCALE_FACTORS: Record<InputSize, number> = {
  m: 0.8,
  l: 1,
  xl: 1.2,
}

/**
 * Custom hook for input style calculations based on size
 * Returns style-related values for consistent rendering across different input sizes
 */
export const useInputStyles = ({ size }: UseInputStylesProps) => {
  const waveScale = useMemo(() => WAVE_SCALE_FACTORS[size], [size])

  const buttonStyle = useMemo(
    () => ({
      height: BUTTON_SIZE_MAP[size],
      minWidth: BUTTON_SIZE_MAP[size],
    }),
    [size],
  )

  return {
    waveScale,
    buttonStyle,
  }
}
