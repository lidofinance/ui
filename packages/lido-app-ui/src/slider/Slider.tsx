import {
  forwardRef,
  useId,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import {
  Field,
  getFieldDescribedBy,
  resolveFieldError,
  type FieldDataTestId,
} from '../field/Field'
import styles from './Slider.module.css'

export type SliderDataTestId = FieldDataTestId & {
  input?: string
}

export type SliderProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'defaultValue'
> & {
  min?: number
  max?: number
  step?: number
  value?: number
  defaultValue?: number
  label?: ReactNode
  tooltip?: ReactNode
  description?: ReactNode
  error?: ReactNode | boolean
  minLabel?: ReactNode
  maxLabel?: ReactNode
  /** Renders a mark at every intermediate step. */
  marks?: boolean
  dataTestId?: SliderDataTestId
}

/** Native `<input type="range">` with a styled 12px track and 32px thumb; controlled (`value` + `onChange`) or uncontrolled (`defaultValue`); `label`/`description`/`error` add the field chrome. */
export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue,
      label,
      tooltip,
      description,
      error,
      id,
      minLabel,
      maxLabel,
      marks = false,
      className,
      disabled,
      onChange,
      dataTestId,
      'aria-describedby': ariaDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const [innerValue, setInnerValue] = useState(defaultValue ?? min)
    const fallbackId = useId()
    const sliderId = id ?? fallbackId
    const { hasError } = resolveFieldError(error)
    const current = Math.min(Math.max(value ?? innerValue, min), max)
    const fillPercent = max === min ? 0 : ((current - min) / (max - min)) * 100

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
      <Field
        id={sliderId}
        label={label}
        tooltip={tooltip}
        description={description}
        error={error}
        className={className}
        dataTestId={dataTestId}
      >
        <div className={styles.root}>
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
              id={sliderId}
              type='range'
              className={styles.input}
              min={min}
              max={max}
              step={step}
              value={current}
              disabled={disabled}
              onChange={handleChange}
              aria-invalid={hasError || undefined}
              aria-describedby={getFieldDescribedBy(
                sliderId,
                error,
                description,
                ariaDescribedBy,
              )}
              data-testid={dataTestId?.input}
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
      </Field>
    )
  },
)

Slider.displayName = 'Slider'
