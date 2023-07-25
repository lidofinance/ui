import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'
import styles from './SliderInput.module.css'
import cn from 'classnames'

export interface ValueLabel {
  value: number
  label: ReactNode
}

export type SliderInputProps = ComponentPropsWithoutRef<'input'> & {
  value: number
  onChange?: ChangeEventHandler<HTMLInputElement>
  min?: number
  max?: number
  minLabel?: ReactNode
  maxLabel?: ReactNode
  step?: number
  getLabel?: (value: number) => ReactNode
  borderNone?: boolean
  labels?: ValueLabel[]
  onLabelClick?: (value: number) => unknown
}

export const SliderInput = forwardRef(
  (
    {
      value,
      onChange,
      onLabelClick,
      min = 0,
      max = 100,
      step = 1,
      minLabel,
      maxLabel,
      getLabel = (val) => String(val),
      borderNone,
      labels,
      className,
      style,
      ...rest
    }: SliderInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const fillPercentage = ((value - min) / (max - min)) * 100
    const createClickHandler = (value: number) => () => onLabelClick?.(value)

    return (
      <div className={cn(styles.wrapper, className)} style={style}>
        <div className={cn(styles.slider, { [styles.border]: !borderNone })}>
          {getLabel(value)}
          <div
            className={cn(styles.track, { [styles.border]: !borderNone })}
            style={{ width: `${fillPercentage || 0}%` }}
          />
        </div>
        <input
          type='range'
          className={styles.range}
          value={value}
          step={step}
          onChange={onChange}
          min={min}
          max={max}
          ref={ref}
          {...rest}
        />
        <div className={styles.labelContainer}>
          {minLabel &&
            (onLabelClick ? (
              <button
                className={styles.labelButton}
                onClick={createClickHandler(min)}
              >
                {minLabel}
              </button>
            ) : (
              <span className={styles.label}>{minLabel}</span>
            ))}
          {labels?.map(({ value, label }) =>
            onLabelClick ? (
              <button
                className={styles.labelButton}
                onClick={createClickHandler(value)}
                key={value}
              >
                {label}
              </button>
            ) : (
              <span className={styles.label} key={value}>
                {label}
              </span>
            ),
          )}
          {maxLabel &&
            (onLabelClick ? (
              <button
                className={styles.labelButton}
                onClick={createClickHandler(max)}
              >
                {maxLabel}
              </button>
            ) : (
              <span className={styles.label}>{maxLabel}</span>
            ))}
        </div>
      </div>
    )
  },
)
SliderInput.displayName = 'SliderInput'
