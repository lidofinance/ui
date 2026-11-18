const namedColors = [
  'active',
  'light-blue',
  'success',
  'info',
  'warning',
  'error',
  'neutral',
] as const

export type NamedProgressBarColor = (typeof namedColors)[number]

export const isNamedColor = (c: string): c is NamedProgressBarColor =>
  (namedColors as readonly string[]).includes(c)

export const colorClassName = (c: NamedProgressBarColor) =>
  c === 'light-blue' ? 'lightBlue' : c
