import cn from 'classnames'
import {
  useEffect,
  useRef,
  useState,
  CSSProperties,
  ComponentPropsWithoutRef,
} from 'react'
import s from './WaveLoader.module.css'

const DISAPPEAR_ANIMATION_DURATION = 250

export type WaveLoaderProps = ComponentPropsWithoutRef<'div'> & {
  scale?: number
  variant?: WaveLoaderVariant
  isVisible?: boolean
}

export type WaveLoaderVariant = 'transparent' | 'opaque'

export const WaveLoader = ({
  isVisible: isVisibleProp,
  scale = 1,
  variant = 'opaque',
  className,
  ...rest
}: WaveLoaderProps) => {
  const wrap = useRef<HTMLDivElement | null>(null)
  const [isVisible, setVisible] = useState(isVisibleProp)
  const isAppearing = !isVisible && isVisibleProp
  const isDisappearing = isVisible && !isVisibleProp

  useEffect(() => {
    if (isAppearing) setVisible(true)
    if (isDisappearing && wrap.current) {
      setTimeout(() => {
        setVisible(false)
      }, DISAPPEAR_ANIMATION_DURATION)
    }
  }, [isAppearing, isDisappearing])

  if (!isVisible) return null

  return (
    <div
      ref={wrap}
      className={cn(s.wrap, className, { [s.disappearing]: isDisappearing })}
      style={{ '--wave-svg-scale': scale } as CSSProperties}
      {...rest}
    >
      <div className={cn(s.wave, s.high, s[`variant--${variant}`])} />
      <div className={cn(s.wave, s.low, s[`variant--${variant}`])} />
    </div>
  )
}
