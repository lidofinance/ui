import React, { useCallback, useState } from 'react'
import { ButtonProps } from './types'
import { ButtonRippleStyle } from './ButtonStyles'

export const useRipple = ({ onClick }: ButtonProps) => {
  const [ripple, setRipple] = useState<React.ReactNode | null>(null)

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const button = event.currentTarget
      const rect = button.getBoundingClientRect()
      const diameter = Math.max(button.clientWidth, button.clientHeight)
      const radius = diameter / 2
      const isMouseClick = event.clientX > 0 && event.clientY > 0

      const x = isMouseClick
        ? event.clientX - rect.left
        : button.clientWidth / 2

      const y = isMouseClick
        ? event.clientY - rect.top
        : button.clientHeight / 2

      const style = {
        width: diameter,
        height: diameter,
        left: x - radius,
        top: y - radius,
      }

      setRipple(<ButtonRippleStyle style={style} key={event.timeStamp} />)
      onClick?.(event)
    },
    []
  )

  return {
    ripple,
    handleClick,
  }
}
