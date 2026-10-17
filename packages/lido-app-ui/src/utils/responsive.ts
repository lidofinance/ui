import type { CSSProperties } from 'react'

export type Breakpoint = 'lg' | 'ml' | 'md' | 'sm' | 'xs' | 'xxs'

type ResponsiveObject<T> = { base?: T } & Partial<Record<Breakpoint, T>>

/** Desktop-first: `base` applies everywhere, breakpoint keys apply at that width and below. */
export type Responsive<T> = T | ResponsiveObject<T>

/** Spacing scale in px. */
export const spaces = [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 52] as const
export type Space = (typeof spaces)[number]

const breakpoints: Breakpoint[] = ['lg', 'ml', 'md', 'sm', 'xs', 'xxs']

export const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1)

export const spaceToCss = (space: Space) => `${space}px`

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

  if (values.base !== undefined) style[`--local-${prop}`] = toCss(values.base)

  for (const bp of breakpoints) {
    const item = values[bp]
    if (item === undefined) continue
    style[`--local-${prop}-${bp}`] = toCss(item)
    const cls = styles[`${prop}${capitalize(bp)}`]
    if (cls) className.push(cls)
  }

  return { style: style as CSSProperties, className }
}
