import type { CSSProperties } from 'react'

import { breakpoints, type Breakpoint } from './breakpoints'

type DownKey = `${Breakpoint}Down`

type ResponsiveObject<T> = {
  /** Applies at every width unless a breakpoint key overrides it. */
  base?: T
  /** Applies at 1279px and below. */
  lgDown?: T
  /** Applies at 1023px and below. */
  mlDown?: T
  /** Applies at 899px and below. */
  mdDown?: T
  /** Applies at 767px and below. */
  smDown?: T
  /** Applies at 599px and below. */
  xsDown?: T
  /** Applies at 399px and below. */
  xxsDown?: T
  /** Alias of `lgDown`: applies at 1279px and below. */
  lg?: T
  /** Alias of `mlDown`: applies at 1023px and below. */
  ml?: T
  /** Alias of `mdDown`: applies at 899px and below. */
  md?: T
  /** Alias of `smDown`: applies at 767px and below. */
  sm?: T
  /** Alias of `xsDown`: applies at 599px and below. */
  xs?: T
  /** Alias of `xxsDown`: applies at 399px and below. */
  xxs?: T
}

/** Desktop-first: `base` applies everywhere, `<bp>Down` (alias `<bp>`) applies at that breakpoint's width and below, see `breakpointWidths`. */
export type Responsive<T> = T | ResponsiveObject<T>

/** Spacing scale in px. */
export const spaces = [0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 52] as const
export type Space = (typeof spaces)[number]

export const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1)

export const spaceToCss = (space: Space) =>
  space === 0 ? '0' : `var(--lido-app-ui-space-${space}, ${space}px)`

const toKebab = (value: string) =>
  value.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)

type NormalizedResponsive<T> = { base?: T } & Partial<Record<Breakpoint, T>>

const toObject = <T>(value: Responsive<T>): NormalizedResponsive<T> => {
  if (typeof value !== 'object' || value === null) return { base: value }

  const object = value as ResponsiveObject<T>
  const result: NormalizedResponsive<T> = {}
  if (object.base !== undefined) result.base = object.base
  for (const bp of breakpoints) {
    const item = object[`${bp}Down` as DownKey] ?? object[bp]
    if (item !== undefined) result[bp] = item
  }
  return result
}

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

/** Turns a responsive prop into inline `--local-<prop>[-<bp>]` vars, for roots that declare the fallback chain with the `responsive-prop` mixin. */
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
