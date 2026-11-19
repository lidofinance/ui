import {
  forwardRef,
  useId,
  type ChangeEvent,
  type CSSProperties,
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
import { useControllableState } from '../hooks'
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

const snapToStep = (raw: number, min: number, max: number, step: number) => {
  const clamped = Math.min(Math.max(raw, min), max)
  if (!(step > 0)) return clamped
  const lastStep = Math.floor((max - min) / step + 1e-9)
  const steps = Math.min(Math.round((clamped - min) / step), lastStep)
  return parseFloat((min + Math.max(steps, 0) * step).toPrecision(12))
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
    const [state, setValue] = useControllableState({
      value,
      defaultValue,
      name: 'Slider',
    })
    const fallbackId = useId()
    const sliderId = id ?? fallbackId
    const { hasError } = resolveFieldError(error)
    const current = snapToStep(state ?? min, min, max, step)
    const fillPercent = max === min ? 0 : ((current - min) / (max - min)) * 100

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.valueAsNumber)
      onChange?.(event)
    }

    const stepsCount = Math.round((max - min) / step)

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
            {marks && stepsCount > 1 ? (
              <span
                className={styles.marks}
                style={{ '--local-steps': stepsCount } as CSSProperties}
              />
            ) : null}
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
