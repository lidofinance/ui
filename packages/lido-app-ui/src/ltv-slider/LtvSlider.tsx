import {
  useCallback,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import {
  getDefaultZones,
  getSliderGeometry,
  getSteppedValue,
  getValueFromPointer,
  getZoneTargetValue,
  type LtvZoneThresholds,
  type RiskZone,
  type SelectableZone,
} from './helpers'
import styles from './LtvSlider.module.css'
import { ThumbGrip } from './ThumbGrip'

export type { RiskZone, LtvZoneThresholds } from './helpers'

const ZONE_LABELS: Array<{ zone: RiskZone; label: string }> = [
  { zone: 'conservative', label: 'Conservative' },
  { zone: 'moderate', label: 'Moderate' },
  { zone: 'aggressive', label: 'Aggressive' },
  { zone: 'liquidation', label: 'Liquidation' },
]

// Keyed by SelectableZone — the thumb never rests in liquidation, so it has no
// fill / active-label state.
const FILL_ZONE_CLASS: Record<SelectableZone, string> = {
  conservative: styles.fillConservative,
  moderate: styles.fillModerate,
  aggressive: styles.fillAggressive,
}

const LABEL_ZONE_CLASS: Record<SelectableZone, string> = {
  conservative: styles.labelConservative,
  moderate: styles.labelModerate,
  aggressive: styles.labelAggressive,
}

const VALUE_DECIMALS = 2
const STEP = 1
const PAGE_STEP = 10

export type LtvSliderProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange'
> & {
  value: number
  max: number
  zones?: LtvZoneThresholds
  label?: ReactNode
  description?: ReactNode
  valueText?: ReactNode
  onChange?: (value: number) => void
  className?: string
}

export const LtvSlider = ({
  value,
  max,
  zones,
  label = 'Loan to Value (LTV)',
  description = 'Ratio of collateral value to borrowed value',
  valueText,
  onChange,
  className,
  ...rest
}: LtvSliderProps) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const interactive = Boolean(onChange)

  const resolvedZones = zones ?? getDefaultZones(max)
  const { zone, valuePercent, conservativePercent, moderatePercent } =
    getSliderGeometry(value, max, resolvedZones)

  const hasFill = valuePercent > 0
  const activeZone = hasFill ? zone : null
  const activeLabelClass = activeZone ? LABEL_ZONE_CLASS[activeZone] : null

  const emitFromPointer = useCallback(
    (clientX: number) => {
      const track = trackRef.current
      if (!track || !onChange) return
      const rect = track.getBoundingClientRect()
      onChange(getValueFromPointer(clientX, rect, max, VALUE_DECIMALS))
    },
    [max, onChange],
  )

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!onChange) return
      event.preventDefault()
      event.currentTarget.setPointerCapture(event.pointerId)
      emitFromPointer(event.clientX)
    },
    [onChange, emitFromPointer],
  )

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!onChange) return
      if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
      emitFromPointer(event.clientX)
    },
    [onChange, emitFromPointer],
  )

  const handlePointerUp = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
    event.currentTarget.releasePointerCapture(event.pointerId)
  }, [])

  const handleZoneSelect = (selected: RiskZone) => {
    if (!onChange || selected === 'liquidation') return
    onChange(getZoneTargetValue(selected, resolvedZones, max, VALUE_DECIMALS))
  }

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLSpanElement>) => {
      if (!onChange) return

      const emit = (next: number) => {
        event.preventDefault()
        onChange(next)
      }

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowDown':
          return emit(getSteppedValue(value, -STEP, max, VALUE_DECIMALS))
        case 'ArrowRight':
        case 'ArrowUp':
          return emit(getSteppedValue(value, STEP, max, VALUE_DECIMALS))
        case 'PageDown':
          return emit(getSteppedValue(value, -PAGE_STEP, max, VALUE_DECIMALS))
        case 'PageUp':
          return emit(getSteppedValue(value, PAGE_STEP, max, VALUE_DECIMALS))
        case 'Home':
          return emit(0)
        case 'End':
          return emit(max)
        default:
      }
    },
    [onChange, value, max],
  )

  const trackStyle = {
    '--ltv-value': `${valuePercent}`,
    '--ltv-conservative': `${conservativePercent}`,
    '--ltv-moderate': `${moderatePercent}`,
  } as CSSProperties

  return (
    <div className={cn(styles.root, className)} {...rest}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{label}</span>
          <span className={styles.value}>{valueText ?? `${value}%`}</span>
        </div>
        <div className={styles.subtitleRow}>
          <span className={styles.description}>{description}</span>
          <span className={styles.max}>max. {max.toFixed(2)}%</span>
        </div>
      </div>

      <div
        ref={trackRef}
        className={cn(styles.track, interactive && styles.trackInteractive)}
        style={trackStyle}
        onPointerDown={interactive ? handlePointerDown : undefined}
        onPointerMove={interactive ? handlePointerMove : undefined}
        onPointerUp={interactive ? handlePointerUp : undefined}
        onPointerCancel={interactive ? handlePointerUp : undefined}
      >
        <span
          className={cn(styles.dot, styles.dotConservative)}
          aria-hidden='true'
        />
        <span
          className={cn(styles.dot, styles.dotModerate)}
          aria-hidden='true'
        />

        <span className={styles.liquidation} aria-hidden='true'>
          <span className={styles.liquidationLine} />
          <span className={styles.liquidationGap} />
          <span className={styles.liquidationLine} />
          <span className={styles.liquidationTint} />
        </span>

        {hasFill ? (
          <span
            className={cn(styles.fill, FILL_ZONE_CLASS[zone])}
            aria-hidden='true'
          />
        ) : null}

        <span
          className={styles.thumb}
          role='slider'
          tabIndex={interactive ? 0 : -1}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={
            typeof valueText === 'string' ? valueText : `${value}%`
          }
          aria-label={typeof label === 'string' ? label : undefined}
          aria-readonly={interactive ? undefined : true}
          onKeyDown={interactive ? handleKeyDown : undefined}
        >
          <ThumbGrip />
        </span>
      </div>

      <div className={styles.labels}>
        {ZONE_LABELS.map((item) => {
          const isActive = item.zone === activeZone
          // Liquidation is the visual band past the red line — display-only,
          // the thumb never lands there.
          const isSelectable = interactive && item.zone !== 'liquidation'
          const labelClass = cn(
            styles.label,
            isSelectable && styles.labelInteractive,
            isActive && styles.labelActive,
            isActive && activeLabelClass,
          )

          return isSelectable ? (
            <button
              key={item.zone}
              type='button'
              className={labelClass}
              onClick={() => handleZoneSelect(item.zone)}
            >
              {item.label}
            </button>
          ) : (
            <span key={item.zone} className={labelClass}>
              {item.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}
