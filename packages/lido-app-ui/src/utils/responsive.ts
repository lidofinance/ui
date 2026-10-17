import type { CSSProperties } from 'react'

export const breakpoints = ['lg', 'ml', 'md', 'sm', 'xs', 'xxs'] as const
export type Breakpoint = (typeof breakpoints)[number]

type ResponsiveObject<T> = { base?: T } & Partial<Record<Breakpoint, T>>

/** Desktop-first: `base` applies everywhere, breakpoint keys apply at that width and below. */
export type Responsive<T> = T | ResponsiveObject<T>

/** Spacing scale in px. */
export const spaces = [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 52] as const
export type Space = (typeof spaces)[number]

export const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1)

export const spaceToCss = (space: Space) => `${space}px`

const toKebab = (value: string) =>
  value.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)

/**
 * Turns a responsive prop into inline `--local-<prop>[-<bp>]` vars plus the
 * `<prop><Bp>` module classes that gate them; the base var is read by the root class.
 */
export const getResponsiveProps = <T>(
  prop: string,
  value: Responsive<T> | undefined,
  toCss: (value: T) => string,
  styles: Record<string, string>,
) => {
  const style: Record<string, string> = {}
  const className: string[] = []

  const values = (
    typeof value === 'object' && value !== null ? value : { base: value }
  ) as ResponsiveObject<T>
  const varName = `--local-${toKebab(prop)}`

  if (values.base !== undefined) style[varName] = toCss(values.base)

  for (const bp of breakpoints) {
    const item = values[bp]
    if (item === undefined) continue
    style[`${varName}-${bp}`] = toCss(item)
    const cls = styles[`${prop}${capitalize(bp)}`]
    if (cls) className.push(cls)
  }

  return { style: style as CSSProperties, className }
}

const toObject = <T>(value: Responsive<T>) =>
  (typeof value === 'object' && value !== null
    ? value
    : { base: value }) as ResponsiveObject<T>

/** Merges per key; `b` wins over `a`. */
export const mergeResponsive = <T>(
  a?: Responsive<T>,
  b?: Responsive<T>,
): Responsive<T> | undefined => {
  if (a === undefined && b === undefined) return undefined
  return {
    ...(a === undefined ? {} : toObject(a)),
    ...(b === undefined ? {} : toObject(b)),
  }
}

/** Turns a responsive prop into inline `--local-<prop>[-<bp>]` vars, for roots that declare a per-breakpoint fallback chain. */
export const responsiveVars = <T>(
  prop: string,
  value: Responsive<T> | undefined,
  toCss: (value: T) => string,
): CSSProperties => {
  if (value === undefined) return {}

  const values = toObject(value)
  const varName = `--local-${toKebab(prop)}`
  const style: Record<string, string> = {}

  if (values.base !== undefined) style[varName] = toCss(values.base)

  for (const bp of breakpoints) {
    const item = values[bp]
    if (item !== undefined) style[`${varName}-${bp}`] = toCss(item)
  }

  return style as CSSProperties
}
