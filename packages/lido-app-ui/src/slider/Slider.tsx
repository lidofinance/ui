import {
  forwardRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import styles from './Slider.module.css'

export type SliderProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'defaultValue'
> & {
  min?: number
  max?: number
  step?: number
  value?: number
  defaultValue?: number
  minLabel?: ReactNode
  maxLabel?: ReactNode
  /** Renders a mark at every intermediate step. */
  marks?: boolean
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue,
      minLabel,
      maxLabel,
      marks = false,
      className,
      disabled,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const [innerValue, setInnerValue] = useState(defaultValue ?? min)
    const current = value ?? innerValue
    const fillPercent = ((current - min) / (max - min)) * 100

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInnerValue(event.target.valueAsNumber)
      onChange?.(event)
    }

    const stepsCount = Math.round((max - min) / step)
    const markPositions =
      marks && stepsCount > 1
        ? Array.from(
            { length: stepsCount - 1 },
            (_, index) => ((index + 1) / stepsCount) * 100,
          )
        : []

    return (
      <div className={cn(styles.root, className)}>
        <div className={styles.track}>
          <div className={styles.bar}>
            <div
              className={cn(styles.fill, disabled && styles.fillDisabled)}
              style={{ width: `${fillPercent}%` }}
            />
          </div>
          {markPositions.map((position) => (
            <span
              key={position}
              className={styles.mark}
              style={{ left: `${position}%` }}
            />
          ))}
          <input
            ref={ref}
            type='range'
            className={styles.input}
            min={min}
            max={max}
            step={step}
            value={current}
            disabled={disabled}
            onChange={handleChange}
            {...rest}
          />
        </div>
        {minLabel != null || maxLabel != null ? (
          <div className={styles.labels}>
            <span className={styles.label}>{minLabel}</span>
            <span className={styles.label}>{maxLabel}</span>
          </div>
        ) : null}
      </div>
    )
  },
)

Slider.displayName = 'Slider'
