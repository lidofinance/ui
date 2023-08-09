import {
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useState,
} from 'react'
import styles from './Button.module.css'

type UseRipple = (props: {
  onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
  ripple: ReactNode
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const useRipple: UseRipple = ({ onClick }) => {
  const [ripple, setRipple] = useState<ReactNode | null>(null)

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
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

      setRipple(
        <span className={styles.ripple} style={style} key={event.timeStamp} />,
      )
      onClick?.(event)
    },
    [onClick],
  )

  return {
    ripple,
    handleClick,
  }
}
