export type RiskZone =
  | 'conservative'
  | 'moderate'
  | 'aggressive'
  | 'liquidation'

export type LtvZoneThresholds = {
  conservative: number
  moderate: number
  aggressive: number
}

export const getDefaultZones = (max: number): LtvZoneThresholds => ({
  conservative: max / 3,
  moderate: (2 * max) / 3,
  aggressive: max,
})

// Zones the thumb can actually rest in. 'liquidation' is the visual band past
// the red line — the thumb never reaches it, so it's never an active zone.
export type SelectableZone = Exclude<RiskZone, 'liquidation'>

export const getActiveZone = (
  value: number,
  zones: LtvZoneThresholds,
): SelectableZone => {
  if (value <= zones.conservative) return 'conservative'
  if (value <= zones.moderate) return 'moderate'
  return 'aggressive'
}

const clamp = (ratio: number): number => Math.min(1, Math.max(0, ratio))

export const getValuePercent = (value: number, max: number): number => {
  if (max <= 0) return 0
  return clamp(value / max) * 100
}

export type LtvSliderGeometry = {
  zone: SelectableZone
  valuePercent: number
  conservativePercent: number
  moderatePercent: number
}

export const getSliderGeometry = (
  value: number,
  max: number,
  zones: LtvZoneThresholds,
): LtvSliderGeometry => ({
  zone: getActiveZone(value, zones),
  valuePercent: getValuePercent(value, max),
  conservativePercent: getValuePercent(zones.conservative, max),
  moderatePercent: getValuePercent(zones.moderate, max),
})

// Mirrors the geometry encoded in LtvSlider.module.css.
// The full track holds a trailing liquidation zone, so the thumb travels only
// across the usable fraction (`--ltv-usable: 75.25%`); these px insets match
// the thumb width / track padding used by the `.thumb` left calc.
const USABLE_TRACK_FRACTION = 0.7525
const TRACK_PADDING_PX = 4
const THUMB_WIDTH_PX = 36

const clampValue = (value: number, max: number): number =>
  Math.min(max, Math.max(0, value))

const roundTo = (value: number, decimals: number): number => {
  const factor = 10 ** decimals
  return Math.round(value * factor) / factor
}

// Inverse of the thumb-position CSS: maps a pointer clientX into the 0..max
// value domain, anchoring on the thumb centre travel so the grabbed point
// tracks the cursor 1:1.
export const getValueFromPointer = (
  clientX: number,
  trackRect: { left: number; width: number },
  max: number,
  decimals: number,
): number => {
  if (max <= 0 || trackRect.width <= 0) return 0

  const usableWidth = trackRect.width * USABLE_TRACK_FRACTION
  const thumbCentreMin = TRACK_PADDING_PX + THUMB_WIDTH_PX / 2
  const travel = usableWidth - TRACK_PADDING_PX * 2 - THUMB_WIDTH_PX
  if (travel <= 0) return 0

  const offset = clientX - trackRect.left - thumbCentreMin
  const ratio = Math.min(1, Math.max(0, offset / travel))

  return roundTo(ratio * max, decimals)
}

export const getSteppedValue = (
  value: number,
  delta: number,
  max: number,
  decimals: number,
): number => roundTo(clampValue(value + delta, max), decimals)

// Representative value for a zone — the midpoint of its band, so a label click
// drops the thumb clearly inside the zone rather than on a threshold edge.
export const getZoneTargetValue = (
  zone: SelectableZone,
  zones: LtvZoneThresholds,
  max: number,
  decimals: number,
): number => {
  const target = (() => {
    switch (zone) {
      case 'conservative':
        return zones.conservative / 2
      case 'moderate':
        return (zones.conservative + zones.moderate) / 2
      case 'aggressive':
        return (zones.moderate + zones.aggressive) / 2
    }
  })()

  return roundTo(clampValue(target, max), decimals)
}
