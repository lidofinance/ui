const namedColors = [
  'active',
  'success',
  'info',
  'warning',
  'error',
  'neutral',
] as const

export type NamedProgressBarColor = (typeof namedColors)[number]

export const isNamedColor = (c: string): c is NamedProgressBarColor =>
  (namedColors as readonly string[]).includes(c)
